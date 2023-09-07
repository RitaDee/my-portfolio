// ContributionCard.js
import React from "react";
import { VscIssues, VscGitPullRequest } from "react-icons/vsc";
import { HiOutlineCheckCircle } from "react-icons/hi";

export const getOwnerAndRepoNameFromUrl = (url) => {
  const [, , , , owner, repoName] = url.split("/");
  return { owner, repoName };
};

const Icon = {
  issue: {
    completed: HiOutlineCheckCircle,
    not_planned: HiOutlineCheckCircle,
  },
  pr: VscGitPullRequest,
};

const displayIcon = (type, status) => {
  if (type === "issue") return Icon[type][status] || VscIssues;
  return Icon[type];
};

const ContributionCard = ({ contribution, isMerged }) => {
  const ownerInfo = getOwnerAndRepoNameFromUrl(contribution.repository_url);

  let statusText;

  if (contribution.pull_request) {
    if (isMerged) {
      statusText = "merged"; // Set statusText to "merged" for closed and merged PRs
    } else {
      statusText = contribution.state;
    }
  } else {
    statusText = contribution.state;
  }

  return (
    <tbody>
      <tr key={contribution.id}>
        <td className="d-none d-md-table-cell" style={{ color: "#B8B8B8" }}>
          {ownerInfo.owner}
        </td>
        <td>
          <a
            href={contribution.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#B8B8B8",
              textAlign: "center",
            }}
          >
            {contribution.title}
          </a>
        </td>
        <td
          className={`status ${contribution.state}`}
          style={{
            color: "#B8B8B8",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className="d-md-table-cell">
            {React.createElement(
              displayIcon(
                contribution.pull_request ? "pr" : "issue",
                contribution.state
              )
            )}
          </span>
          <div className="status-text">{statusText}</div>
        </td>
      </tr>
    </tbody>
  );
};

export default ContributionCard;
