import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePageComp from "./welcomePage/components/WelcomePage.js"
import CollectingDataComp from "./registrationProcess/components/CollectingData.js"
import MainPageComp from "./mainPage/components/MainPage.js"
import NotFoundPageComp from "./NotFoundPage.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePageComp />} />
          <Route path="/register/CollectingFullName" element={<CollectingDataComp page={"CollectingFullName"} />} />
          <Route path="/register/CollectingImage" element={<CollectingDataComp page={"CollectingImage"} />} />
          <Route path="/register/CollectingDescripation" element={<CollectingDataComp page={"CollectingDescripation"} />} />
          <Route path="/main" element={<MainPageComp />} />
          <Route path="*" element={<NotFoundPageComp />} />
        </Routes>   
      </Router>
    </div>
  );
}

export default App;
