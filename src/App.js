import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dbs } from "./component/Dbs";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dbs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;