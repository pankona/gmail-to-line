export const fetchRecentMails = (): string[] => {
  const FROM_ADDRESS = [""].join(" OR ");
  const MINUTES_INTERVAL = 5;
  const now = Math.floor(new Date().getTime() / 1000);
  const intervalMinutesAgo = now - 60 * MINUTES_INTERVAL;
  const query = `is:unread from:(${FROM_ADDRESS}) after:${intervalMinutesAgo}`;

  const threads = GmailApp.search(query);
  const mails = GmailApp.getMessagesForThreads(threads);
  const notices = [];

  for (const messages of mails) {
    const latestMessage = messages.pop();
    if (!latestMessage) {
      return [];
    }

    const notice = `
--------------------------------------
件名: ${latestMessage.getSubject()}
受信日: ${latestMessage.getDate().toLocaleString()}
From: ${latestMessage.getFrom()}
--------------------------------------

${latestMessage.getPlainBody().slice(0, 350)}
`;
    notices.push(notice);
    latestMessage.markRead();
  }

  return notices;
};
