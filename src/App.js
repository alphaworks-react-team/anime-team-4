import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppStyling from "./component/AppStyling";
import Nav from "./component/Nav";
import SearchBar from "./component/SearchBar";
import utils from "./utils/animeAPI.js";
import Home from "./Pages/Home.js";
import Search from "./Pages/Search.js";
import TrendingCard from "./component/TrendingCard.js";
import SearchCard from "./component/SearchCard";
import CategoryLinks from "./component/CategoryLinks";
import Category from './Pages/Category';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    utils
      .AnimeTrending()
      .then((res) => {
        console.log("TRENDING ===>", res);
        setTrending([...trending, ...res]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    utils
      .CategoryAPI()
      .then((res) => {
        console.log("CATEGORIES ===>", res);
        setCategory([...category, ...res]);
      })
      .catch((err) => console.log(err));
  }, []);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClick = (e) => {
    if (inputValue === "") {
      alert("Enter Text");
    } else {
      utils
        .SearchAPI(inputValue)
        .then((res) => {
          setSearch([...res]);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <AppStyling>
      <Router>
        <Nav>
          <SearchBar onChange={onChange} onClick={onClick} />
        </Nav>
        <Switch>
          <Route exact path="/">
            <Home>
              <CategoryLinks category={category} />
              <TrendingCard trending={trending} />
            </Home>
          </Route>
          <Route path='/category'>
            <Category />
          </Route>
          <Route path="/search">
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
