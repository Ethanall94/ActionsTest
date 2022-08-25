const {GoogleSpreadsheet} = require("google-spreadsheet");

const creds = require("./jsmap.json");
const mapPaging = require('./map_paging.json');

(async () => {
  const doc = new GoogleSpreadsheet("1OLMn1NTl8aB9UZ4cPgevfRPnM9YRBsKLENhbgczO1MM");
  await doc.useServiceAccountAuth(creds);
 
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  await sheet.addRows(mapPaging.total);
  console.log(mapPaging.total);
})();
