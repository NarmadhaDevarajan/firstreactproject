// // function App() {
// //   // javascript
// //   // console.log('hello from component');

//const { Component } = require("react");

// //   const now = new Date();
// //   const a = 10;
// //   const b = 20;

// //   console.log(now, a + b);

// //   return (
// //     <div>
// //       <p>Hello World, it is {now.toString()}</p>
// //       <p>
// //         {a} plus {b} is {a + b}
// //       </p>
// //     </div>
// //   );
// // }

// // export default App;

// // import React from 'react';

// // function Hello(props) {
// //   // console.log(props);
// //   return (
// //     <div>
// //       <p>Hello {props.name}, you are { props.age } years old</p>
// //     </div>
// //   )
// // }

// // function App() {

// //   const age = 10;

// //   return (
// //     <div>
// //       <h1>Greetings</h1>
// //       <Hello name='Sathish' age={ 10 + 20 } />
// //       <Hello name='Krish' age={ age } />
// //     </div>
// //   )
// // }

// // export default App;

// // day3 - React

// // Working with array lists

// import React from 'react'; // not necessary from React 17

// // function App(props) {

// //   const { notes } = props;
// //   console.log(notes);
// //   return(
// //     <div>
// //       <h1>Notes</h1>
// //       <ul>
// //         {notes.map(note =>
// //                         <li key={note.id}>{note.content}</li>)}
// //       </ul>
// //     </div>
// //   )};
  
// // function Note({note}){
// //   if(note.important){
// //   return(
// //     <li>{note.content}*</li>
// //   )
// // }
// // return(
// //   <li>{note.content}</li>)
// // }

// function Note({note}){
//     return(
//     // <li>{note.important ? note.content +'*' : note.content}</li>
//     <li>{note.content}{note.important && '*'}</li>
//   )
// }



// function App({notes}) {
  
//   const addNote = (event) =>{
//    // console.log(event);
//     console.log('button Clicked',event.target);
//   }
  

//   //const { notes } = props;
//   console.log(notes);
//   return(
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <Note key={note.id} note={note} />)}
//               </ul>

//               {/* <form onSubmit={addNote}>
//                 <input/>
//                 <button type="submit">Save Note</button>
//               </form> */}
//               <form>
//                 <input/>
//                 <button onClick={()=>console.log('button Clicked')}>Save Note</button>
//               </form>




//     </div>
//   )}
    
  

//   /* // return (
//   //   <div>
//   //     <h1>Notes</h1>
//   //     <ul>
//   //       <li>{notes[0].content}</li>
//   //       <li>{notes[1].content}</li>
//   //       <li>{notes[2].content}</li>
//   //       <li>{notes[3].content}</li>
//   //       <li>{notes[4].content}</li>
//   //     </ul>
//   //   </div>
//   // )
//  */

// export default App;
//functional component
// import React from 'react'

// function App() {
//   return (
//     <div>hello world</div>
//   )
// }

// export default App

//class component
import { Component } from "react"
class App extends Component{
  render(){
    return <div>hello World</div>
  }
}
export default App;


