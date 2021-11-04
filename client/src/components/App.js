import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";

const Landing = () => <h2>Landing page</h2>;
const Dashboard = () => <h2>Dashboard page</h2>;
const NewSurvey = () => <h2>New survey page</h2>;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/survey" element={<Dashboard />} />
            <Route exact path="/survey/new" element={<NewSurvey />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
