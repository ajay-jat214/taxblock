import React from "react";
import { Card } from "antd";
import "../css/loans.css";

const Loans = () => {
  return (
    <div className='scrolling-wrapper'>
      <div class='candidate-container'>
        <div class='candidate'>
          <a>
            <div class='candidate-image'>
              <div class='candidate-image-text'>
                Home loans <br />
                upto
                <br /> 20 Lakhs
              </div>{" "}
              <img
                src='home.jpg'
                alt='imagejkbkkjbkj1'
                className='loanType'
                style={{ height: "350px" }}
              />
            </div>
            <div class='candidate-name'>Home Loan</div>
          </a>
        </div>
      </div>
      <div class='candidate-container'>
        <div class='candidate'>
          <a>
            <div class='candidate-image'>
              <div class='candidate-image-text'>
                Education loans <br />
                upto
                <br /> 10 Lakhs
              </div>{" "}
              <img
                src='education.jpg'
                alt='ijnnlkjkl2mage'
                className='loanType'
                style={{ height: "350px" }}
              />
            </div>
            <div class='candidate-name'>Education Loan</div>
          </a>
        </div>
      </div>
      <div class='candidate-container'>
        <div class='candidate'>
          <a>
            <div class='candidate-image'>
              <div class='candidate-image-text'>
                Bussiness loans <br />
                upto
                <br /> 30 lakhs
              </div>{" "}
              <img
                src='bussiness.jpg'
                alt='ijkkjhli23mage'
                className='loanType'
                style={{ height: "350px" }}
              />
            </div>
            <div class='candidate-name'>Bussiness Loan</div>
          </a>
        </div>
      </div>
      <div class='candidate-container'>
        <div class='candidate'>
          <a>
            <div class='candidate-image'>
              <div class='candidate-image-text'>
                Personal loans <br />
                upto
                <br /> 5-10 lakhs
              </div>{" "}
              <img
                src='personal.jpg'
                alt='imalkhlklj5ge'
                className='loanType'
                style={{ height: "350px" }}
              />
            </div>
            <div class='candidate-name'>Personal Loan</div>
          </a>
        </div>
      </div>
      <div class='candidate-container'>
        <div class='candidate'>
          <a>
            <div class='candidate-image'>
              <div class='candidate-image-text'>
                Gold loans <br />
                upto
                <br /> 100%
              </div>{" "}
              <img
                src='gold.jpg'
                alt='imajbkjbkj4ge'
                className='loanType'
                style={{ height: "350px" }}
              />
            </div>
            <div class='candidate-name'>Gold Loan</div>
          </a>
        </div>
      </div>
      <div class='candidate-container'>
        <div class='candidate'>
          <a>
            <div class='candidate-image'>
              <div class='candidate-image-text'>
                Vehicle loans <br />
                upto
                <br /> 10-15 lakhs
              </div>{" "}
              <img
                src='vehicle.jpg'
                alt='imagjkbkj7e'
                className='loanType'
                style={{ height: "350px" }}
              />
            </div>
            <div class='candidate-name'>Vehicle Loan</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loans;
