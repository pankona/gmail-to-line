import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

export const sendToLine = (mail: string) => {
  const LINE_NOTIFY_TOKEN = PropertiesService.getScriptProperties().getProperty(
    "LINE_NOTIFY_TOKEN"
  );
  const ENDPOINT = "https://notify-api.line.me/api/notify";
  const options: URLFetchRequestOptions = {
    method: "post",
    headers: { Authorization: `Bearer ${LINE_NOTIFY_TOKEN}` },
    payload: { message: mail },
  };

  UrlFetchApp.fetch(ENDPOINT, options);
};
