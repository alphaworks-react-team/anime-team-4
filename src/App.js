import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppStyling from './component/AppStyling';
import Nav from './component/Nav';

function App() {
  return (
    <AppStyling>
      <Router>
        <Nav></Nav>
      </Router>
    </AppStyling>
  );
}

export default App;
