const {GoogleSpreadsheet} = require("google-spreadsheet");

const mapPaging = require('./map.json');
const {GOOGLE_SHEET_ID, CLIENT_EMAIL, PRIVATE_KEY} = process.env;

(async () => {
  const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY.replace(/\\n/gm, '\n')
  });
 
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  await sheet.addRows(mapPaging.total);
})();
