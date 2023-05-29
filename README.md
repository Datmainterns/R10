# Barchart HTML5 chart SDK

## The contents of the package

The archive contains the following files:

1. `barchart.chart.js` - the chart component you're integrating into your product(s)
2. `barchart.chart.d.ts` - TypeScript declaration file for the library; please note that this is useful for both TypeScript **and** JavaScript projects
3. `index.html` - a web page hosting a single chart; please note that you may host many charts inside a single page, we've tested dozens of charts shown simultaneously
4. `index.js` - the script needed to add a chart to the page using a _custom_ data feed (complete implementation is provided) for demonstration purposes; in practice, the feed is developed separately and using the chart requires only a few lines of code
5. `style.css` - a simple CSS for styling some elements of the UI using a dark theme
6. `chart.def.json` - a default chart definition with one symbol plot and the volume study using a dark theme
7. `AMZN_Daily.json` - a snapshot of Amazon's daily data for demonstration purposes
8. `AMZN_Events.json` - a snapshot of Amazon's events data for demonstration purposes
9. `package.json` - an npm package definition

## How to run the example

Please note that because the timeseries data is loaded using JavaScript `fetch` functionality, the web page must be served using a web server (in other words, you can't just open `index.html` from the local filesystem). You could use a very mature and popular [one that we like on NPM](https://www.npmjs.com/package/serve). Assuming you've decompressed the SDK into the `chart-lib` folder, simply go into the `chart-lib` folder and run `serve .`. By default, the server will serve the `index.html` on a port 5000.

## Browser support

In order to keep the chart component's size reasonably small, we have built the component for the following browsers/environments (minimal version listed, newer version will work too):

-   Chrome 69
-   Firefox 62
-   Safari 12
-   Edge 18
-   Electron 4

Please note that the component **can** be made to support older browsers (for example IE 11, we have not tested older versions) at the expense of its size which typically grows significantly for very old browsers.

## Using the library with npm

While the example code (`index.html` and related files) is complete and works, it does not show a modern JavaScript development scenario - it's more akin to a traditional approach where you'd reference the library in your HTML, then use the resources from the Barchart "namespace" in your scripts.

However, this is just one and definitely not the only way of using the library. If you would like to reference and build the library with your code and you are using [npm](https://npmjs.com) - which practically all modern approaches do - and any of the modern bundlers ([Webpack](https://webpack.js.org), [Rollup](https://rollupjs.org), [Parcel](https://parceljs.org)) and transpilers like [Babel](https://babeljs.com), then please do _one_ of the two:

1. If you have network access, install our library from npm as usual, that is to say `npm i @barchart/chart-lib` or `yarn add @barchart/chart-lib`
2. If you don't have network access, you may install the package directly from this very archive (no need to decompress) by running `npm i /path/to/chart-lib.tgz` or `yarn add file:/path/to/chart-lib.tgz`

You are now able to `import` any of the functions/classes/constants the chart library exports; these are all documented in the above mentioned TypeScript declaration file. Our module name is `@barchart/chart-lib`.

We've verified that the above works by using a tiny [CRA](https://create-react-app.dev/) app; the steps are identical regardless of your framework of choice.

## Where to find more information

The chart component/SDK does not ship with any form of UI. The API the chart responds to is [documented here](https://docs.barchart.com/chart). We're busy at work making the docs clearer and easier to use, please check back often.

We do have a product which includes the UI called widget. A builder producing the small snippet of the HTML needed to get the widget on your page can be seen [at the widget site](https://demo.barchart.com/chart-widget).
The very same widget powers [our demo site](https://demo.barchart.com/chart). The widget is written in React with no additional libraries.

Please note that we're using the component as-is in many of [Barchart's](https://www.barchart.com) products. The component is in production since 2016 and is battle tested across several different scenarios. The component is framework-agnostic and works equally well in any modern JS framework as well as with no framework at all.
