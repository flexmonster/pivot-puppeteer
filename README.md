# Exporting from Flexmonster Pivot Table & Charts to a server without using a browser
[![Flexmonster Pivot Table & Charts](https://cdn.flexmonster.com/landing.png)](https://flexmonster.com)
Website: www.flexmonster.com

## Flexmonster Pivot Table & Charts

Flexmonster Pivot is a powerful JavaScript tool for interactive web reporting. It allows you to visualize and analyze data from JSON, CSV, SQL, NoSQL, Elasticsearch, and OLAP data sources quickly and conveniently. Flexmonster is designed to integrate seamlessly with any client-side framework and can be easily embedded into your application.

This repository contains a sample project that demonstrates how to export Flexmonster reports without using a browser. We achieve this using [Puppeteer](https://pptr.dev/).

Table of contents:
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Related Flexmonster docs](#related-flexmonster-docs)

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1. Download a `.zip` archive with the sample project or clone it from GitHub with the following command:

```bash
git clone https://github.com/flexmonster/pivot-puppeteer && cd pivot-puppeteer
```

2. Install the npm dependencies described in `package.json`: 

```bash
npm install
```

3. Run the sample project:

```bash
npm start
```
When the export is complete, find the saved files in the `storage/` folder.

**Note:** In this version of the project, Flexmonster is included from CDN. Switch to the [flexmonster-from-nodemodules](https://github.com/flexmonster/pivot-puppeteer/tree/flexmonster-from-nodemodules) branch if you want to include Flexmonster from npm.

## Related Flexmonster docs
- [Export the report](https://www.flexmonster.com/doc/export-report/) — learn more about export in Flexmonster.
