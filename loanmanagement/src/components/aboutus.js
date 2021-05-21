import React from "react";
import "../css/aboutus.css";

const AboutUs = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
      className='aboutus'
    >
      <img
        src='loan2.jpg'
        alt='image6'
        style={{ marginRight: "35px" }}
        className='aboutImage'
      />
      <div>
        <h1 style={{ color: "white" }}>About TaxBlock</h1>
        <p style={{ color: "white", fontSize: "17px" }}>
          TaxBlock is one of the best platform that work closely with its
          partner banks to get the lowest rate of interest, loan eligibility,
          offers, and the most superior customer services for its customers in
          Delhi/NCR region. TaxBlock offering you comprehensive services of
          Personal Loan, Home Loan, Loan against Property (Mortgage Loan), and
          Business Loan to meet your financial need. We understand your
          financial requirements and will help you to fulfill your needs. If you
          are looking for a quick disbursal of your financial need you can
          simply apply through TaxBlock. Once you provide your basic
          information, our team will contact you and we will work closely with
          our partner banks to ensure that you get the best loan with reasonable
          rate of interest. Our Expert Loan Advisor will coordinate with you as
          well as our partner banks throughout the loan process to ensure that
          you will get quick and easy approval with minimal paperwork.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
