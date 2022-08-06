import { useSelector } from "react-redux";
import React from "react";

function Card({ d }) {
  const state = useSelector((state) => state.store);
  return (
    <div class="cardWrap">
      <div class="card cardLeft">
        <h1>
          {state.model + " "}
          <span>Cinema</span>
        </h1>
        <div class="title">
          <h2>{d.movie ? d.movie : "movie"}</h2>
          <span>movie</span>
        </div>
        <div class="name">
          <h2>{d.language ? d.language : "language"}</h2>
          <span>Language</span>
        </div>
        <div class="seat">
          <h2>{d.seat ? d.seat : "seat"}</h2>
          <span>seat</span>
        </div>
        <div class="time">
          <h2>{d.time ? d.time : "time"}</h2>
          <span>time</span>
        </div>
      </div>
      <div class="card cardRight">
        <div class="eye"></div>
        <div class="number">
          <h3>{d.seat ? d.seat : "seat"}</h3>
          <span>seat</span>
        </div>
        <div class="barcode"></div>
      </div>
    </div>
  );
}

export default Card;
