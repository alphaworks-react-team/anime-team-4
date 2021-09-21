import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppStyling from './component/AppStyling';
import Nav from './component/Nav';
import SearchBar from './component/SearchBar';
import utils from './utils/animeAPI.js';
import Home from './Pages/Home.js';
import Search from './Pages/Search.js';
import TrendingCard from './component/TrendingCard.js';
import SearchCard from './component/SearchCard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    utils
      .AnimeTrending()
      .then(res => {
        console.log('TRENDING ===>', res);
        setTrending([...trending, ...res]);
      })
      .catch(err => console.log(err));
  }, []);

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const onClick = e => {
    
    if (inputValue === '') {
      alert('Enter Text');
    } else {
      utils
        .SearchAPI(inputValue)
        .then(res => {
          setSearch([...res]);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <AppStyling>
      <Router>
        <Nav>
          <SearchBar onChange={onChange} onClick={onClick} />
        </Nav>
        <Switch>
          <Route exact path='/'>
            <Home>
              <TrendingCard trending={trending} />
            </Home>
          </Route>
          <Route path='/search'>
            <Search>
              <SearchCard search={search} />
            </Search>
          </Route>
        </Switch>
      </Router>
    </AppStyling>
  );
}

export default App;
