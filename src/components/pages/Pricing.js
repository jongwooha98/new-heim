import React from 'react';

import '../../App.scss';

function Pricing() {
  return (
    <div class="pricing__container container">
      <div class="row">
        <div class="col-md-4">
          <div class="card card_red text-center">
            <div class="title">
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
              <h2>Basic</h2>
            </div>
            <div class="price">
              <h4>
                <sup>$</sup>25
              </h4>
            </div>
            <div class="option">
              <ul>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>10 GB Space
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>3 Domain Names
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>20 Emails
                  Addresse
                </li>
                <li>
                  <i class="fa fa-times" aria-hidden="true"></i>Live Support
                </li>
              </ul>
            </div>
            <a href="/">Order Now</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card_violet text-center">
            <div class="title">
              <i class="fa fa-plane" aria-hidden="true"></i>
              <h2>Premium</h2>
            </div>
            <div class="price">
              <h4>
                <sup>$</sup>25
              </h4>
            </div>
            <div class="option">
              <ul>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>10 GB Space
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>3 Domain Names
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>20 Emails
                  Addresse
                </li>
                <li>
                  <i class="fa fa-times" aria-hidden="true"></i>Live Support
                </li>
              </ul>
            </div>
            <a href="/">Order Now</a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card_three text-center">
            <div class="title">
              <i class="fa fa-rocket" aria-hidden="true"></i>
              <h2>Standart</h2>
            </div>
            <div class="price">
              <h4>
                <sup>$</sup>50
              </h4>
            </div>
            <div class="option">
              <ul>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>50 GB Space
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>5 Domain Names
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>20 Emails
                  Addresse
                </li>
                <li>
                  <i class="fa fa-times" aria-hidden="true"></i>Live Support
                </li>
              </ul>
            </div>
            <a href="/">Order Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
