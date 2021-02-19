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
	private email: Email;

	private _from!: string;
	private _to!: string[];
	private _title!: string;
	private _html!: string;
	private _cc?: string[];
	private _bcc?: string[];

	constructor() {
		// this._from = _from;
		// this._to = _to;
		// this._title = _title;
		// this._html = _html;
		// this._cc = _cc;
		// this._bcc = _bcc;
	}

	setFrom(from: string) {
		// tu ma byc zmienany email a nie email builder
		emailUtils.validateEmail(from);
		this._from = from;
		return this;
	}

	setTo(to: string[]) {
		emailUtils.validateEmails(to);
		this._to = to;
		return this;
	}

	setCc(cc: string[]) {
		emailUtils.validateEmails(cc);
		this._cc = cc;
		return this;
	}

	setBcc(bcc: string[]) {
		emailUtils.validateEmails(bcc);
		this._bcc = bcc;
		return this;
	}

	setTitle(title: string) {
		emailUtils.validateSimpleString(title);
		this._title = title;
		return this;
	}

	setHtml(html: string) {
		emailUtils.validateSimpleString(html);
		this._html = html;
		return this;
	}

	build() {
		const email = new Email(
			this._from,
			this._to,
			this._title,
			this._html,
			this._cc,
			this._bcc
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

console.log(someEmail);
