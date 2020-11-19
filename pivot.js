const fs = require('fs');
const path = require('path');
const events = require('events');
const puppeteer = require('puppeteer');

let eventEmitter = new events.EventEmitter();

const directoryPath = "./storage/"; /* A path to the storage of exported files */

((directoryPath) => {
  fs.mkdir(path.resolve(path.resolve(),
    directoryPath.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, '')), { recursive: true }, error => {
      if (error) console.error(error);
    });
})(directoryPath); /* Creating a storage folder for exported files (if such a folder doesn't exist yet) */

(async () => {

  eventEmitter.once('reportcomplete', () => {

    /*
      All changes should be made within this function.
 
      Available methods:
      - setReport (https://www.flexmonster.com/api/setreport/)
      - exportTo (https://www.flexmonster.com/api/exportto/)
 
      The exportTo method takes two parameters: type and params.
      Callback function will be ignored.
      Possible destination types:
      - plain (the file will be saved by the path defined as a value of the "directoryPath" variable)
      - server (the file will be exported to the server)
 
      Available events (use "eventEmitter" to manage events):
      - ready (https://www.flexmonster.com/api/ready/)
      - reportcomplete (https://www.flexmonster.com/api/reportcomplete/)
      - exportcomplete (https://www.flexmonster.com/api/exportcomplete/)
 
      Additional methods and events can be added using the template.
    */

    eventEmitter.once('reportcomplete', () => { /* Exporting when the report is ready */
      exportTo("csv");
      exportTo("html");
      exportTo("pdf");
      exportTo("image");
      exportTo("excel");
    });

    let exportCount = 0;
    eventEmitter.on('exportcomplete', () => {
      exportCount++;
      if (exportCount == 5) browser.close(); /* Closing the browser when all the exports are complete */
    });

    setReport({
      dataSource: {
        filename: 'https://cdn.flexmonster.com/data/data.json'
      }
    });

  });

  const browser = await puppeteer.launch(); /* Launching the headless browser */
  const page = await browser.newPage(); /* Creating a new page */

  /* A function to set a report for the component dynamically */
  function setReport(report) {
    page.evaluate(report => {
      flexmonster.setReport(report);
    }, report)
  }

  /* This code is responsible for the export itself. It supports five export formats: 
     .html, .xlsx, .pdf, .csv, and .png. */
  function exportTo(type, params) {
    page.evaluate((type, params) => {
      type = type.toLowerCase();
      if (params) {
        if (params.destinationType != "plain" && params.destinationType != "server")
          params.destinationType = "plain";
      }
      else params = { destinationType: "plain" };
      if (!params.filename) params.filename = "pivot";
      flexmonster.exportTo(type, params, (result) => {
        switch (type) {
          case "pdf":
            result.data = result.data.output();
            break;
          case "excel":
            result.data = Array.from(result.data);
            break;
          case "image":
            result.data = result.data.toDataURL();
            break;
        }
        exportHandler(result);
      });
    }, type, params);
  }

  await page.exposeFunction('exportHandler', (result) => {
    switch (result.type) {
      case "excel":
        result.data = Buffer.from(result.data);
        result.type = "xlsx";
        break;
      case "image":
        result.data = Buffer.from(result.data.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        result.type = "png";
        break;
    }
    fs.writeFile(`${directoryPath}${result.filename}.${result.type}`, result.data, 'utf8', error => {
      if (error) console.log(error);
    });
  });


  /* This code adds functions to emit ready, reportcomplete, and exportcomplete events for the browser 
     when called. This approach allows us to handle the component's events in the browser's scope. */
  await page.exposeFunction('onReady', () => {
    eventEmitter.emit('ready')
  });
  await page.exposeFunction('onReportComplete', () => {
    eventEmitter.emit('reportcomplete')
  });
  await page.exposeFunction('onExportComplete', () => {
    eventEmitter.emit('exportcomplete')
  });

  /*  Reading the file with the component and setting it as the browser page's contents */
  await page.setContent(fs.readFileSync('index.html', 'utf8'));

  /* This code runs in the page's scope, subscribing the browser window to the component's ready, 
     reportcomplete, and exportcomplete events */
  await page.evaluate(() => {
    window.addEventListener('ready', () => window.onReady());
    window.addEventListener('reportcomplete', () => window.onReportComplete());
    window.addEventListener('exportcomplete', () => window.onExportComplete());
  });

})();