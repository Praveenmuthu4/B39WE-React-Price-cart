import React from "react";
import "../App.css";

export default function CardData3() {
  return (
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
          <h6 class="card-price text-center">
            $49<span class="period">/month</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              <strong>Unlimited Users</strong>
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              150GB Storage
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Community Access
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Unlimited Private Projects
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Dedicated Phone Support
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              <strong>Unlimited</strong> Free Subdomains
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              Monthly Status Reports
            </li>
          </ul>
          <div class="d-grid">
            <a class="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
}
