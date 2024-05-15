import { useState, useEffect } from "react";
import ImageBox from "./ImageBox";
import "./HorizontalScrollableDisplay.css";

const images = [];

export default function HorizontalScrollableDisplay() {
    
  return (
    <>
      <div className="container">
        <div className="scrollable">
          <ImageBox src='https://via.placeholder.com/210/00FF00?text=1'/>
          <ImageBox src="https://via.placeholder.com/220/00FF00?text=2" />
          <ImageBox src="https://via.placeholder.com/230/00FF00?text=3" />
          <ImageBox src="https://via.placeholder.com/240/00FF00?text=4" />
          <ImageBox src="https://via.placeholder.com/250/00FF00?text=5" />
          <ImageBox src="https://via.placeholder.com/260/00FF00?text=6" />
          <ImageBox src="https://via.placeholder.com/270/00FF00?text=7" />
          <ImageBox src="https://via.placeholder.com/280/00FF00?text=8" />
          <ImageBox src="https://via.placeholder.com/250/00FF00?text=9" />
          <ImageBox src="https://via.placeholder.com/260/00FF00?text=10" />
          <ImageBox src="https://via.placeholder.com/270/00FF00?text=11" />
          <ImageBox src="https://via.placeholder.com/280/00FF00?text=12" />
        </div>

        <div className="scrollable">
          <ImageBox src="https://via.placeholder.com/210/00FF00?text=1" />
          <ImageBox src="https://via.placeholder.com/220/00FF00?text=2" />
          <ImageBox src="https://via.placeholder.com/230/00FF00?text=3" />
          <ImageBox src="https://via.placeholder.com/240/00FF00?text=4" />
          <ImageBox src="https://via.placeholder.com/250/00FF00?text=5" />
          <ImageBox src="https://via.placeholder.com/260/00FF00?text=6" />
          <ImageBox src="https://via.placeholder.com/270/00FF00?text=7" />
          <ImageBox src="https://via.placeholder.com/280/00FF00?text=8" />
          <ImageBox src="https://via.placeholder.com/250/00FF00?text=9" />
          <ImageBox src="https://via.placeholder.com/260/00FF00?text=10" />
          <ImageBox src="https://via.placeholder.com/270/00FF00?text=11" />
          <ImageBox src="https://via.placeholder.com/280/00FF00?text=12" />
        </div>
      </div>
    </>
  );
}
