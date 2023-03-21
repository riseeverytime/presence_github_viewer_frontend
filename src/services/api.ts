import axios from "axios";

import { GitHubIssue } from "../types";

const api = axios.create({
	baseURL: process.env.API_URl ?? "http://localhost:3000/api/v1",
});

export const getIssues = () => api.get<GitHubIssue[]>("/issues");
