export interface IEmail {
	from: string;
	to: string[];
	title: string;
	html: string;

	cc?: string[];
	bcc?: string[];
}

export interface IEmailBuilder {
	email: IEmail;
	setFrom: (from: string) => IEmailBuilder;
	setTo: (to: string[]) => IEmailBuilder;
	setCc: (cc: string[]) => IEmailBuilder;
	setBcc: (bcc: string[]) => IEmailBuilder;
	setTitle: (title: string) => IEmailBuilder;
	setHtml: (html: string) => IEmailBuilder;
	build: () => IEmail;
}
