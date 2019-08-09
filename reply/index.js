
// リクエスト(POST)を処理する。
function doPost(event) {
  try {
    return normalResponse(event);
  } catch (error) {
    console.log(error);
    return errorResponse();
  }
}

/**
レスポンスを正常終了として処理する。
{
  "token":"XXXXXXXXXXXXXXXXX",
  "team_id":"XXXXXXXXXXXX",
  "team_domain":"muddydixon",
  "channel_id":"XXXXXXXXXXX",
  "channel_name":"general",
  "user_id":"XXXXXXXXXXXX",
  "user_name":"muddydixon",
  "command":"/deploy",
  "text":"",
  "response_url":"https://hooks.slack.com/commands/XXXXXXXXX/XXXXXXX/XXXXXXXXXXX
}
*/
function normalResponse(event) {  
  // リクエストパラメータ情報を取得
  var userId = event.parameter.user_id;
  var message = event.parameter.text;

  // メッセージの入力確認
  if (!message) {
    var json = {
      text: "<@" + userId + "> さん進捗内容が何もないよ。。。",
      response_type: "in_channel"
    };
    return response(json);
  }

  // レスポンス用のJSON
  // メンション付きで感謝のメッセージを送信
  var json = {
    text: "<@" + userId + "> さん進捗報告ありがと。",
    response_type: "in_channel"
  };

  // レスポンスを生成
  return response(json);
}

// レスポンスをエラーとして処理する。
function errorResponse() {
  return response({text: '聞こえない、もう一度言って！！！', response_type: "in_channel"});
}

// レスポンスをJSONとして返す。
function response(json) {
  return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);  
}
