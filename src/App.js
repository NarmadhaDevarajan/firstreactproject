import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link,Route,BrowserRouter as Router,Routes} from 'react-router-dom'
 function Home()
{
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
function Notes()
{
  return(
    <div>
      <h2>Notes Page</h2>
    </div>
  )
}
function Users()
{
  return(
    <div>
      <h1>Users Page</h1>
    </div>
  )
}
// function App() {
//   const [page,setPage]=useState('home');
//   const content=()=>{
//     if(page=='home'){
//       return <Home />;
//     }else if(page=='notes'){
//       return <Notes />;
//     }else if(page=='users'){
//       return <Users />;
//     }
//   }
//   const toPage=(page)=>(event)=>{
//     event.preventDefault();
//     setPage(page);

//  }
  function App(){
 const padding={
     padding:10
   };
  return (
         <Router>
        <div> 
          
      <Link to='/' style={padding} >home</Link>
      <Link to='/notes' style={padding} >notes</Link>
      <Link to='/users' style={padding} >users</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/users' element={<Users />} />
      </Routes>
      {/* {content()} */}
      </Router>
        
  )
} ;
export default App;