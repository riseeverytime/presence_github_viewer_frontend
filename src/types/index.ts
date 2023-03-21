export type GitHubUser = {
	id: number;
	login: string;
};

export type GitHubIssue = {
	id: number;
	number: number;
	url: string;
	title: string;
	created_at: string;
	user: GitHubUser;
	assignee: GitHubUser;
};
