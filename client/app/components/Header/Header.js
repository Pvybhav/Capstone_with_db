import React from 'react';
// import '../../../../node_modules/semantic-ui-css/semantic.min.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/">Home</Link>

    <nav>
      <Link to="/helloworld">Hello World</Link>
    </nav>
    <nav>
      <Link to="/about">about</Link>
    </nav>

    <hr />
  </header>
);

export default Header;
