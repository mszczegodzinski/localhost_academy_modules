// Wykorzystując wzorzec projektowy Builder stwórz obiekt json reprezentujacy wszystkie parametry maila
// - FROM
// - TO
// - CC
// - BCC
// - TITLE
// - HTML

import Email from './Email';
import emailUtils from './emailUtils';

class EmailBuilder {
  // "private"

  constructor() {
    // emailUtils.validateRequiredEmail(from);
    // emailUtils.validateRequiredEmail(to);
    // emailUtils.validateOptionalEmail(cc);
    // emailUtils.validateOptionalEmail(bcc);
    // emailUtils.validateSimpleString(title);
    // emailUtils.validateSimpleString(html);
  }

  setFrom(from) {
    emailUtils.validateRequiredEmail(from);
    this.from = from;
    return this;
  }

  setTo(to) {
    emailUtils.validateRequiredEmail(to);
    this.to = to;
    return this;
  }

  setCc(cc) {
    emailUtils.validateOptionalEmail(cc);
    this.cc = cc;
    return this;
  }

  setBcc(bcc) {
    emailUtils.validateOptionalEmail(bcc);
    this.bcc = bcc;
    return this;
  }

  setTitle(title) {
    emailUtils.validateSimpleString(title);
    this.title = title;
    return this;
  }

  setHtml(html) {
    emailUtils.validateSimpleString(html);
    this.html = html;
    return this;
  }

  build() {
    const email = new Email(
      this.from,
      this.to,
      this.cc,
      this.bcc,
      this.title,
      this.html
    );

    return email;
  }
}

export default EmailBuilder;

const someEmail = new EmailBuilder()
  .setFrom('mailfrom@gmail.com')
  .setTo(['mailto@gmail.com'])
  .setCc(['someccmail@gmail.com'])
  .setBcc(['bccmail@gmail.com'])
  .setTitle('title1')
  .setHtml('<div>message</div>')
  .build();

console.log(someEmail);
