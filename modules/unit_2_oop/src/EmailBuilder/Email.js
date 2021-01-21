import emailUtils from './emailUtils';

class Email {
  constructor(from, to, cc, bcc, title, html) {
    this.from = from;
    this.to = to;
    this.cc = cc;
    this.bcc = bcc;
    this.title = title;
    this.html = html;
  }
}

export default Email;
