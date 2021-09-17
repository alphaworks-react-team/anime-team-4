import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppStyling from "./component/AppStyling";
import Nav from "./component/Nav";
import SearchBar from "./component/SearchBar";
import utils from "./utils/animeAPI.js";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    utils.AnimeTrending().then((res) => {
      setTrending([]);
    });
  }, []);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Enter Text");
    } else {
      utils.SearchAPI(inputValue);
    }
  };

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
