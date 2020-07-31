import React from "react";
import styles from "./styles.css";

const Grid = () => {
  /*

  */
  const [gridvalue, setgridvalue] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="center">
        <div className="outer">
          <div style={{ display: "flex" }}>
            {gridvalue[0].map(block => {
              return <Square />;
            })}
          </div>
          <div style={{ display: "flex" }}>
            {gridvalue[1].map(block => {
              return <Square />;
            })}
          </div>
          <div style={{ display: "flex" }}>
            {gridvalue[2].map(block => {
              return <Square />;
            })}
          </div>
          <div />
        </div>
      </div>
      Result
    </div>
  );
};
const Square = () => {
  return <div className="block">0</div>;
};
export default function App() {
  return <Grid />;
}
