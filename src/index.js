import React from 'react';
import ReactDOM from 'react-dom';
// import Test from './components/Test.jsx';

class App extends React.Component {
   render() {
     return (
       <div>
         <h1>Hello, world!</h1>
       </div>
     );
   }
 }

 ReactDOM.render(<App/>, document.getElementById('root'));
