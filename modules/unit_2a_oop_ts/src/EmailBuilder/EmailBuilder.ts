// Wykorzystując wzorzec projektowy Builder stwórz obiekt json reprezentujacy wszystkie parametry maila
// - FROM
// - TO
// - CC
// - BCC
// - TITLE
// - HTML

import Email from './Email';
import emailUtils from './emailUtils';
import { IEmailBuilder, IEmail } from './emailDef';

class EmailBuilder implements IEmailBuilder {
	private _email: IEmail;

	constructor() {
		this._email = {
			from: '',
			to: [''],
			title: '',
			html: '',
			cc: [''],
			bcc: [''],
		};
	}

	get email() {
		return this._email;
	}

	setFrom(from: string): IEmailBuilder {
		emailUtils.validateEmail(from);
		this.email.from = from;
		return this;
	}

	setTo(to: string[]): EmailBuilder {
		emailUtils.validateEmails(to);
		this.email.to = to;
		return this;
	}

	setCc(cc: string[]): EmailBuilder {
		emailUtils.validateEmails(cc);
		this.email.cc = cc;
		return this;
	}

	setBcc(bcc: string[]): EmailBuilder {
		emailUtils.validateEmails(bcc);
		this.email.bcc = bcc;
		return this;
	}

	setTitle(title: string): EmailBuilder {
		emailUtils.validateSimpleString(title);
		this.email.title = title;
		return this;
	}

	setHtml(html: string): EmailBuilder {
		emailUtils.validateHTML(html);
		this.email.html = html;
		return this;
	}

	build(): Email {
		emailUtils.validateEmail(this.email.from);
		emailUtils.validateEmails(this.email.to);
		emailUtils.validateSimpleString(this.email.title);
		emailUtils.validateHTML(this.email.html);

		const email = new Email(
			this.email.from,
			this.email.to,
			this.email.title,
			this.email.html,
			this.email.cc,
			this.email.bcc
		);
		return email;
	}
}

export default EmailBuilder;

const someEmail = new EmailBuilder()
	.setFrom('mailfrom@gmail.com')
	.setTo(['mailto@gmail.com'])
	.setTitle('title1')
	.setHtml('<div>message</div>')
	.setCc(['someccmail@gmail.com'])
	.setBcc(['bccmail@gmail.com'])
	.build();

// const someEmail = new EmailBuilder().setFrom('mailfrom@gmail.com').build();

console.log(someEmail);
