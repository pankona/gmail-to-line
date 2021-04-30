export const sendToLine = (mail: string) => {
  const LINE_NOTIFY_TOKEN = PropertiesService.getScriptProperties().getProperty(
    "LINE_NOTIFY_TOKEN"
  );
  const ENDPOINT = "https://notify-api.line.me/api/notify";

  UrlFetchApp.fetch(ENDPOINT, {
    method: "post",
    headers: { Authorization: `Bearer ${LINE_NOTIFY_TOKEN}` },
    payload: { message: mail },
  });
};
