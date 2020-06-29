import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../assets/scss/index.scss';

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <Router>
    {children}
  </Router>
);

export default Wrapper;
