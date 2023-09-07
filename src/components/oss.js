import React, { useEffect, useState } from "react";
import { ListGroup, Table } from "react-bootstrap";
import ContributionCard from "./ContributionCard";
import Form from "react-bootstrap/Form";

const Os = () => {
  const title = "Open Source Contributions";
  const description =
    "Embracing Open Source: My Passion for Public-Driven Contributions";

  const [contributions, setContributions] = useState([]);
  const [selectedPerPage, setSelectedPerPage] = useState("10");

  const [query, setQuery] = useState("type:issue");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const perPage = 30;
        const page = 1;

        const baseUrl = new URL("https://api.github.com/search/issues");
        let baseQuery = 'author:RitaDee -user:RitaDee';
        baseUrl.searchParams.set("q", `${baseQuery} ${query}`);
        baseUrl.searchParams.set("per_page", `${perPage}`);
        baseUrl.searchParams.set("page", `${page}`);

        const response = await fetch(baseUrl.toString());
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        const { items } = await response.json();
        console.log(items);

        setContributions(items); 
      } catch (error) {
        console.error("Something went wrong:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div id="os">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="issue-type">
        <Form.Select
          className="responsive-select"
          style={{ width: 250 }}
          size="lg"
          onChange={(e) => setQuery(e.target.value)}
        >
          <span>Type</span>
          <option value="type:issue">Issues</option>
          <option value="type:pr">Pull Requests</option>
        </Form.Select>
        <br />
        <Form.Select
          className="responsive-select"
          style={{ width: 250 }}
          value={selectedPerPage}
          onChange={(e) => setSelectedPerPage(e.target.value)}
        >
          <span>Per Page</span>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </Form.Select>
      </div>
      <ListGroup>
        <Table striped bordered hover responsive>
          <thead style={{ color: "white" }}>
            <tr>
              <th className="d-none d-md-table-cell">RepoOrg</th>
              <th>Contribution</th>
              <th>Status</th>
            </tr>
          </thead>
          {contributions
            .slice(0, Number(selectedPerPage))
            .map((contribution) => (
              <ContributionCard
                contribution={contribution}
                key={contribution.id}
                isMerged={contribution.pull_request && contribution.state === "closed"}
              />
            ))}
        </Table>
      </ListGroup>
    </div>
  );
};

export default Os;
