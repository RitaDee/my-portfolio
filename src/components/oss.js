import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap'; 
import ContributionCard from './ContributionCard';

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
         console.log(items)

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
      <h1 className="os-title">{title}</h1>
      <p className="os-description">{description}</p>
      <ListGroup>
        {contributions.map((contribution) => (
          <ContributionCard
            contribution={contribution}
            key={contribution.id}
          />
        ))}
      </ListGroup>
    </div>
  );
};


export default Os;
