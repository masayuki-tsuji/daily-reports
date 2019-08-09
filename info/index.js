
function doPost(event) {
  var json = {
    text: "テンプレートを教えてあげるね。\n" +
    "`1. 前日までに行ったタスク`\n" +
    "`2. 次の報告までに行うタスク`\n" +
    "`3. 現在抱えている課題`\n" 
  };
  return response(json);
}

// レスポンスをJSONとして返す。
function response(json) {
  return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);  
}
