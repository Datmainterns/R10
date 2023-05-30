declare module "@barchart/chart-lib" {
    import PubSub from "pubsub-js";

    /**
     * Assists with asynchronous calls, mainly reentrancy (if you call the function multiple times you'll get back the same `Promise` object). Propagates `this` to the `work` function and uses `this` to store temporary state @see asyncStatePropName
     * @param work A function which performs the actual asynchronous operation.
     * @param [asyncStatePropName = "asyncReadyWork"] A property which stores the state necessary for this helper, only change if the name conflicts with the object's properties.
     */
    export function asyncReady(work: () => Promise<any>, asyncStatePropName?: string): Promise<any>;

    /**
     * Tiny helper for the price formatting.
     * @param price The price to format
     * @param decimals A number of decimals to use
     * @returns {string} A price formatted using the comma (`,`) as thousands separator and the dot (`.`) as the decimal separator.
     */
    export function formatPriceWithDecimals(price: number, decimals: number): string;

    export type FundamentalType =
        | "AccountsPayable"
        | "AccruedExpenses"
        | "Cash"
        | "CommonShares"
        | "DeferredIncomeTax"
        | "DeferredLongRevenues"
        | "EquityOtherInvestments"
        | "IncomeTaxPayable"
        | "Intangibles"
        | "Inventories"
        | "LongTermDebt"
        | "MarketableSec"
        | "OtherCurrentAssets"
        | "OtherCurrentLiabilities"
        | "OtherEquity"
        | "OtherNonCurrentAssets"
        | "OtherNonCurrentLiabilities"
        | "PpeNet"
        | "PrepaidExpenses"
        | "Receivables"
        | "RetainedEarnings"
        | "ShorttermDebt"
        | "TotalAssets"
        | "TotalCurrentAssets"
        | "TotalCurrentLiabilities"
        | "TotalLiabilities"
        | "TotalLiabilitiesAndEquity"
        | "TotalNonCurrentAssets"
        | "TotalNonCurrentLiabilities"
        | "TotalShareholdersEquity"
        | "BasicEpsContOp"
        | "BasicEpsTotalOp"
        | "CostGoods"
        | "DilutedEpsContOp"
        | "DilutedEpsTotalOp"
        | "Ebitda"
        | "GrossProfit"
        | "IncomeTax"
        | "InterestExpense"
        | "NetIncome"
        | "OperatingExpenses"
        | "OperatingIncome"
        | "OtherIncomeExpenses"
        | "PreTaxIncome"
        | "Sales";

    type FundamentalFrequency = "Quarter" | "Year";

    export type FundamentalFieldId =
        | "AccountsPayable"
        | "AccruedExpenses"
        | "Cash"
        | "CommonShares"
        | "DeferredIncomeTax"
        | "DeferredLongRevenues"
        | "EquityOtherInvestments"
        | "IncomeTaxPayable"
        | "Intangibles"
        | "Inventories"
        | "LongTermDebt"
        | "MarketableSec"
        | "OtherCurrentAssets"
        | "OtherCurrentLiabilities"
        | "OtherEquity"
        | "OtherNonCurrentAssets"
        | "OtherNonCurrentLiabilities"
        | "PpeNet"
        | "PrepaidExpenses"
        | "Receivables"
        | "RetainedEarnings"
        | "ShorttermDebt"
        | "TotalAssets"
        | "TotalCurrentAssets"
        | "TotalCurrentLiabilities"
        | "TotalLiabilities"
        | "TotalLiabilitiesAndEquity"
        | "TotalNonCurrentAssets"
        | "TotalNonCurrentLiabilities"
        | "TotalShareholdersEquity"
        | "BasicEpsContOp"
        | "BasicEpsTotalOp"
        | "CostGoods"
        | "DilutedEpsContOp"
        | "DilutedEpsTotalOp"
        | "Ebitda"
        | "GrossProfit"
        | "IncomeTax"
        | "InterestExpense"
        | "NetIncome"
        | "OperatingExpenses"
        | "OperatingIncome"
        | "OtherIncomeExpenses"
        | "PreTaxIncome"
        | "Sales";

    export type StudyFieldId =
        | "MA"
        | "MA1"
        | "MA2"
        | "MA3"
        | "MA4"
        | "MA5"
        | "MA6"
        | "MA7"
        | "MA8"
        | "MA9"
        | "MA10"
        | "MAS"
        | "MAL"
        | "EMA"
        | "MAHI"
        | "MALO"
        | "MACD"
        | "MACDS"
        | "MACDH"
        | "ENVU"
        | "ENVD"
        | "ENVEXPU"
        | "ENVEXPD"
        | "ENVSMOU"
        | "ENVSMOD"
        | "SMA"
        | "TMA"
        | "WMA"
        | "VOLMA"
        | "OSC"
        | "VOSC"
        | "RSI"
        | "STORSI"
        | "HH"
        | "LL"
        | "PercK"
        | "PercD"
        | "PercR"
        | "WGCL"
        | "BOLLBU"
        | "BOLLBL"
        | "BOLLBM"
        | "BOLLBW"
        | "BOLLBP"
        | "OBVOL"
        | "ATR"
        | "PDI"
        | "MDI"
        | "ADX"
        | "ADXM"
        | "ADL"
        | "ADWM"
        | "ADWMMA"
        | "CHAOSC"
        | "TP"
        | "KCUP"
        | "KCMID"
        | "KCLOW"
        | "KBUP"
        | "KBMID"
        | "KBLOW"
        | "KCEUP"
        | "KCEMID"
        | "KCELOW"
        | "DONUP"
        | "DONMID"
        | "DONLOW"
        | "DONW"
        | "PVT"
        | "ROC"
        | "TRIX"
        | "PVPT"
        | "PVPTR"
        | "PVPTS"
        | "ARNUP"
        | "ARNLOW"
        | "ARNOSC"
        | "TCHNUP"
        | "TCHNLOW"
        | "ALJAW"
        | "ALTEETH"
        | "ALLIPS"
        | "PLTLN"
        | "AWOS"
        | "AWOSMA"
        | "MFMUL"
        | "CLV"
        | "CHAMF"
        | "CHAVOL"
        | "DPO"
        | "CCI"
        | "EMV"
        | "EMVMA"
        | "ERBLPOW"
        | "ERBRPOW"
        | "FI"
        | "MI"
        | "MOM"
        | "MOMMA"
        | "MFI"
        | "MSD"
        | "NVI"
        | "NVIEMA"
        | "PVI"
        | "PVIEMA"
        | "PPO"
        | "PPOS"
        | "PPOH"
        | "PVO"
        | "PVOS"
        | "PVOH"
        | "HV"
        | "PERF"
        | "WASI"
        | "WWVSARU"
        | "WWVSARD"
        | "PARSARS"
        | "PARSARL"
        | "MOVLR"
        | "TRSP1"
        | "TRSP2"
        | "PPTPIV"
        | "PPTR1"
        | "PPTR2"
        | "PPTR3"
        | "PPTS1"
        | "PPTS2"
        | "PPTS3"
        | "COTLCCMSP"
        | "COTLCLGSP"
        | "COTLCSMSP"
        | "COTDAGPRO"
        | "COTDAGSPD"
        | "COTDAGMNM"
        | "COTDAGOTH"
        | "COTFTRDLI"
        | "COTFTRASM"
        | "COTFTRLVF"
        | "COTFTROTH"
        | "TR"
        | "IMPVOL"
        | "CTM"
        | "GPMI"
        | "CTLTM"
        | "CTLTMF"
        | "DEMA"
        | "TEMA"
        | "TSI"
        | "TSISIG"
        | "ADJATR"
        | "COTR"
        | "GMMA3"
        | "GMMA5"
        | "GMMA8"
        | "GMMA10"
        | "GMMA12"
        | "GMMA15"
        | "GMMA30"
        | "GMMA35"
        | "GMMA40"
        | "GMMA45"
        | "GMMA50"
        | "GMMA60"
        | "MCGD"
        | "HMA"
        | "COPP"
        | "CPPH4"
        | "CPPH3"
        | "CPPH2"
        | "CPPH1"
        | "CPPL1"
        | "CPPL2"
        | "CPPL3"
        | "CPPL4"
        | "REATRHI"
        | "REATRLO"
        | "BREL"
        | "LINRUP"
        | "LINRMID"
        | "LINRLOW"
        | "CSHO"
        | "CSHB"
        | "GTPI"
        | "TCHRE"
        | "PCTCHG"
        | "ATRMA"
        | "STOMOMIX"
        | "CHDMOMOSC"
        | "VSTOPUP"
        | "VSTOPLOW"
        | "SUPTR"
        | "BARCOLIX"
        | "CONVLN"
        | "BASELN"
        | "LEADSP1"
        | "LEADSP2"
        | "LAGGSP"
        | "VWAP"
        | "VWAPSD1U"
        | "VWAPSD1L"
        | "VWAPSD2U"
        | "VWAPSD2L"
        | "PLVI"
        | "MNVI"
        | "DIFA"
        | "DOSCH"
        | "DOSCS"
        | "BOLLSQ"
        | "TTMSQZON"
        | "TTMSQZOFF"
        | "TTMSQZOSC";

    export type GeneralFieldId =
        | "DateTime"
        | "Open"
        | "High"
        | "Low"
        | "Close"
        | "TradeSize"
        | "Volume"
        | "OpenInterest"
        | "Last"
        | "Symbol"
        | "Change"
        | "PercentChange"
        | "PreviousOpen"
        | "PreviousClose"
        | "PreviousHigh"
        | "PreviousLow"
        | "WeekPreviousClose"
        | "WeekPreviousHigh"
        | "WeekPreviousLow"
        | "MonthPreviousClose"
        | "MonthPreviousHigh"
        | "MonthPreviousLow";

    export type CurveFieldId = FundamentalFieldId | StudyFieldId | GeneralFieldId;

    export type StudyId =
        | "MA"
        | "MACDSIG"
        | "MASIG"
        | "MAEXP"
        | "MAHLC"
        | "MACD"
        | "MACDEXP"
        | "VOL"
        | "MAENV"
        | "MAENVEXP"
        | "MAENVSMO"
        | "MASMO"
        | "MATRI"
        | "MAWEI"
        | "MAVOL"
        | "OSCI"
        | "OSCIVOL"
        | "RSI"
        | "RSIMOD"
        | "RSISTO"
        | "STOCHF"
        | "STOCHS"
        | "WPERCR"
        | "HHLL"
        | "WGCL"
        | "BBANDS"
        | "BWIDTH"
        | "BPERC"
        | "BSQUEEZE"
        | "OBVOL"
        | "ATR"
        | "ADX"
        | "ADXMOD"
        | "ADL"
        | "ADWM"
        | "CHAOSC"
        | "TP"
        | "KELCHN"
        | "KELEXP"
        | "KELBND"
        | "DONCHN"
        | "DONWIDTH"
        | "PVT"
        | "ROC"
        | "TRIX"
        | "PPMOV"
        | "ARNUPDW"
        | "ARNOSC"
        | "TCHN"
        | "ALLG"
        | "PLTLN"
        | "AWEOSC"
        | "CLV"
        | "CHAMF"
        | "CHAVOL"
        | "DPO"
        | "CCI"
        | "EMV"
        | "ERBLPOW"
        | "ERBRPOW"
        | "FI"
        | "MI"
        | "MOM"
        | "MFI"
        | "MSD"
        | "NVI"
        | "PVI"
        | "PPO"
        | "PVO"
        | "HV"
        | "PERF"
        | "WASI"
        | "WWVOL"
        | "PARTP"
        | "MOVLR"
        | "TRSP"
        | "COTLC"
        | "COTDAG"
        | "COTFTR"
        | "PIVPTS"
        | "IMPVOL"
        | "CTM"
        | "GPMI"
        | "DEMA"
        | "TEMA"
        | "TSI"
        | "ADJATR"
        | "COTR"
        | "GMMA"
        | "MCGD"
        | "HMA"
        | "COPP"
        | "CPP"
        | "REATRHI"
        | "REATRLO"
        | "LINRCHN"
        | "CSHO"
        | "CSHB"
        | "GTPI"
        | "TCHRE"
        | "PCTCHG"
        | "OPINT"
        | "STOMOMIX"
        | "CHDMOMOSC"
        | "VSTOP"
        | "SUPTR"
        | "ICHCLD"
        | "VWAP"
        | "VOIN"
        | "DIFA"
        | "DOSC"
        | "MARIB"
        | "HASMO"
        | "TTMSQZ";

    type PlotType =
        | "Symbol"
        | "Expression"
        | "Study"
        | "Forward"
        | "BalanceSheet"
        | "IncomeStatement"
        | "Seasonal"
        | "Annual";

    export type AggregationUnit = "Tick" | "Intraday" | "Day" | "Week" | "Month" | "Quarter" | "Year";
    export type AggregationSpec =
        | "None"
        | "Nearest"
        | "Continue"
        | "FormT"
        | "PerCount"
        | "PerVolume"
        | "PerRange"
        | "PerSeconds";

    export type Aggregation = {
        /** Number of days/weeks etc. the data is aggregated over
         * @default 1
         */
        size?: number;
        /** The unit (or time period) of aggregation
         * @default "Day"
         */
        unit?: AggregationUnit;
        /** Additional info about the aggregation
         * @default "None"
         */
        spec?: AggregationSpec;
        /** If the volume is per contract or total (futures only)
         * @default false
         */
        isContractVolume?: boolean;
        /** Turn off (false) or on (true) dividends adjustment for stock data.
         * @default false
         */
        dividendsAdjust?: boolean;
        /** Whether the contracts in the series will be adjusted based on the roll-gap between the closing prices of the current contract and the previous contract on the day of the switch.
         * @default false
         */
        backAdjust?: boolean;
        /**  Number of calendar days prior to a contract expiration when the series of contracts will be switched to the next contract in the series. Range: 0 to 60.
         * @default 1
         */
        daysToExpiration?: number;
        /** For futures, multi-contract nearest queries; this parameter can be set to one of two values (`"expiration"`, `"combined"`), and determines how the switch from one contract to the next in the series is calculated.
         * @default "expiration"
         */
        contractRoll?: "expiration" | "combined";
    };

    /** A range of values, values are typically inclusive. */
    interface Range {
        /** Beginning of the range, _oftern_ (but not always) ECMAScript timestamp (milliseconds), can be negative. */
        from: number;
        /** Ending of the range, _oftern_ (but not always) ECMAScript timestamp (milliseconds), can be negative. */
        to: number;
    }

    export type PreviousModel = {
        /** Line color
         * @default #000
         */
        color?: string;
        /** Line dash stlye
         * @default "Solid"
         */
        dashStyle?: DashStyle;
        /** If set to `true` will enlarge the price scale range to ensure this fits on the screen.
         * @default false
         */
        forceVisible?: boolean;
    };

    export type DisplayChart = {
        /** Background color of the chart.
         * @default #fff
         */
        backgroundColor?: string;
        /** Deprecated, please ignore. */
        plotBorderColor?: string;
        /** Font family used for all text rendering in the chart.
         * @default "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif
         */
        fontFamily?: string;
        /** Visual aspects of the `Previous` value drawing (this is the last value from the previous trading session or day, depending on the data source) */
        previous: PreviousModel;
        /** Deprecated, please ignore. */
        exportUrl?: string;
        /** If set to `true`, shows a small arc (cap) on the largest and smallest value in the currently visible data range.
         * @default true
         */
        showMinMaxArc?: boolean;
        /** If set to `true`, shows a small button to the bottom right of the main pane, which when clicked, scrolls the chart all the way to the latest (newest) bar. Can be overridden by the data feed configuration.
         * @default false
         */
        showGoToLatest?: boolean;
        /** The default height (a relative value, @see PaneModel) of panes created by chart (for example, the panes are created for you when you add a standalone study). */
        newPaneHeight?: number;
        /** Will draw a focus point at the value the crosshair is pointing at, if crosshair is visible and the curve style is Line or Area. */
        plotHover?: boolean;
        /** If set to `true`, will display a red bold text `No Data` in the middle of the chart when there is no error but no data was loaded for a given symbol. No default, if not set internally defaults to `true`. */
        showNoDataText?: boolean;
        /** Reserved for internal use. */
        bar?: {
            width: number;
            spacing: number;
        };
        /** Which direction is allowed for the user to zoom the chart (self explanatory), one of the `"vertical", "horizontal", "both", "none"`
         * @default "both"
         */
        zooming?: Orientation;
    };

    export type TooltipModel = {
        /** Should any tooltip be visible - set to `false` if not.
         * @default true
         */
        visible?: boolean;
        /** We support several kinds of tooltips
         * - `"standard"` is a global tooltip, shows all values in all panes. Can be floating (movable by user) or auto-moving, as configured in feed settings.
         * - `"bubble"` is per-pane tooltip, follows the mouse pointer/finger.
         * - `"cards"` is a small header, per pane.
         * - `"external"` shows nothing, but sends the notification with the raw data (so that third parties might implement their own tooltips).
         * @default "standard"
         */
        mode?: TooltipMode;
        /** Obsolete, please ignore. */
        backgroundColor?: string;
        /** Obsolete, please ignore. */
        borderColor?: string;
        /** Set to `true` if you want the main plot to be included with the rest of the plots in the `"cards"` mode (some hosts opt to show main plot's data differently).
         * @default false
         */
        showMainPlot?: boolean;
    };
    export type PriceAxisModel = {
        /** How to handle the display of the last price in the timeseries on the price scale:
         * `"None"`: do not show the last price at all
         * `"All"`: show all prices for all plots
         * `"Main"`: only show the last price of the main plot
         * @default "All"
         */
        showLastValue?: "None" | "All" | "Main";
        /** If set to `true` will not allow the prices shown on the price scale (defined by @see showLastValue) to visually overlap; please note that this does mean that some prices will be placed incorrectly - they will be moved out of their normal position so that they are fully visible.
         * @default false
         */
        preventLabelOverlap?: boolean;
        /** When drawing annotations, if this is set to `true`, the annotation points (or anchors) will snap to the closest price point found on the chart.
         * @default false
         */
        snapAnnotationsToPrices?: boolean;
    };

    export type TimeAxisModel = {
        /** Override of the format for the time ticks on the time scale. Uses the same format specifier(s) as the same setting in the @see CrosshairModel */
        format?: string;
        /** Minimum _time_ (in milliseconds) distance between the two ticks on the time scale.
         * @default 0
         */
        minTickInterval?: number;
        /** Minimum pixel interval between the two ticks on the time scale.
         * @default 0 but this means to auto-decide the best value
         */
        tickPixelInterval?: number;
        /** A time range between the leftmost and rightmost bar. */
        visibleRange?: Range;
        /** Obsolete, please ignore. */
        equidistant?: boolean;
        /** A margin in **bars** on the _right_ side of every pane.
         * @default 0
         */
        marginBars?: number;
        /** Reserved for internal use. */
        zoom?: number;
        /** Obsolete, please ignore. */
        resizeHandles?: boolean;
        /** Will ensure that each tick on the axis is fully visible. In practice, this means that leftmost and/or rightmost ticks will be shifted slighty so they aren't visually cut-off. No default but internally defaults to `false`. */
        forceTicksVisible?: boolean;
        /** Set to `false` if you want to prohibit horizontal chart panning (this is used rarely). No default but internally defaults to `true`. */
        panning?: boolean;
    };

    export type DisplayModel = {
        /** An initial time period the data is confined to on the time scale. Corresponds to ISO 8601 duration (please see Wikipedia or other sources for details).  */
        period?: string;
        /** A number of **bars** the data is confined to on the time scale. The historical data is always right-aligned, meaning the latest (newest, most recent in time) data is to the right of the chart, then `density` number of bars is subtracted to arrive at the timestamp of the leftmost bar. */
        density?: number;
        chart: DisplayChart;
        /** Obsolete, please ignore. */
        scrollbar?: any;
        /** Defines the input method that triggers horizontal zooming (yeah, misfortunate name):
         * - `"none"` No zooming allowed
         * - `"wheel" Using the mouse wheel
         * - `"wheel+shift" By holding a shift key and using the mouse wheel
         * @default "wheel"
         */
        scrollBehavior?: ScrollBehavior;
        /** The tooltip is a visual representation of the data under the crosshair (regardless of the visibility of the crosshair itself) at a given point in time. */
        tooltip: TooltipModel;
        yAxis: DisplayAxis & PriceAxisModel;
        xAxis: DisplayAxis & TimeAxisModel;
        /** The default traits applied to annotations drawn. */
        annotationTraits?: AnnotationTraitsModel;
        /** Obsolete, please ignore. */
        curveTraits?: any[];
    };

    export type AnnotationModel = {
        /** A unique identifier of the annotation. */
        id: AnnotationId;
        /** Whether the annotation is visible or not.
         * @default true
         */
        visible?: boolean;
        /** Annotation's visual properties like line color, stroke width, fill color etc. */
        traits?: AnnotationTraitsModel;
        /** Each annotation has one or more anchors, which are points the user can move around and arrange. For example, Line annotation has two - start and end of the line. Note that the point's coordinates are (time, price). */
        points: AnnotationPoint[];
    };

    export type AxisModel = {
        /** Describes the way the plots are presented when more than one plot shares a single axis. Useful _only_ when plots have wildly different price ranges. If `"None"`, the drawing is skewed towards the price scale of the plot with the largest value (other plots will be squished). If set to `"Percent"`, all plots will be drawn as percentages relative to the leftmost (oldest, furthest back in  time) value on the screen. When set to `"Value"` the plots will be drawn as net change relative to the leftmost value.
         * @default "None"
         */
        comparison?: ComparisonMode;
        /** A list of plots attached to the axis. Plots are the visual representation of the timeseries data and are the most imporant concept in the chart. There has to be at least one plot attached to the axis. */
        plots: PlotModel[];
        /** A list of annotations attached to this axis. The annotations (sometimes referred to as drawings) are lines, symbols, fibonacci arcs etc. */
        annotations?: AnnotationModel[];
        /** The way the data is "distributed" along the vertical space - linearly or using a logarithm base 10. You'd use log scale if you had a **lot** of variability in values.
         * @default "Linear"
         */
        scale?: ScaleType;
        /** Reserved for internal use */
        annCache?: any[];
    };

    export type PaneModel = {
        /** All the price axes attached to the pane. At most 2 are allowed, 1 is minimum. */
        axes: AxisModel[];
        /** A logical (relative) height of the pane, best described using an example: if we have 3 panes with heights 4, 2 and 1, then: total relative height is 4 + 2 + 1 = 7; each pane's height is proportional to that total height so (roughly) 57%, 28% and 14%.
         * @default 1
         */
        height?: number;
    };

    export type DataModel = {
        /** The way the data is aggregated across time. */
        aggregation: Aggregation;
        /** Maximum number of data points to load in a first chunk (sent as-is to historical server); there is no default in the model, internally defaults to 640. */
        maxDataPoints?: number;
        /** If set, the range of time the historical data will be limited to (if supported by the historical server). */
        range?: Range;
        /** Reserved for internal use only. */
        checkRange?: boolean;
    };

    export type ChartModel = {
        /** All the settings related to data presented by the chart. */
        data: DataModel;
        /** The display contains all the look and feel related settings (colors, fonts, information density, axes parameters etc.) */
        display: DisplayModel;
        /** A list of panes that the chart consists of. A pane is a vertical slice of space. There has to be at least one pane in the model. */
        panes: PaneModel[];
        /** A monotonically increasing version of the model. Managed internally - when given an older version than the current, the chart will automatically upgrade the model. */
        version: number;
    };

    interface ITopics {
        CH_ALL: string;
        CH_RECREATED: string;
        CH_ANNOTATIONCHANGED: string;
        CH_ANNNEEDSCONTEXTMENU: string;
        CH_CHTNEEDSCONTEXTMENU: string;
        CH_ANNSELECTIONCHANGED: string;
        CH_ANNPOINTPICKED: string;
        CH_PANEHEIGHTSCHANGED: string;
        CH_PANESREORDERED: string;
        CH_NODATAFORMAINSYMBOL: string;
        CH_CARDPLOTCLICKED: string;
        CH_CARDPLOTREMOVED: string;
        CH_TOOLTIPCHANGED: string;
        CH_LOGOCLICKED: string;
        CH_SHUTDOWN: string;
        CH_ZOOMCHANGED: string;
        CH_ALL_DATA_PROJECTED: string;
        CH_API_ACTIONS_RECEIVED: string;
        DF_ALL: string;
        DF_STREAMRECONNECTED: string;
        TS_ALL: string;
        TS_LOADING: string;
        TS_MANYCHANGED: string;
        TS_DATAPOINTADDED: string;
        TS_DATAPOINTCHANGED: string;
        TS_EVENTSCHANGED: string;
        MD_ALL: string;
        MD_CHANGED: string;
        RT_ALL: string;
        RT_QUOTE: string;
        RT_TRADE: string;
        RT_VOLUME: string;
        TL_CHANGED: string;
        ME_ALL: string;
        ME_MOUSE_OUT_SERIES: string;
        ME_MOUSE_OVER_SERIES: string;
    }

    export interface ITooltipChangedData {
        date: string;
        time?: string;
        isMultiSymbol?: boolean;
        isMultiContract?: boolean;
        offset: {
            x: number;
            y: number;
        };
        lastBarRefresh: boolean;
        chartId: string;
        panes: {
            id: string;
            bounds: {
                top: number;
                left: number;
                width: number;
                height: number;
            };
            plots: {
                isMain: boolean;
                type: PlotType;
                typeName: string;
                name: string;
                description?: string;
                exchange?: string;
                error?: string;
                id: string;
                events: {
                    date: Date;
                    value: string;
                    kind: string;
                    visible: boolean;
                    title: string;
                    color: string;
                }[];
                values: {
                    abbreviation: string;
                    shortName: string;
                    id: string;
                    name: string;
                    longName: string;
                    color: string;
                    value: string;
                }[];
            }[];
        }[];
    }

    const Topics: ITopics;

    export type FeedMode =
        | "Unspecified"
        | "GBE"
        | "cmdtyView"
        | "DemoSite"
        | "InternalFeed"
        | "Widget"
        | "FreeWidget";

    type BaseUrl = {
        instruments: string;
        futures: string;
        timeseries: string;
        timeseriesNew: string;
        ondemand: string;
    };

    type UrlKind = keyof BaseUrl;

    type TooltipMovement = "Auto" | "Draggable";

    interface TickProviderOptions {
        height: number;
        approxLineHeight: number;
        domain: [number, number];
        autoTicks: number[];
    }

    interface PriceAxisOverrides {
        tickProvider?(options: TickProviderOptions): number[];
    }

    interface SymbologyOverrides {
        translateSymbol?(symbolName: string): string;
    }

    type LocaleName = "fr" | undefined;

    interface TimeAxisOverrides {
        getLocaleName?(): LocaleName;
    }

    interface Overrides {
        yAxis?: PriceAxisOverrides;
        xAxis?: TimeAxisOverrides;
        symbology?: SymbologyOverrides;
    }

    interface TooltipHeadersConfig {
        showMainPlot?: boolean;
        includeTimestamp?: boolean;
    }

    type HostingModel = "Page" | "Application";

    /** The configuration is extensively documented at our documentation site. */
    interface Config {
        validateInput?: boolean;
        throttleMillis?: number;
        isAlt64?: boolean;
        defaultTemplate?: string | object;
        cachedAnnotationsCount?: number;
        showResizeHandles?: boolean;
        scrollBehavior?: ScrollBehavior;
        bypassSmoothing?: boolean;
        showGoToLatest?: boolean;
        tooltipMovement?: TooltipMovement;
        tooltipHeaders?: TooltipHeadersConfig;
        touchCrosshairTimeoutMillis?: number;
        touchCrosshairDelayMillis?: number;
        mode?: FeedMode;
        hostingModel?: HostingModel;
        logo?: string;
        baseUrl?: BaseUrl;
        overrides?: Overrides;
        noDataText?: string;
        useAllFieldsForComparison?: boolean;
        credentials?: ICredentials;
        apiKey?: string;
        fetch?(kind: UrlKind, relativeUrl: string): Promise<string>;
    }

    /** How should the chart be initialized on startup (if at all). Please note that this is suited for cases where the `template` is already made such that it matches the type of the main plot. This is not an issue: if the template doesn't match (main plot is set to a different kind of plot) the main plot will be replaced by the desired plot with all the values set to their defaults. */
    export type ChartConfig = {
        /** Make the main a plot a symbol. */
        symbol?: string;
        /** Make the main a plot an expression. */
        expression?: string;
        /** Make the main a plot a forward. */
        forward?: string;
        /** Make the main a plot a seasonal. */
        seasonal?: string;
        /** If this is provided, it overrides the default template. It's basically as if you've called the @see load method on a chart instance. */
        template?: string;
    };

    type LoadOptions = {
        keepOldAnnotations: boolean;
        keepNewAnnotations: boolean;
        keepOldCompare: boolean;
        keepNewCompare: boolean;
        keepOldAggregation: boolean;
        keepNewBarWidth: boolean;
    };

    type TitleOptions = {
        /** The text of the title. */
        text: string;
        /** Horizontal alignment of the title.
         * @default "center"
         */
        align?: "center" | "left" | "right";
        /** Vertical alignment of the title.
         * @default "top"
         */
        verticalAlign?: "top" | "middle" | "bottom";
        /** Horizontal position of the title (pixels).
         * @default 0
         */
        x?: number;
        /** Vertical position of the title (pixels).
         * @default 0
         */
        y?: number;
        style?: {
            /** A CSS color string of the text's color.
             * @default #333
             */
            color?: string;
            /** Size of the title text's font, in pixels.
             * @default 18
             */
            fontSize?: number;
        };
    };

    type ExportImageOptions = {
        /** Override the width of the exported image (pixels). By default exports the chart's width as-is currently on the screen. */
        width?: number;
        /**  Override the height of the exported image (pixels). By default exports the chart's height as-is currently on the screen. */
        height?: number;
        /** Temporarily sets the title of the exported image. */
        title?: TitleOptions;
    };

    type ExportedImage = {
        /** Width of the exported image in pixels. */
        width: number;
        /** Height of the exported image in pixels. */
        height: number;
        /** Data URL representation of the PNG image. Please see MDN for details on the data urls. */
        data: string;
    };

    type CurveAttribute = "ChangeBased" | "OpenVsClose";

    type CurveZone = {
        /** A value which is the **maximum** for this zone. If there's nothing set, no maximum. Please note that the minium is implicitly taken to be the maximum of the previous zone (in order listed) of the same curve.  */
        value?: number;
        /** This is a _number_ of colors to take from the curve's `colors` array for the use in this zone. It's basically a small slice of colors, taken in the order the zones are listed. */
        colors: number;
        /** Should we (using implicit values) apply a gradient to the drawing and if so, should we darken or lightne the base color? */
        gradient?: "linLighten" | "linDarken";
    };

    /** Curve is the second most important concept of the chart. It's a smallest drawable unit of time-series data. Most plots consist of several curves, each using a portion of the time-series fields associated with the plot. */
    export interface Curve {
        /** Additional attributes sometimes needed for drawing.
         * - `ChangeBased`: when deciding whether the price movement was up or down, use the `Change` field to decide.
         * - `OpenVsClose`: like preceding phrase, but use `Open` and `Close` field values of the two consequtive bars to decide whether the trend is up or down.
         * The preceding two attibutes are mutually exclusive, but this is not a rule, just an accident.
         */
        attributes?: CurveAttribute[];
        /** The way the curve is drawn. */
        style?: CurveStyle;
        /** All the colors the curve needs to be drawn. For a detailed explanation of how the colors are used for each of the styles, please see online documentation. At least one color is required. */
        colors?: string[];
        /** List of fields used to draw this curve. Is a _strict_ subset of time-series fields associated with curve's plot, at least one is required. */
        fields?: CurveFieldId[];
        /** Zones are relatively rarely used, mostly for studies. The idea is to split the drawing into zones delineated by prices and draw/color using different colors per zone. */
        zones?: CurveZone[];
        /** Line or stroke width, 0 or higher.
         * @default 2
         */
        lineWidth?: number;
        /** Does the color of the drawing vary from bar to bar (as time passes) or not.
         * @default false
         */
        varyColorPerBar?: boolean;
        /** Is the curve visible?
         * @default true
         */
        visible?: boolean;
        /** Should the curve be shifted, time-wise? Positive numbers shift into the future, negative into the past. No default, but if absent assumed to be zero (no shift).
         */
        shift?: number;
    }

    export type DashStyle =
        | "Solid"
        | "ShortDash"
        | "ShortDot"
        | "ShortDashDot"
        | "ShortDashDotDot"
        | "Dot"
        | "Dash"
        | "LongDash"
        | "DashDot"
        | "LongDashDot"
        | "LongDashDotDot";

    /* Accessors */
    export type ChartAction =
        | MainPlotAccessor
        | AggregationAccessor
        | PeriodAccessor
        | CrosshairAccessor
        | TooltipAccessor
        | EventsAccessor
        | ScaleAccessor
        | OtherAccessor
        | PlotAccessor
        | CompareAccessor
        | AnnotationAccessor
        | MovePaneAccessor
        | TemplateAccessor
        | OutlineAccessor
        | ThemeAccessor;

    export interface MainPlotAccessor {
        id: string;
        context:
            | IMainPlotSymbolContext
            | IMainPlotExpressionContext
            | IMainPlotForwardContext
            | IMainPlotSeasonalContext
            | IMainPlotAnnualContext;
    }

    export interface IMainPlotSymbolContext {
        symbol: string;
    }

    export interface IMainPlotExpressionContext {
        expression: string;
    }

    export interface IMainPlotForwardContext {
        forward: string;
    }

    export interface IMainPlotSeasonalContext {
        seasonal: string;
    }

    export interface IMainPlotAnnualContext {
        annual: string;
    }

    export interface AggregationAccessor {
        id: string;
        context: Aggregation;
    }

    export interface PeriodAccessor {
        id: string;
        context: { period: string } | { range: { from?: number; to?: number } } | { density: number };
    }

    export interface CrosshairProperties {
        color: string;
        dashStyle?: DashStyle;
    }

    export interface CrosshairAccessor {
        id: string;
        context: {
            crosshair: Orientation;
            horizontal?: CrosshairProperties;
            vertical?: CrosshairProperties;
        };
    }

    export type Orientation = "vertical" | "horizontal" | "both" | "none";

    export interface TooltipAccessor {
        id: string;
        context: ITooltipContext;
    }

    export interface ITooltipContext {
        visible?: boolean;
        mode?: TooltipMode;
    }

    export type TooltipMode = "standard" | "bubble" | "cards" | "external";

    export interface EventsAccessor {
        id: string;
        context: {
            dividends?: boolean;
            earnings?: boolean;
            splits?: boolean;
        };
    }

    export interface ScaleAccessor {
        id: string;
        context: {
            scale?: ScaleType;
            marginBars?: number;
            minPadding?: number;
            maxPadding?: number;
            preventLabelOverlap?: boolean;
            snapAnnotationsToPrices?: boolean;
        };
    }

    export type ScaleType = "Linear" | "Logarithmic";

    export interface OtherAccessor {
        id: string;
        context: {
            /**
             * Deprecated. Use comparisonMode instead
             */
            percentChange?: boolean;
            comparisonMode?: ComparisonMode;
            showLastValue?: ShowLastValue;
            gridLines?: Orientation;
            minorGridLines?: Orientation;
            newPaneHeight?: number;
            showNavigator?: boolean;
            plotHover?: boolean;
            showGoToLatest?: boolean;
        };
    }

    export type ComparisonMode = "None" | "Percent" | "Value";

    export type ShowLastValue = "None" | "All" | "Main";

    export interface PlotAccessor {
        id: string;
        context: {
            id: "Add" | "Get" | "Delete" | "Update";
            type?: PlotType;
            main?: boolean;
            index?: number;
            studyId?: string;
            fundamentalId?: string;
            expression?: string;
            forward?: string;
            seasonal?: string;
            annual?: string;
            frequency?: "Quarter" | "Year";
            inputs?: { name: string; value: number | string }[];
            curves?: Curve[];
            levels?: {
                value: number;
                line: { width?: number; color?: string; dashStyle?: DashStyle };
                name?: string;
            }[];
            bands?: { range: { from?: number; to?: number }; fill: { color?: string } };
            placement?: StudyPlacement;
            cloneIndex?: number;
            offsets?: number[];
        };
    }

    export type StudyPlacement = "overlay" | "standalone" | "withMain" | "clone";

    export interface CompareAccessor {
        id: string;
        context: {
            plots?: ICompareItem[];
        };
    }

    export interface ICompareItem {
        symbol?: string;
        type: PlotType;
        expression?: string;
        leftScale?: boolean;
        curves?: Curve[];
    }

    export interface AnnotationAccessor {
        id: string;
        context: {
            id: "Delete" | "Update" | "Duplicate" | "List";
            uid?: string;
            visible?: boolean;
            traits?: AnnotationTraits;
            extras?: {
                [k: string]: any;
            };
            points?: AnnotationPoint[];
        };
    }

    export interface MovePaneAccessor {
        id: string;
        context: {
            from: number;
            to: number;
        };
    }

    export interface TemplateAccessor {
        id: string;
        context: {
            strip: {
                main?: boolean;
                annotations?: boolean;
                compare?: boolean;
            };
        };
    }

    export interface OutlineAccessor {
        id: string;
        context: {
            id: string;
        };
    }

    export interface ThemeAccessor {
        id: "Theme";
        context: {
            backgroundColor: string;
            axis: {
                gridLinesColor?: string;
                gridLinesStyle?: DashStyle;
                textColor?: string;
                crosshairColor?: string;
            };
            fontSize?: {
                chart?: number;
                xAxis?: number;
                yAxis?: number;
            };
        };
    }

    type CrosshairModel = {
        /** Is the crosshair visible (on a given axis).
         * @default true
         */
        enabled?: boolean;
        /** Obsolete, applis to time axis and is always considered to be `true`.
         * @default false
         */
        snap?: boolean;
        /** Should we show the price/time the crosshair is pointing at?
         * @default true
         */
        showValue?: boolean;
        /** Background color of the price/time pointed at.
         * @default #c0c0c0
         */
        color?: string;
        /** Dash style of the crosshair line. */
        dashStyle?: DashStyle;
        /** The format of the price/time, if @see showValue is set to `true`. For historical/backward compatibility reasons, we support PHP format spec with syntax `{value:<format>}`, but the default (and we recommend) is just the format using Unicode Technical Standard 35*/
        format?: string;
    };

    type GridLinesModel = {
        /** Is this gridline visible.
         * @default true
         */
        visible?: boolean;
        /** Gridline color
         * @default #d8d8d8
         */
        color?: string;
        /** Width of the gridline.
         * @default 1
         */
        lineWidth?: number;
        /** Dash style @see DashStyle of the grid line.
         * @default "Solid"
         */
        dashStyle?: DashStyle;
    };

    type DisplayAxis = {
        /** Is this axis visible?
         * @default true
         */
        visible?: boolean;
        /** Style and visibility of the gridlines. */
        gridLines: GridLinesModel;
        /** Style and visibility of minor gridlines (price scale only). */
        minorGridLines?: GridLinesModel;
        /** Color of all the text shown on the axis.
         * @default #000
         */
        textColor?: string;
        /** Style and visibility of the crosshair for this axis. */
        crosshair: CrosshairModel;
    };

    export interface AnnotationTraitsModel {
        /** Line or stroke related traits. */
        line?: LineTrait;
        /** Fill related traits. */
        fill?: FillTrait;
        /** Marker related traits. Markers are additional adornments applied to drawings like arrow endings of lines. */
        marker?: MarkerTrait;
        /** Obsolete, please ignore. */
        zIndex?: number;
        /** A few annotations can have open-ended properties, so we must allow that. */
        [key: string]: any;
    }

    export interface LineTrait {
        /** Color of the line.
         * @default #000
         */
        color?: string;
        /** Dash style of the line.
         * @default "Solid"
         */
        dashStyle?: DashStyle;
        /** Line width.
         * @default 1
         */
        width?: number;
    }

    interface FillTrait {
        /** Fill color, no default. */
        color?: string;
    }

    export interface MarkerTrait {
        /** To which part of the line does the marker apply to - beginning, end, both ends or none. There is no default.
         */
        vertex: "start" | "end" | "both" | "none";
        /** A type of marker; only "arrow" is accepted.
         * @default "arrow"
         */
        kind?: "arrow";
    }

    export type AnnotationId =
        | "Line"
        | "VerticalLine"
        | "HorizontalLine"
        | "FiftyPercentLine"
        | "LongPosition"
        | "ShortPosition"
        | "FibonacciRetracement"
        | "FibonacciFan"
        | "FibonacciArcs"
        | "GannFan"
        | "SpeedResistanceFan"
        | "SpeedResistanceArcs"
        | "AndrewsPitchfork"
        | "Rectangle"
        | "Ellipse"
        | "TrendChannel"
        | "SymbolArrowUp"
        | "SymbolArrowDown"
        | "SymbolArrowRight"
        | "SymbolArrowLeft"
        | "SymbolArcDown"
        | "SymbolArcUp"
        | "SymbolThumbsUp"
        | "SymbolThumbsDown"
        | "SymbolOne"
        | "SymbolTwo"
        | "SymbolThree"
        | "SymbolFour"
        | "SymbolFive"
        | "SymbolQuestion"
        | "SymbolFishHook"
        | "FibonacciTimeZones"
        | "Text"
        | "ComputedText";

    export interface AnnotationPoint {
        /** Price (y) coordianate. */
        price: number;
        /** Time (x) coordinate. Number because it is a JavaScript Date, milliseconds since Unix epoch. */
        time: number;
    }

    export interface Annotation {
        id: AnnotationId;
        axisIndex: number;
        paneIndex: number;
        index: number;
        points: AnnotationPoint[];
        traits: AnnotationTraits;
        visible: boolean;
    }

    export interface AnnotationTraits {
        line?: LineTrait;
        fill?: FillTrait;

        fill2?: FillTrait;
        fillText?: FillTrait;
        compact?: boolean;
        accountSize?: number;
        risk?: number;
        riskIsPercent?: boolean;

        showPrices?: boolean;

        showTimestamps?: boolean;

        extendPoint1?: boolean;
        extendPoint2?: boolean;
        showBarCount?: boolean;
        showPercentDiff?: boolean;

        showTrendline?: boolean;
        factors?: Array<{ shown: boolean; value: number }>;
    }

    export interface IAnnotationData {
        uid: string;
        id: string;
        offset: { x: number; y: number };
        traits: AnnotationTraits;
        extras: any;
        points: AnnotationPoint[];
        chart: ChartAccessor;
    }

    export type ScrollBehavior = "wheel" | "wheel+shift" | "none";

    export type RenderTo = string | HTMLElement;

    /** Chart accessor is the main API entry point, it essentially _is_ the chart. */
    export class ChartAccessor {
        /** The only parameter for construction is `headless` which if set to `true` will create a chart without any kind of visual representation. This form of a chart is useful for template editors which don't render any content. */
        constructor(headless?: boolean);
        /** This is the id of the HTML element (almost always a `div`) hosting the chart. The chart will _not_ size itself in any way, it will use whatever space was given to the host element and will continue adapting its size to the host element as its size changes. */
        elementId: string;
        /** The HTML element hosting/wrapping the chart; its id is the @see elementId */
        hostElement: HTMLElement;
        /** Always up-to-date model of the chart at any given moment. If you need to restore the chart later, take the model and save it somewhere, then @see load the model later. */
        model: ChartModel;
        /** You don't need to call this method, it is called by the @see BaseDataFeed for you when you call the @see addChart method. */
        initialize(renderTo: RenderTo, config: ChartConfig): void;
        /** If you are going to be creating and removing a lot of charts during the host page's lifetime, you should always call the `shutdown` method when you no longer need the chart. Please note that if you are simply going to @see load another chart's definition into the same chart instance, you don't need to call this method. In other words, this method applies if you are tearing down chart completely, and clearing the @see elementId (and @see hostElement) completely. */
        shutdown(): boolean;
        /** Call this method when you need to place an annotation on the chart. Detailed information can be found in the online documentation. */
        annotate(id: string, traits?: AnnotationTraits, annParam?: any): void;
        /** Helper method to return back the default template, the same one you've provided during the feed's @see init call. */
        getDefaultTemplate(): string;
        /** Main API entry point. Please check out online documentation for details. */
        change(...actions: ChartAction[]): void | any;
        /** Load a chart definition into this chart instance. The `options` define some rarely used, well, options like whether we should keep annotations or not etc. */
        load(definition: string, options?: LoadOptions): void;
        /** Save a chart definition into a string. */
        save(): string;
        /** Set the title for the chart. Not used often. Is ephemeral - does not get saved with the chart. */
        setTitle(titleOptions: TitleOptions): void;
        /** Exports all the data currently loaded in the chart as a CSV. Best viewed as a spreadsheet in, say, Microsoft Excel. */
        exportData(): string;
        /** Export the currently visible portion of the chart into a PNG image. */
        exportImage(options: ExportImageOptions): ExportedImage;
        /** Prints the chart, optionally adding a title (for the print-out only, reverts back to no title when the printing is over).  */
        print(options: { title: TitleOptions }): void;
        /** Reserved for internal use. */
        fromModel(model: ChartModel): void;
    }

    export enum SeriesKind {
        Normal = 0,
        Forward,
        HistoricalForward,
        Study,
        BalanceSheet,
        IncomeStatement,
        Events,
    }

    interface BaseTimeSeriesQuery {
        /** Symbol name to load the data for. */
        symbol: string;
        /** A kind of series we're loading. Please note that this is an enum, so numeric value.
         * @default SeriesKind.Normal
         */
        seriesKind?: SeriesKind;
        /** Should the chart cache the result; used _only_ when the data feed supports caching.
         * @default false
         */
        cacheMe?: boolean;
    }

    interface NormalTimeSeriesQuery extends BaseTimeSeriesQuery {
        /** Aggregation of the data. */
        aggregation: Aggregation;
        /** Limit returned data to a given time span. */
        range?: Range;
    }

    interface EventsTimeSeriesQuery extends BaseTimeSeriesQuery {
        /** Should we fetch dividends?
         * @default false
         */
        dividends: boolean;
        /** Should we fetch earnings?
         * @default false
         */
        earnings: boolean;
        /** Should we fetch splits?
         * @default false
         */
        splits: boolean;
    }

    /** The definition of the historical data query. */
    export type ITimeSeriesQuery = NormalTimeSeriesQuery | EventsTimeSeriesQuery;

    /**
     * Stores the data to display. This is conceptually a hash table with fields as keys and plain JS arrays as values. All the arrays are of the same length.
     */
    export class TimeSeriesContainer {
        /**
         *
         * @param fields Fields used in this container. Every container should have at least `Fields.DateTime` and one other field (but we're not validating).
         */
        constructor(fields: Field[]);
        /**
         * Prepend the data from the provided container, based on the values in the `Fields.DateTime` array.
         * @param container Another container whose values should be combined with this one.
         */
        prepend(container: TimeSeriesContainer): void;
        /**
         * Append the data from the provided container, based on the values in the `Fields.DateTime` array.
         * @param container Another container whose values should be combined with this one.
         */
        append(container: TimeSeriesContainer): void;
        /**
         * A getter for time values.
         * @returns The values associated with the field `Fields.DateTime`.
         */
        getTimeData(): Date[];
        /**
         * A getter for values of any field kept by this object.
         * @param field A field whose values you are looking for.
         * @returns Array of values for the field.
         */
        getData(field: Field): FieldValueArray;
        /**
         * A setter for any fields' values.
         * @param field A field whose values you are replacing.
         * @param data Array of values to set for the field in question.
         */
        setData(field: Field, data: FieldValueArray): void;
        /**
         * Are this field's values stored by this container?
         * @param field A field you are checking.
         * @returns `true` if the field is present.
         */
        hasField(field: Field): boolean;
        /**
         * Getter for the container logical size
         * @returns Length of array of values of the first field in the container. Remember, all fields' values should have the same length.
         */
        get size(): number;
        /**
         * A syntactic sugar for `this.size === 0`
         * @returns `true` if the container has no data in it.
         */
        get isEmpty(): boolean;
        /**
         * Appends a single value of a field.
         * @param field A field whose value we're adding.
         * @param dataPoint A value we're adding.
         * @return Nothing.
         */
        addDataPoint(field: Field, dataPoint: FieldValue): void;
        /**
         * Getter for the last (newest in time) value of a field.
         * @param field A field whose value we're looking for.
         * @returns Newest value of a given field.
         */
        getLastDataPoint(field: Field): FieldValue;
        /**
         * Setter for the last (newest in time) value of a field.
         * @param field A field whose value we're looking for.
         * @param dataPoint A value to use.
         * @returns Nothing.
         */
        setLastDataPoint(field: Field, dataPoint: FieldValue): void;
    }

    /** An instance of the object representing time-series data. */
    export interface ITimeSeries {
        /** Can we load more data or have we loaded everything? The basic assumption is that we are loading data in chunks since there's a lot of data and users are often interested in only the latest data (no need to overload both servers and client machines with data they will never look at.) */
        canLoadMoreData: boolean;
        /** Are we currently loading the data? */
        isLoading: boolean;
        /** A container is an instance which actually stores the data. */
        container: TimeSeriesContainer | null;
        /** Do we have any data currently? */
        hasData: boolean;
        /** Called when we should load more data. Happens automatically as the user scroll the chart into the past such that we don't have any more data to show.
         * @param [headChunk = true] If the chunk to load is head or the first. Please note that we consider the head chunk the _oldest_ one in time (or first in sequence). Thus when this is `true` and chunk is loaded it is _prepended_ to the existing data.
         * @returns A promise which resolves when the data has been loaded. WHen the data is finished loading, please emit a notification using `PubSub.publish(Topics.TS_MANYCHANGED, { series: this, part: @see ChunkPart})`
         */
        loadMoreData(headChunk?: boolean): Promise<void>;
        /** An initialization of sorts. Typically this is when the first (head) chunk of the data is being loaded (in other words, we load the data eagerly).
         
         * @returns A promise which resolves with a boolean specifying success or failure.
         */
        ready(): Promise<boolean>;
    }

    /** Describes the chunk of the timeseries data. If specified, `Head` means older in time (first in a "list" of chunks) and `Tail` means newer in time (last in a "list" of chunks). */
    export enum ChunkPart {
        Unspecified = 0,
        Head,
        Tail,
    }

    export type FieldValueType = "Number" | "String" | "Date";

    export type FieldCategory =
        | "Common"
        | "Study"
        | "BalanceSheet"
        | "IncomeStatement"
        | "Forward"
        | "Seasonal";

    export type FieldFormat = "FromMetaData" | "AsInteger" | "UseMetricUnit" | "AsPercent";

    /** A field is a descriptor/tag of the price, a 'kind' of price. Without the concept of fields, we wouldn't be able to distinguish different prices because they'd all be just numbers.  */
    export interface Field {
        /** Unique identifier of the field. */
        id: CurveFieldId;
        /** A type of the value associated with this field. */
        type: FieldValueType;
        /** A category the field belongs to (less important). */
        category: FieldCategory;
        /** A name of the field, shown in the UI when there's lots of space. */
        name: string;
        /** A format specifier that helps when formatting prices of this field.
         * - `FromMetaData`: format based on the meta data information only
         * - `AsInteger`: format as an integer
         * - `UseMetricUnit`: format as integer but add magnitude (thousands, millions, etc.)
         * - `AsPercent`: treat value as percentage and format accordingly
         */
        format: FieldFormat;
        /** A shorter name, shown in the UI for cases when we don't have lots of space. */
        shortName: string;
    }

    interface IFields {
        [key: string]: Field;
    }

    export const Fields: IFields;

    export interface ITimeSeriesSource {
        /** Simple factory method returning new time series instances for a given query input.
         * @param query The parameters describing which kind of the data should be fetched.
         * @returns An instance of the @see ITimeSeries
         */
        getTimeSeries(query: ITimeSeriesQuery): ITimeSeries;
    }

    export interface MetaData {
        /** An initialization of sorts. Typically this is when we start loading the meta data (eager loading).
         * @returns A promise which resolves with a boolean specifying success or failure.
         */
        ready(): Promise<boolean>;
        /** The key reason the meta data exists is to format the prices shown on the price scale, in tooltips, anywhere.
         * @param price The price to format.
         * @param field A field whose price this is. You may decide to format the prices differently for some fields. Typical example is `Volume` field which is almost always a huge number so it makes sense to format it with a magnitude specifier (thousands, millions, billions).
         * @param option Additional formatting options, please treat as opaque for now.
         * @returns A string representation of the price.
         */
        format(price: number, field: Field, options: any): string;
    }

    export interface IMetaDataSource {
        /** Simple factory method returning new meta data instances for a given symbol name.
         * @param symbol A name of the symbol whose meta data we seek.
         * @returns An instance of the @see MetaData
         */
        getMetaData(symbol: string): MetaData;
    }

    /** Please treat as opaque for now. */
    export class BaseRecordSource {}

    export type FieldValue = number | Date | string | null;
    export type FieldValueArray = number[] | Date[] | string[] | null;

    /** Please treat as opaque for now. */
    export interface Record {
        ready(): Promise<boolean>;
        hasField(field: Field): boolean;
        getValue(field: Field): FieldValue;
    }

    /** Please treat as opaque for now. */
    export interface IRecordSource extends BaseRecordSource {
        getRecord(symbol: string): Record;
    }

    /** A common implementation used by all data feeds. Please note that the implementation contains several more methods, none of which are essential nor need to be used/overridden thus we don't document them. */
    export class BaseDataFeed {
        /** Constructs the data feed instance. At the moment, only one instance per web page is allowed. */
        constructor(config: Config);
        /** Signals that (asynchronous) initialization is finished. You should not call other methods of the data feed before it is "ready". */
        ready(): Promise<boolean>;
        /** Returns an instance of the "headless" chart, @see ChartAccessor constructor for details.*/
        getHeadlessChart(): ChartAccessor;
        /** Create a chart and place it in the HTML element indicated.
         * @param renderTo The id of the element (or the element itself) the chart will be placed into (usually a `div`)
         * @param config The quick way to load a template and set the main plot type (with lots of defaults).
         * @returns @see ChartAccessor
         */
        addChart(renderTo: RenderTo, config?: ChartConfig | string): ChartAccessor;
        /** When you are completely tearing down the HTML of the chart on a page (assuming the page itself isn't being closed - if it is, nothing to do) you should call this method. If you are simply loading another chart's definition into the existing chart, there is no need to do this.
         * @param renderTo The id of the element (or the element itself) the chart was placed into.
         */
        removeChart(renderTo: RenderTo): void;
        /** Get the instance of the chart already on the page.
         * @param renderTo The id of the element (or the element itself) the chart was placed into.
         * @returns @see ChartAccessor or `null` if none was found
         */
        getChart(renderTo: RenderTo): ChartAccessor | null;
        /** Returns the version of the chart engine. The version is always traced to the JS console on startup. */
        version: string;
        /** The instance producing time series objects. */
        getTimeSeriesDataSource(): ITimeSeriesSource;
        /** The instance producing meta data objects. */
        getMetaDataSource(): IMetaDataSource;
        /** The instance producing record objects. */
        getRecordSource(): IRecordSource;
    }

    export type Factory<T> = new () => T;

    /** Built-in feed, use if you have a contract with Barchart to use our data. This one does not provide any streaming data. */
    class BarchartSiteDataFeed extends BaseDataFeed {}

    /** Built-in feed for mini chart widgets, no streaming data but does cache timeseries data. */
    class MiniWidgetDataFeed extends BaseDataFeed {}

    /** Built-in feed, use if you have a contract with Barchart to use our data. This one _does_ provide streaming data. */
    class MarketDataFeed extends BaseDataFeed {
        connection?: any;
    }

    /** A key bootstrapping method to call, once per page: initialized the data feed, which you then use to create charts.
     * @param constr A constructor of the class representing the data feed. Must be a descendant of the @see BaseDataFeed.
     * @param config Optional data feed configuration, @see Config
     * @returns An instance of the class derived from the @see BaseDataFeed
     */
    function initFeed<T extends BaseDataFeed>(constr: new (config: Config) => T, config?: Config): T;

    /** So you don't have to store the instance of the data feed - just call this method. The data feed is your root entry point to all APIs. */
    function getFeed<T extends BaseDataFeed>(): T | null;

    export interface IChartOutline {
        isTemplate: boolean;
        isDefinition: boolean;
        main: {
            isSymbol: boolean;
            isExpression: boolean;
            symbols: Array<string>;
            title: string | null;
        };
        compare: Array<string>;
        annotations: Array<string>;
        studies: Array<string>;
    }

    /** A helper method to return a simplified structure of the chart. */
    function getChartOutline(definitionOrTemplate: string): IChartOutline;

    /** Please consider this as an opaque structure. */
    interface ExpressionInternalModel {}

    /** A structure representing a successful parse of an expression. */
    export interface ExpressionSuccess {
        /** The expression given to be parsed. */
        text: string;
        /** An internal expression model, basically an AST of the expression. */
        model: ExpressionInternalModel;
        /** The same expression given on input but parsed and formatter - basically a cleaned up version of the expression with most whitespace thrown out. */
        clean: string;
        /** The list of symbols found while parsing the expression. */
        symbols: string[];
    }

    /** A structure representing a failed parse of an expression. */
    export interface ExpressionError {
        /** The expression given to be parsed which contained a syntax error somewhere. */
        text: string;
        /** All the details we have about the error in the expression given. */
        error: string;
    }

    /** If you would like to parse expressions yourself (chart will do this automatically for you).
     * @param text The text of the expression. Syntax is described in detail on our documentation site.
     * @param useCache (`false` by default) If the parsing code should cache the expressions parsed.
     * @returns Either a successful parse result @see ExpressionSuccess or a failed result @see ExpressionError
     */
    function parseExpression(text: string, useCache?: boolean): ExpressionSuccess | ExpressionError;

    /** If you would like to evaluate an expression yourself.
     * @param model Same as @see model property of the @see ExpressionSuccess
     * @param valueProvider A function which, given a symbol name, returns a price.
     * @returns The computed value of the expression.
     */
    function evaluateExpression(model: ExpressionInternalModel, valueProvider: (string) => number): number;

    interface StudyMetaRange {
        min: number;
        max: number;
    }

    export interface StudyEnumeration {
        input: string;
        values: string[];
    }

    export interface StudyMeta {
        title: string;
        caption: string;
        overlay: boolean;
        decimals?: number;
        range?: StudyMetaRange;
        enumerations?: StudyEnumeration[];
    }

    export interface StudyInput {
        /** Name of the input parameter. */
        name: string;
        /** Value of the input parameter. */
        value: number | string;
    }

    /** A horizontal line indicating an "important" value for a given study. */
    export interface StudyLevel {
        /** The name of this level. */
        name?: string;
        /** The value of this level, the line representing this level is drawn at this price value. */
        value: number;
        /** All the visual properties of this level, which is just a horizontal line. */
        line: LineTrait;
    }

    /** A horizontal strip between two prices, filled with color, indicating an "important" range of values for a given study. */
    export interface StudyBand {
        /** Range of values (prices) of this band. */
        range: Range;
        /** A fill for this band. */
        fill: FillTrait;
    }

    export interface DetachedScale {
        /** Top scale margin as (mathematical) percentage, defaults to 0.01 (1%) */
        marginTop?: number;
        /** Bottom scale margin as (mathematical) percentage, defaults to 0.01 (1%) */
        marginBottom?: number;
    }

    interface StudyDefaults {
        source?: string;
        inputs?: StudyInput[];
        curves: Curve[];
        levels?: StudyLevel[];
        bands?: StudyBand[];
        detachedScale?: DetachedScale;
    }

    export interface Study {
        id: string;
        defaults: StudyDefaults;
        meta: StudyMeta;
    }

    interface IncomeStatement {
        id: string;
        name: string;
    }

    interface BalanceSheet {
        id: string;
        name: string;
    }

    interface StudyField {
        id: string;
        name: string;
    }

    export type CurveStyle =
        | "OHLC"
        | "Line"
        | "Candlestick"
        | "Area"
        | "Column"
        | "Dots"
        | "HLC"
        | "HL"
        | "Ribbon"
        | "Step"
        | "HollowCandles"
        | "HeikinAshi"
        | "ElderImpulseSystem"
        | "Renko";
    /*| "LineBreak"
        | "Kagi"
        | "PointAndFigure";*/

    interface Taxonomies {
        studies: Study[];
        incomeStatements: IncomeStatement[];
        balanceSheets: BalanceSheet[];
        studyFields: StudyField[];
        curveStyles: CurveStyle[];
        annotations: Array<{
            id: string;
            options: Array<string>;
        }>;
    }

    function getTaxonomies(): Taxonomies;
    function getStudies(): Study[];

    type PlotModel =
        | SymbolPlotModel
        | FundamentalPlotModel
        | StudyPlotModel
        | ExpressionPlotModel
        | SeasonalPlotModel
        | ForwardPlotModel
        | AnnualPlotModel;

    export interface PlotEvents {
        dividends?: PlotEventDividends;
        earnings?: PlotEventEarnings;
        splits?: PlotEventSplits;
        /** Where should the plot events be drawn:
         * - `TimeAxis`: close to the bottom (x) axis, out of the way
         * - `WithSeries`: with the plot's time-series data, slightly above
         * @default "WithSeries"
         */
        placement?: PlotPlacement;
    }
    /** Dividends events' properties */
    export interface PlotEventDividends {
        /** Background color of the dividends "badge".
         * @default #037c27
         */
        color?: string;
        /** Is the dividend shown?
         * @default false
         */
        show: boolean;
        /** Which text does the dividend "badge" show?
         * @default "D"
         */
        title?: string;
    }

    /** Earnings events' properties */
    export interface PlotEventEarnings {
        /** Background color of the earnings "badge"
         * @default #08a0c9
         */
        color?: string;
        /** Is the earning shown?
         * @default false
         */
        show: boolean;
        /** Which text does the earning "badge" show?
         * @default "E"
         */
        title?: string;
    }

    /** Splits events' properties */
    export interface PlotEventSplits {
        /** Background color of the splits "badge"
         * @default #de7726
         */
        color?: string;
        /** Is the split shown?
         * @default false
         */
        show: boolean;
        /** Which text does the split "badge" show?
         * @default "S"
         */
        title?: string;
    }

    export type PlotPlacement = "TimeAxis" | "WithSeries";

    export interface SymbolPlotModel {
        /** The curves are visual representations of the data associated with this plot. They are individual drawings (lines, OHLC bars, candlesticks) which project some slice of data onto the screen in a particular way. There are often multiple curves per single plot and minimum is 1. */
        curves: Curve[];
        /** A symbol name of this plot. */
        symbol: string;
        /** Various "events" which are associated with the symbol of this plot. Things like dividends, splits etc. Not a separate plot because they don't exist separately and are practically always shown with a symbol plot. */
        events?: PlotEvents;
        /** Should we show the previous value (@see PreviousModel).
         * @default false
         */
        showPrevious?: boolean;
        type: "Symbol";
        /** The main plot is the central focal point of the chart - by default, all studies are based off of the main plot's time-series data, for example.
         * This is `false` for all "secondary" plots when we're comparing multiple plots together.
         * @default false
         */
        main?: boolean;
    }

    export interface FundamentalPlotModel {
        /** @see SymbolPlotModel */
        curves: Curve[];
        /** The symbol name whose data we are showing. */
        symbol: string;
        /** This is just like aggregation for time-series data except there are only two possible values.
         * @default "Quarter"
         */
        fundamental?: FundamentalFrequency;
        /** Fundamentals are grouped into two groups or types; there is no default for this property.
         */
        type: FundamentalType;
    }

    export interface StudyPlotModel {
        /** @see SymbolPlotModel */
        curves: Curve[];
        /** An opaque identifier of the plot (or rather its time-series data) this study will be based on. The default value is the onlly accepted value at the moment.
         * @default "$main";
         */
        basis?: string;
        /** A unique identifier of the study. */
        study: StudyId;
        /** An input field the study will be based on, if there's only one (valid for large number of cases, hence this "shortcut"). */
        source?: CurveFieldId;
        /** The input parameters for the study. */
        inputs?: StudyInput[];
        type: "Study";
        /** Levels  delineate important values for a given study, often modeling what's known as "oversold" and/or "overbought" values. */
        levels?: StudyLevel[];
        /** Bands are similar to @see StudyLevel but apply to a range of two values. */
        bands?: StudyBand[];
    }

    export interface ExpressionPlotModel {
        /** @see SymbolPlotModel */
        curves: Curve[];
        /** An expression or a mathematical formula defining this plot. The syntax is described in detail on our documentation site. */
        expression: string;
        type: "Expression";
        /** Set to `true` is the expression is the main plot of the chart (@see SymbolPlotModel for the details).
         * @default false
         */
        main?: boolean;
    }

    export interface SeasonalPlotModel {
        /** @see SymbolPlotModel */
        curves: Curve[];
        /** An expression defining this seasonal. */
        seasonal: string;
        /** A list of numbers defining the _year_ offsets to be used when creating curves of this plot. If there are more curves than offsets then the extra curve is assumed to represent the average (which does not have offset). */
        offsets?: number[];
        /** Set to `true` if this is to be the main plot (@see SymbolPlotModel).
         * @default true
         */
        main?: boolean;
        type: "Seasonal";
    }

    export interface ForwardPlotModel {
        /** @see SymbolPlotModel */
        curves: Curve[];
        /** An expression defining this forward. */
        forward: string;
        /** A list of numbers defining the _day_ offsets to be used when creating curves of this plot. If there are more curves than offsets then the extra curve is assumed to represent the average (which does not have offset). */
        offsets?: number[];
        /** Set to `true` if this is to be the main plot (@see SymbolPlotModel).
         * @default true
         */
        main?: boolean;
        type: "Forward";
    }

    /** Reserved for internal use, please ignore. */
    export interface AnnualPlotModel {
        curves: Curve[];
        annual: string;
        main?: boolean;
        type: "Annual";
    }

    // types used in the API

    interface Plot {
        type: PlotType;
        curves: Curve[];
        index: number;
        title: string;
        cloneIndex?: number;
    }

    export interface SymbolPlot extends Plot {
        main: boolean;
        inputs?: StudyInput[];
    }

    export interface FundamentalPlot extends Plot {
        fundamentalId: FundamentalType;
        frequency?: FundamentalFrequency;
    }

    export interface StudyPlot extends Plot {
        bands: StudyBand[];
        inputs: StudyInput[];
        levels: StudyLevel[];
        placement: StudyPlacement;
        studyId: string;
    }

    export interface ExpressionPlot extends Plot {
        expression: string;
    }

    export interface ForwardPlot extends Plot {
        forward: string;
        offsets: number[];
    }

    export interface SeasonalPlot extends Plot {
        seasonal: string;
        offsets: number[];
    }

    export interface AnnualPlot extends Plot {
        annual: string;
    }

    export type ChartPlot =
        | StudyPlot
        | FundamentalPlot
        | SymbolPlot
        | ExpressionPlot
        | ForwardPlot
        | SeasonalPlot
        | AnnualPlot;

    export interface PlotOfChart {
        chart: ChartAccessor;
        plot: ChartPlot;
    }

    export interface ColorRgba {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    export {
        initFeed,
        getFeed,
        getChartOutline,
        BarchartSiteDataFeed,
        MarketDataFeed,
        MiniWidgetDataFeed,
        parseExpression,
        evaluateExpression,
        getTaxonomies,
        getStudies,
        Topics,
        PubSub,
    };
}
