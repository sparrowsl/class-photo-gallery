export type User = {
	id?: string;
	username: string;
	password: string;
	photos?: Photos[];
};

export type Photos = {
	id?: string;
	caption: string;
	photo: string | File;
	university: string;
	classYear: string;
	user?: User;
	userId: string;
};
