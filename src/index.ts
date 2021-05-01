import { fetchRecentMails } from "./gmail";
import { sendToLine } from "./line";

declare const global: {
  [x: string]: any;
};

global.main = (_e: any) => {
  const mails = fetchRecentMails();
  if (mails.length === 0) {
    return;
  }

  for (const mail of mails) {
    sendToLine(mail);
  }
};
