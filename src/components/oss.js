import React, { useEffect, useState } from 'react';
import { VscIssues, VscGitPullRequest } from 'react-icons/vsc';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { ListGroup } from 'react-bootstrap'; // Import ListGroup component from react-bootstrap

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

const Os = () => {
  const description =
    'List of open source contributions made by Rita Daniel';
  const title = 'Rita Daniel Open Source Contributions'; // Define the title

  // Add state for contributions
  const [contributions, setContributions] = useState([]);

  // Fetch contributions when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const type = "issue"; // Change this as needed
        const perPage = 50; // Change this as needed
        const page = 1; 

        const baseUrl = new URL("https://api.github.com/search/issues");
        let query = `author:RitaDee -user:RitaDee type`;
        baseUrl.searchParams.set("q", query);
        baseUrl.searchParams.set("per_page", `${perPage}`);
        baseUrl.searchParams.set("page", `${page}`);

        const response = await fetch(baseUrl.toString());
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        const { items } = await response.json();

        setContributions(items); // Set contributions in state
      } catch (error) {
        console.error("Something went wrong:", error);
      }
    }

    fetchData();
  }, []);

  // Render your component here
  return (
     <div id="os">
      <h1>{title}</h1>
      <p>{description}</p>
      <ListGroup>
        {" "}
        {/* Wrap your contributions in a ListGroup component */}
        {contributions.map((contribution) => (
          <ListGroup.Item key={contribution.id} className="os-item">
            {React.createElement(
              displayIcon(
                contribution.pull_request ? "pr" : "issue",
                contribution.state
              )
            )}{" "}
            {contribution.title}
            <span className={`status ${contribution.state}`}>
              {contribution.state}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Os;
