
function getUserList() {
  const TOKEN = getProperty('TOKEN');
  const SPREAD_SHEET_ID = getProperty('SPREAD_SHEET');

  // Slackユーザー一覧を取得
  var slackApp = SlackApp.create(TOKEN);
  var usersList = slackApp.usersList();

  // スプレッドシートインスタンスの取得
  var spreadsheet = SpreadsheetApp.openById(SPREAD_SHEET_ID);

  var sheet = spreadsheet.getSheetByName("進捗");
  for (var idx in usersList.members) {
    var user = usersList.members[idx];
    Logger.log(user);
  }
  
}


