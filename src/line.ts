import { properties } from "./properties";

export const sendToLine = (mail: string) => {
  const LINE_NOTIFY_TOKEN = properties.LINE_NOTIFY_TOKEN;
  const ENDPOINT = "https://notify-api.line.me/api/notify";

  UrlFetchApp.fetch(ENDPOINT, {
    method: "post",
    headers: { Authorization: `Bearer ${LINE_NOTIFY_TOKEN}` },
    payload: { message: mail },
  });
};
