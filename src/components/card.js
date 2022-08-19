import React from "react";
import Grid from './grid';


export default function Card() {
  return (
    <>
      <div className="box">
        <h1 className="title">Open positions</h1>
        <Grid></Grid>
      </div>
    </>
  );
}
