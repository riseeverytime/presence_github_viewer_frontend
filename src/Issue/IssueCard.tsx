import React from "react";
import { format } from "date-fns";

import { GitHubIssue } from "../types";

const formatDate = (dateString: string) =>
	format(new Date(dateString), "MM/dd/yyyy, HH:mm");

export const IssueCard = ({ issue }: { issue: GitHubIssue }) => {
	return (
		<div className='issue-item'>
			<p className='issue-title'>
				Title: <strong>{issue.title}</strong>
			</p>
			<div>
				No: <strong>{issue.number}</strong>
			</div>
			<div>
				User: <strong>{issue.user.login}</strong>
			</div>
			<div>
				Assgined to: <strong>{issue.assignee?.login ?? "No Assignee"}</strong>
			</div>
			<div>
				Created At: <strong>{formatDate(issue.created_at)}</strong>
			</div>
		</div>
	);
};
