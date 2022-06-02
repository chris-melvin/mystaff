import React from "react";

const Card = () => {
  return (
    <div className="bg-[#1D3557] col-span-3 p-4 flex relative rounded-md overflow-hidden text-white">
      <div className="bg-orange-400 w-4 absolute left-0 top-0 h-full "></div>
      <div className="p-4">
        <img
          width="100%"
          className="rounded-full w-24"
          src="https://passionforprying.files.wordpress.com/2017/09/maybelline-contour-mastercontourpalette-gigi-beauty-1x1.jpg"
          alt=""
        />

        <p>Software Engineer</p>
        <p>job title</p>
      </div>
      <div>
        <h3>Candidate</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nulla
          debitis fugit, itaque molestias ut, tenetur culpa consequuntur
          deleniti illo commodi nostrum quam et eos corporis nam asperiores
          mollitia ea!
        </p>
      </div>
    </div>
  );
};

export default Card;
