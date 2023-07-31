// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           <br></br>
//           Shivam
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

import React from 'react';
import './NavigationBar.css';
import NavigationBar from './NavigationBar';
const Background = () => {
  return <div className="background-image" />;
};
const App = () => {
  return (
    <div>
      <NavigationBar />
      <Background />
    </div>
  );
};

export default App;
