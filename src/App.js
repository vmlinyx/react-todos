import React from "react";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import MainSection from "./containers/MainSection";

function App() {
  // const theme = {
  //   default: "rgb(109, 129, 209)",
  // };
  const style = {
    margin: "0 60px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
  };
  return (
    <div style={style}>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
