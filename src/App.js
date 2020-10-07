import React from "react";
import Footer from "./containers/Footer";
import MainSection from "./containers/MainSection";

function App() {
  const theme = {
    default: "rgb(109, 129, 209)",
  };
  const style = {
    margin: "0 60px",
    minHeight: "100vh",
    // background: "#f5f5f5", // TODO delete
    // color: "#4d4d4d",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return (
    <div style={style}>
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
