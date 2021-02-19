import emailUtils from './emailUtils';

interface IEmail {
	from: string;
	to: string[];
	title: string;
	html: string;
	cc?: string[];
	bcc?: string[];
}
class Email implements IEmail {
	constructor(
		private _from: string,
		private _to: string[],
		private _title: string,
		private _html: string,
		private _cc?: string[],
		private _bcc?: string[]
	) {
		this._from = _from;
		this._to = _to;
		this._title = _title;
		this._html = _html;
		this._cc = _cc;
		this._bcc = _bcc;
	}

	// get from() {
	// 	return this._from;
	// }

	// set from(from: string) {
	// 	emailUtils.validateEmail(from);
	// 	this._from = from;
	// }

	// get to() {
	// 	return this._to;
	// }

	// set to(to: string[]) {
	// 	emailUtils.validateEmails(to);
	// 	this._to = to;
	// }

	// get title() {
	// 	return this._title;
	// }

	// set title(title: string) {
	// 	emailUtils.validateSimpleString(title);
	// 	this._title = title;
	// }

	// get html() {
	// 	return this._html;
	// }

	// set html(html: string) {
	// 	emailUtils.validateSimpleString(html);
	// 	this._html = html;
	// }

	// get cc() {
	// 	if (this._cc === undefined) {
	// 		return [''];
	// 	}
	// 	return this._cc;
	// }

	// set cc(cc: string[]) {
	// 	emailUtils.validateEmails(cc);
	// 	this._cc = cc;
	// }

	// get bcc() {
	// 	if (this._bcc === undefined) {
	// 		return [''];
	// 	}
	// 	return this._bcc;
	// }

	// set bcc(bcc: string[]) {
	// 	emailUtils.validateEmails(bcc);
	// 	this._bcc = bcc;
	// }
}

export default Email;
