export type User = {
	id?: string;
	username: string;
	password: string;
	photos?: Photo[];
};

export type Photo = {
	id?: string;
	caption: string;
	blob: string | File;
	url: string;
	university: string;
	classYear: string;
	user?: User;
	userId: string;
};
