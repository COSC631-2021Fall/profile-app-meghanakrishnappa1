import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Profile from "./components/Profile";
import Words from "./components/Words";
import Navbar from "./components/Navbar";
import {useState, useEffect} from "react" ;

function App() {
  const themes = ['skyblue', 'khaki', 'orange', 'lavender', 'coral'];
  const [themeId, setThemeId] = useState(0);
  const switchTheme= () => {
    setThemeId((id) => (id+1)%5);
  }
  const handleKeydown=(event)=>{
    switch(event.key)
  {case "0":
  case"1":
  case"2":
  case"3":
  case"4":
  setThemeId(parseInt(event.key));
  break;
  }
  }

  useEffect(
    () =>{
      window.addEventListener("keydown",handleKeydown);
    }
  );
  return (
    <div style ={{backgroundColor:themes[themeId]}}>
      
      <Navbar />
        <center>

      <h1>
        Meghana Krishnappa
        <div> <button onClick ={switchTheme}>Color me </button> </div>
         </h1>
         </center>
      <main>
        <BrowserRouter>
        
           <Route path ="/Profile">
            <Profile/>
           </Route>

            <Route path ="/Words">
              <Words/>
            </Route >
            
      </BrowserRouter>
        
      </main>
    </div>
  );
}

export default App;
