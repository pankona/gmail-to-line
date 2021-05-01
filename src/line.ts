import { properties } from "./properties";

export const sendToLine = (mail: string) => {
  const LINE_NOTIFY_TOKEN = properties.LINE_NOTIFY_TOKEN;
  const ENDPOINT = "https://api.line.me/v2/bot/message/broadcast";

  const resp = UrlFetchApp.fetch(ENDPOINT, {
    method: "post",
    headers: { Authorization: `Bearer ${LINE_NOTIFY_TOKEN}` },
    contentType: "application/json",
    payload: JSON.stringify({ messages: [{ type: "text", text: mail }] }),
    muteHttpExceptions: true,
  });
  console.log(resp.getContentText());
};
