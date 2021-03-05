import { IEmail } from './emailDef';
class Email implements IEmail {
	from: string;
	to: string[];
	title: string;
	html: string;
	cc?: string[];
	bcc?: string[];

	constructor(
		from: string,
		to: string[],
		title: string,
		html: string,
		cc?: string[],
		bcc?: string[]
	) {
		this.from = from;
		this.to = to;
		this.title = title;
		this.html = html;
		this.cc = cc;
		this.bcc = bcc;
	}
}

export default Email;
