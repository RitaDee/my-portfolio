import React, { useEffect, useState } from "react";
import { ListGroup, Table } from "react-bootstrap";
import ContributionCard from "./ContributionCard";
import Form from "react-bootstrap/Form";

const Os = () => {
  const title = "Open Source Contributions";
  const description =
    "Embracing Open Source: My Passion for Public-Driven Contributions";

  const [contributions, setContributions] = useState([]);
  const [selectedType, setSelectedType] = useState("Issues");
  const [selectedPerPage, setSelectedPerPage] = useState("10");
  const [filteredContributions, setFilteredContributions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const perPage = 20;
        const page = 1;

        const baseUrl = new URL("https://api.github.com/search/issues");
        let query = `author:RitaDee -user:RitaDee`;
        baseUrl.searchParams.set("q", query);
        baseUrl.searchParams.set("per_page", `${perPage}`);
        baseUrl.searchParams.set("page", `${page}`);

        const response = await fetch(baseUrl.toString());
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        const { items } = await response.json();
        console.log(items);

        setContributions(items); // Set contributions in state
      } catch (error) {
        console.error("Something went wrong:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = contributions.filter((contribution) => {
      const isTypeMatch =
        selectedType === "Issues"
          ? !contribution.pull_request
          : contribution.pull_request;
      const isPerPageMatch =
        Number(selectedPerPage) === 10
          ? true
          : Number(selectedPerPage) === 20
          ? true
          : Number(selectedPerPage) === 30
          ? true
          : false;

      return isTypeMatch && isPerPageMatch;
    });

    setFilteredContributions(filtered);
  }, [contributions, selectedType, selectedPerPage]);

  return (
    <div id="os">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="issue-type">
        <Form.Select
          style={{ width: 250 }}
          size="lg"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <span>Type</span>
          <option>Issues</option>
          <option>Pull Requests</option>
        </Form.Select>
        <br />
        <Form.Select
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
              <th>RepoOrg</th>
              <th>Contribution</th>
              <th>Status</th>
            </tr>
          </thead>
          {filteredContributions.map((contribution) => (
            <ContributionCard
              contribution={contribution}
              key={contribution.id}
            />
          ))}
        </Table>
      </ListGroup>
    </div>
  );
};

export default Os;
