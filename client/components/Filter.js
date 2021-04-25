// import React, { Component } from "react";
// import {getBrand} from '../store/filter'
// import { connect } from "react-redux"; 

// class Filter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             brands: ''
//         }
//     }

//   render() {
//     return (
//       <div className='filter'>
//         <div className="filter-result">{this.props.count} Watches </div>

//         <div className="filter-brand">
//             Filter By Brand 
//             <select value = {this.props.brand} onChange={this.props.getBrand}>
//             <option value="All">All</option>
//             <option value="Omega">Omega</option>
//             <option value="Rolex">Rolex</option>
//             <option value="Patek Phillipe">Patek Phillipe</option>
//             <option value="Audemars Piguet">Audemars Piguet</option>
//             <option value="Vacheron Constantin">Vacheron Constantin</option>
//             <option value="Jaeger LeCoultre">Jaeger LeCoultre</option>
//             <option value="Cartier">Cartier</option>
//             <option value="A.Lange & Sohne">A.Lange & Sohne</option>
//             <option value="Richard Mille">Richard Mille</option>
//           </select>
//         </div>
//       </div>
//     );
//   }
// }

  
//   const mapDispatch = (dispatch) => {
//     return {
//       getBrand: () => dispatch(getBrand(brand)),
//     };
//   };
  
//   export default connect(null, mapDispatch)(Filter);
