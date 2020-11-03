import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// const  Header = ({text}) => <h1 id="h1">{text}</h1>; 
//     // React.createElement('h1', {id: 'hi'} , props.text); тоже что и выше но нативно

//     const Element = <p>Параграф</p>;
//     // const Element = React.createElement('p', null, 'параграф');

//     class Main extends React.Component {
//       render() {
//         return (
//           <div className='main'>
//             <Header text={'свойство текст'}/>
//              {Element}
//           </div>
//         )
//       }
//     }

 

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root') 
);

