import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checkout from "./components/Checkout";
import Destination from "./components/Destination";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Checkout />} />
        <Route
          path="/success"
          element={
            <Destination
              type="success"
              title="Payment Successful!"
              message="Thank you for completing your secure online payment."
            />
          }
        />
        <Route
          path="/cancel"
          element={
            <Destination
              type="cancel"
              title=" Payment Cancelled!"
              message="Hope you will return back."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
