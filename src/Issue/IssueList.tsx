import React from "react";

import { getIssues } from "../services/api";
import { GitHubIssue } from "../types";

import { IssueCard } from "./IssueCard";

import "./styles.css";

export const IssueList = () => {
	const [issues, setIssues] = React.useState<GitHubIssue[]>([]);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		(async () => {
			setLoading(true);
			const response = await getIssues();
			setIssues(response.data);
			setLoading(false);
		})();
	}, []);

	return loading ? (
		<div className='loading-sign'>Loading...</div>
	) : (
		<div className='grid-container'>
			{issues.length
				? issues.map((issue) => <IssueCard key={issue.id} issue={issue} />)
				: "No Issue"}
		</div>
	);
};
