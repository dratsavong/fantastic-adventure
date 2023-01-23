import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";

//const App = () => <PortfolioContainer />;

function App() {
    return (
      <div>
        <Header />
        <PortfolioContainer />
       {/*  <Footer /> */}
      </div>
    );
  }

export default App;