
function doPost(e) {
  var json = { text: 'Hello world.' };

  return response(json)
}


// レスポンスをJSONとして返す。
function response(json) {
  return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);  
}