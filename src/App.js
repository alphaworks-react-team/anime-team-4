import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import AppStyling from './component/AppStyling';
import Nav from './component/Nav';
import SearchBar from "./component/SearchBar";
import AnimeTrending from './utils/animeAPI.js';
import CategoryRequest from './utils/searchAPI';




function App() {

  const [inputValue, setInputValue] = useState('')
  const [trending, setTrending] = useState([])


  useEffect(() => {
    AnimeTrending().then((res) => {
      setTrending([
        
      ])
    });
    
  }, [])
  

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  const onClick = (e) => {
    e.preventDefault()
    CategoryRequest(inputValue)
  }

  
  
  return (
    <AppStyling>
      <Router>
        <Nav>
          <SearchBar onChange={onChange} onClick={onClick} />
        </Nav>
      </Router>
    </AppStyling>
  );
}

export default App;
