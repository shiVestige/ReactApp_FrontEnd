import React from 'react';
import './App.css';
import EnhancedTable from './Components/SqlAnalyst';
import PermanentDrawerLeft from './Components/PermanentDrawerLeft';


function App() {
  return (
    <div className="App">
      <PermanentDrawerLeft />
      {/*   <EnhancedTable /> */}
    </div>
  );
}

export default App;


// import React, { Component } from 'react';
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './component/contact';
// import './App.css';
// import Main from './Components/Main';
 
// class App extends Component {
//   render() {
//     return (
//        <Router>
//            <div className="App">
//             <ul className="App-header">
//               <li>
//                 <Link to="/">Dashboard</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               {/* <li>
//                 <Link to="/contact">Contact Us</Link>
//               </li> */}
//             </ul>
//            <Routes>
//                  <Route exact path='/' element={< Home />}></Route>
//                  <Route exact path='/about' element={< About />}></Route>
//                  {/* <Route exact path='/contact' element={< Contact />}></Route> */}
//           </Routes>
//           </div>
//        </Router>
//    );
//   }
// }
 
// export default App;