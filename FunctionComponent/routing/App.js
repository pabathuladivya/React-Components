import Navbar from './navBar';
import Home from './home';
import Dashboard from './dashboard';
import About from './about';
import { BrowserRouter ,Routes, Route, } from "react-router-dom";


function App() {
// class App extends React.Component{

  // render(){
  return (
   
      <BrowserRouter> 
       <Navbar /> 
       <Home />
      <Dashboard /> 
       <Routes> 
    
       <Route path ="/" exact element={<Home/>}/>
       <Route path ="/dashboard/:fullname" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes> 


      </BrowserRouter> 
    
    
  );
}


export default App;
