"use strict";
let datafire = require('datafire');
let google_sheets = require('@datafire/google_sheets').actions;
let inputs = require('./create').inputs;

function getColumnLetter(idx) {
  return String.fromCharCode(idx + 64);
}

const PAGE_SIZE = 100;
const START_ROW = 2;

module.exports = new datafire.Action({
  description: "",
  handler: (input, context) => {
    let startRow = START_ROW;
    let endRow = startRow + PAGE_SIZE - 1;
    let startCol = 1;
    let endCol = inputs.length + 1;
    return datafire.flow(context)
      .then(_ => google_sheets.spreadsheets.values.get({
        spreadsheetId: context.variables.spreadsheet_id,
        range: getColumnLetter(startCol) + startRow + ':' + getColumnLetter(endCol) + endRow,
      }, context))
      .then(data => {
        let rows = (data.values || []).map((row, rowNum) => {
          let obj = {id: rowNum + 1};
          inputs.forEach((input, idx) => {
            obj[input.title] = row[idx]
          });
          obj.approved = row[inputs.length];
          return obj;
        }).filter(obj => obj.approved);
        return rows;
      })
  },
});
