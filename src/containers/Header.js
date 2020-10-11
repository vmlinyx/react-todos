import React from "react"

const Header = () => {
  const date = new Date().toLocaleDateString();
  const style = {
    margin: {
      margin: "70px 0px 30px 0px"
    },
    titleFont: {
      fontSize: "40px",
      fontWeight: "bold"
    },
    dateFont: {
      fontSize: "20px"
    }
  }
  return (
    <div style={style.margin}>
      <div style={style.titleFont}>我的一天</div>
      <div style={style.dateFont}>{date}</div>
    </div>
  );
};

export default Header;