import React from "react";
import { Card, Col } from "reactstrap";
import "./cardComponent.css";
import { Link } from "react-router-dom";

export function BalanceCards(props) {
  return props.config.map((obj, index) => (
    <Col md="6">
      <Card>
        <div className="current-balance-container">
          <div className="balance-card">
            <b>{obj.heading}</b>
            <span className="tool-tip">
              <img
                src={require("../../assets/images/info.svg")}
                className="mr-icon"
                alt="balance info icon"
              />
              <span>
                <span class="tooltiptext-i">Your balances</span>
              </span>
            </span>

            <h1 className={"large-text"}>
              {"$" +
                parseFloat(obj.balance).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
            </h1>
            <p className="view-transaction">
              <a
                href="#/"
                className="link-navigator tool-tip"
                tabindex="0"
                title={obj.buttonName}
              >
                <span>
                  <span class="tooltiptext">Coming Soon...</span>
                </span>
                <span>{obj.buttonName}</span>
                <div className="arrow-animation-blue" />
              </a>
            </p>
          </div>
        </div>
      </Card>
    </Col>
  ));
}
export function PageHeading(props) {
  return (
    <div className="PageHeading">
      <h1>{props.data}</h1>
    </div>
  );
}
export function CTA(props) {
  return (
    <Link to={`${props.link}`} aria-label="link to cta butns">
      <div className="Cta">
        <h2>{props.data}</h2>
        <div className="arrow-animation" />
      </div>
    </Link>
  );
}
