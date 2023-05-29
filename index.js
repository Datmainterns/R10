const {
    initFeed,
    BaseDataFeed,
    BaseRecordSource,
    TimeSeriesContainer,
    Fields,
    formatPriceWithDecimals,
    asyncReady,
    PubSub,
    ChunkPart,
    Topics,
    SeriesKind,
} = Barchart.RealtimeWidgets.Charts;

const ohlcFields = [
    Fields.DateTime,
    Fields.Open,
    Fields.High,
    Fields.Low,
    Fields.Close,
    Fields.Volume,
    Fields.Change,
];

const chunkSize = 180;
let _jsonData = {};

const dailyFileName = "AMZN_Daily.json";
const eventsFileName = "AMZN_Events.json";

async function getData(fileName) {
    if (_jsonData[fileName] == null) {
        const resp = await fetch(`./${fileName}`);
        _jsonData[fileName] = await resp.json();
    }
    return _jsonData[fileName];
}

class ExampleTimeSeries {
    constructor(query) {
        this.query = query;
        this.container = null;
        this.canLoadMoreData = true;
        this.isLoading = false;
    }
    get hasData() {
        return this.container !== null;
    }

    async loadMoreData(headChunk = true) {
        if (this.isLoading) return Promise.resolve();
        this.isLoading = true;
        const data = await getData(dailyFileName);

        const loaded = this.container !== null ? this.container.size : 0;
        if (data.length === loaded) {
            this.canLoadMoreData = false;
            return;
        }

        const container = new TimeSeriesContainer(ohlcFields);
        let precedingClose = null;
        const to = data.length - loaded;
        const from = Math.max(0, to - chunkSize);
        for (let i = from; i < to; ++i) {
            const row = data[i];
            container.addDataPoint(Fields.DateTime, new Date(row.date));
            container.addDataPoint(Fields.Open, row.open);
            container.addDataPoint(Fields.High, row.high);
            container.addDataPoint(Fields.Low, row.low);
            container.addDataPoint(Fields.Close, row.close);
            container.addDataPoint(Fields.Volume, row.volume);
            container.addDataPoint(Fields.Change, precedingClose != null ? row.close - precedingClose : null);
            precedingClose = row.close;
        }

        if (!headChunk) this.container = container;
        else this.container.prepend(container);
        this.isLoading = false;
        if (headChunk) {
            // the first chunk is loaded implicitly during the call to ready method below
            // so there's no need for notification
            PubSub.publish(Topics.TS_MANYCHANGED, {
                series: this,
                part: ChunkPart.Head,
            });
        }
    }
    async ready() {
        return asyncReady.call(this, async () => {
            await this.loadMoreData(false);
            return true;
        });
    }
}

class ExampleEventsSeries {
    constructor(query) {
        this.query = query;
        this.container = null;
    }
    get hasData() {
        return this.container !== null;
    }
    async loadAndParse() {
        const data = await getData(eventsFileName);
        const suffix = "T00:00:00";
        this.container = new TimeSeriesContainer([
            Fields.DateTime,
            Fields.Dividends,
            Fields.Earnings,
            Fields.Splits,
        ]);
        const addValue = (field, row) => {
            const matching = field.id === row.kind ? row.value : null;
            this.container.addDataPoint(field, matching);
        };
        data.forEach(row => {
            this.container.addDataPoint(Fields.DateTime, new Date(Date.parse(row.date + suffix)));
            this.container.fields.filter(f => f !== Fields.DateTime).forEach(f => addValue(f, row));
        });
        return Promise.resolve(true);
    }
    async ready() {
        return asyncReady.call(this, this.loadAndParse);
    }
}

class ExampleTimeSeriesSource {
    getTimeSeries(query) {
        const kind = query.seriesKind || SeriesKind.Normal;
        const isAmazon = query.symbol === "AMZN";
        if (kind === SeriesKind.Normal) return isAmazon ? new ExampleTimeSeries(query) : null;
        else if (kind === SeriesKind.Events) return isAmazon ? new ExampleEventsSeries(query) : null;
        return null;
    }
}

class ExampleMetaData {
    constructor(decimals) {
        this._decimals = decimals;
    }
    async ready() {
        return true;
    }
    format(price, _field, _options) {
        return formatPriceWithDecimals(price, this._decimals);
    }
}

class ExampleMetaDataSource {
    getMetaData(symbol) {
        return new ExampleMetaData(symbol === "AMZN" ? 2 : 0);
    }
}

class ExampleRecord {
    async ready() {
        return true;
    }
    hasField(_field) {
        return false;
    }
    getValue(_field) {
        return null;
    }
}

class ExampleRecordSource extends BaseRecordSource {
    getRecord(symbol) {
        return symbol === "AMZN" ? new ExampleRecord() : null;
    }
}

class ExampleFeed extends BaseDataFeed {
    constructor(config) {
        super(config);
        this.timeSeriesSource = new ExampleTimeSeriesSource();
        this.metaDataSource = new ExampleMetaDataSource();
        this.recordSource = new ExampleRecordSource();
    }
}
const feed = initFeed(ExampleFeed, {
    throttleMillis: 250,
    apiKey: "<YOUR_API_KEY>",
});

feed.ready().then(done => {
    if (done) {
        feed.addChart("root", {
            symbol: `AMZN`,
        });
    }
});
