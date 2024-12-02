import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Chips from './Chips';
import Candy from './Candy';
import Water from './Water';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<VendingMachine />} />
            <Route exact path="/water" element={<Water />} />
            <Route exact path="/chips" element={<Chips />} />
            <Route exact path="/candy" element={<Candy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
