import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Data from "../UI/data"

const DetailsContainer = styled.div`
  background-color: #dddddd;
  height: 800vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: 50vw;
  /* Optional: Adjust margin and padding as needed */
  margin: auto;
`;

const Details = () => {
  const { id } = useParams(); // Fetches the id parameter from the URL
  // Assuming Data is imported or fetched in Details component
  const item = Data.find(item => item.id === parseInt(id));

  if (!item) return <div>Item not found</div>;

  return (
    <DetailsContainer>
      <CardWrapper>
        <div className="card">
          {/* <img src={item.imageUrl} className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title"> This item will be delivered to : {item.name}</h5>
            <p className="card-text">Address : {item.address}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body btn btn-primary my-3">
              <a href="#" className="card-link">Live Tracking</a>
            
            </div>
          </div>
        </div>
      </CardWrapper>
    </DetailsContainer>
  );
}

export default Details;
