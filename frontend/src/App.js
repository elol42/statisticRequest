import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { FirstPage } from './FirstPage'
import { LogInSite} from './LogInSite'



export const App = () => {
  return ( 
    // <section>
    //   < GaugeChart />
    // </section>
    // <BrowserRouter>
    //  <Switch>
    <section>
     < FirstPage  />
     < LogInSite />
     </section>
    //  </Switch>
    
    // {/* </BrowserRouter> */}
  ) 
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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
