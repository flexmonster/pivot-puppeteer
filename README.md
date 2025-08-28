# Exporting from Flexmonster Pivot Table & Charts to a server without using a browser
[![Flexmonster Pivot Table & Charts](https://cdn.flexmonster.com/landing.png)](https://www.flexmonster.com/?r=github)
Website: [www.flexmonster.com](https://www.flexmonster.com/?r=github)

## Flexmonster Pivot Table & Charts

Flexmonster Pivot Table & Charts is a powerful and fully customizable JavaScript component for web reporting. It is packed with all core features for data analysis and can easily become a part of your data visualization project. The tool supports popular frameworks like React, Vue, Angular, Blazor, and [more](https://www.flexmonster.com/doc/available-tutorials-integration?r=github). Also, Flexmonster connects to [any data source](https://www.flexmonster.com/doc/supported-data-sources?r=github), including SQL and NoSQL databases, JSON and CSV files, OLAP cubes, and Elasticsearch.

This repository contains a sample project that demonstrates how to export Flexmonster reports without using a browser. We achieve this using [Puppeteer](https://pptr.dev/).

Table of contents:

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Related Flexmonster docs](#related-flexmonster-docs)
* [Support and feedback](#support-and-feedback)
* [Flexmonster licensing](#flexmonster-licensing)
* [Social media](#social-media)

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

**Note:** In this version of the project, Flexmonster is included from npm. Switch to the [master](https://github.com/flexmonster/pivot-puppeteer/tree/master) branch if you want to include Flexmonster from our CDN.

## Related Flexmonster docs
- [Export the report](https://www.flexmonster.com/doc/export-report/?r=github) — learn more about export in Flexmonster.

## Support and feedback

In case of any issues, visit our [Troubleshooting](https://www.flexmonster.com/doc/typical-errors?r=github) section. You can also search among the [resolved cases](https://www.flexmonster.com/technical-support?r=github) for a solution to your issue.

To share your feedback or ask questions, contact our Tech team by raising a ticket on our [Help Center](https://www.flexmonster.com/help-center?r=github). You can also find a list of samples, technical specifications, and a user interface guide there.

## Flexmonster licensing

To learn about Flexmonster Pivot licenses, visit the [Flexmonster licensing page](https://www.flexmonster.com/pivot-table-editions-and-pricing?r=github). 
If you want to test our product, we provide a 30-day free trial.

If you need any help with your license, fill out our [Contact form](https://www.flexmonster.com/contact-our-team?r=github), and we will get in touch with you.

## Social media

Follow us on social media and stay updated on our development process!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/company/flexmonster) [![YouTube](https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/user/FlexMonsterPivot) [![Twitter](https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/flexmonster)
