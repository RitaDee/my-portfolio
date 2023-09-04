import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { VscIssues, VscGitPullRequest } from 'react-icons/vsc';
import { HiOutlineCheckCircle } from 'react-icons/hi';

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
  if (type === 'issue') return Icon[type][status] || VscIssues;

  return Icon[type];
};

const ContributionCard = ({ contribution }) => {
  const { owner } = getOwnerAndRepoNameFromUrl(contribution.repository_url);

  return (
    <ListGroupItem key={contribution.id} className="os-item">
      <div className={`icon ${contribution.state}`}>
        {React.createElement(
          displayIcon(
            contribution.pull_request ? "pr" : "issue",
            contribution.state
          )
        )}
      </div>
      <div className="content">
        <div className="title">{contribution.title}</div>
        <div className={`status ${contribution.state}`}>{contribution.state}</div>
        <div className="owner">{owner}</div>
      </div>
    </ListGroupItem>
  );
};

export default ContributionCard;
