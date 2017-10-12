"use strict";
let datafire = require('datafire');

var google_sheets = require('@datafire/google_sheets').actions;

module.exports = new datafire.Action({
  description: "Creates a new item in the spreadsheet",
  inputs: [{
    title: "strategy",
    type: "string",
    maxLength: 140,
    minLength: 1
  }, {
    title: "author",
    type: "string",
    minimum: 0,
    maximum: 200,
    minLength: 1,
    maxLength: 140
  }, {
    title: "link",
    type: "string",
    default: "",
    maxLength: 273
  }],
  handler: (input, context) => {
    return datafire.flow(context)
      .then(_ => google_sheets.spreadsheets.values.append({
        spreadsheetId: context.variables.spreadsheet_id,
        range: "A1:A" + INPUTS.length,
        valueInputOption: "RAW",
        body: {
          values: [
            INPUTS.map(i => input[i.title])
          ],
        },
      }, context))
  },
});

const INPUTS = module.exports.inputs;

