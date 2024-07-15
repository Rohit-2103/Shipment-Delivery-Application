
// import React from "react";
// import image from "../UI/image.png";
// // Example JSON data
// const jsonData = [
//   {
//     id: 1,
//     name: 'John Doe',
//     email: 'john.doe@example.com'
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     email: 'jane.smith@example.com'
//   }
// ];


// function Cards() {
//   return (
    
// <div style={{ padding: '20px', overflowY: 'auto', height: '100vh' }}>
//     <div className="container my-4">
//       <div className="row my-5">
//         <div className="col-md-6">
//           <div className="card" style={{ width: "20rem", margin: "20px auto"}}>
//             <img src={image} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//               <a href="#" className="btn btn-primary">
//                 Go somewhere
//               </a>
//             </div>
//           </div>
//         </div>
        
        
        
//       </div>
//     </div>

// </div>
//   );
// }

// export default Cards;

import Data from "../UI/data"
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

const CardsContainer = styled.div`
  background-color: lightgreen;
  height: 100vh;
`;


const Cards = ({ data }) => {
  return (
    <CardsContainer>
    <div style={{ padding: '20px', overflowY: 'auto', height: '100vh' }}>
      <div className="container my-4">
        <div className="row my-5">
          {Data.map(item => (
            <div className="col-md-6" key={item.id}>
              <div className="card" style={{ width: "20rem", margin: "20px auto" }}>
                <img src={item.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.address}</p>
                  
                   <a href={item.link} className="btn btn-primary my-3">
                   <Link to={`/details/${item.id}`}>Get Details</Link>
                  </a> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </CardsContainer>
  );
}

export default Cards;

