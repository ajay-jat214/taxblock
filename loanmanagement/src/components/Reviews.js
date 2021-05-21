import React from "react";
import AliceCarousel from "react-alice-carousel";

const Reviews = () => {
  return (
    <AliceCarousel>
      <div>
        <h1 className='white'>Ram Verma</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src='user1.jpg'
            alt='user1'
            style={{
              borderRadius: "100%",
              height: "80px",
              width: "80px",
              marginRight: "40px",
            }}
          />
          <div className='white'>
            "Working with TaxBlock is a good experience and customer service is
            also excellent. TaxBlock provides you the loan at the least possible
            rate of interest and better services are provided."
          </div>
        </div>
      </div>

      <div>
        <h1 className='white'>Chetan Bhagat</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src='user2.jpg'
            alt='user12'
            style={{
              borderRadius: "100%",
              height: "80px",
              width: "80px",
              marginRight: "40px",
            }}
          />
          <div className='white'>
            "Working with TaxBlock is a good experience and customer service is
            also excellent. TaxBlock provides you the loan at the least possible
            rate of interest and better services are provided."
          </div>
        </div>
      </div>

      <div>
        <h1 className='white'>Dheeraj Chaudhari</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src='user3.jpg'
            alt='user3'
            style={{
              borderRadius: "100%",
              height: "80px",
              width: "80px",
              marginRight: "40px",
            }}
          />
          <div className='white'>
            "Working with TaxBlock is a good experience and customer service is
            also excellent. TaxBlock provides you the loan at the least possible
            rate of interest and better services are provided."
          </div>
        </div>
      </div>
    </AliceCarousel>
  );
};

export default Reviews;
