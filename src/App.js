import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import HomePage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { DeskTopSizeError } from "./components/DesktopSizeError";

function MobileComponent() {
  return (
    <div className="max-w-screen overflow-hidden">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default function App() {
  const isMobile = window.innerWidth <= 580;
  return isMobile ? <MobileComponent /> : <DeskTopSizeError />;
}
