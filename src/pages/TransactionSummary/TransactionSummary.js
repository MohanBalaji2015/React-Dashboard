import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connector";
import { Helmet } from "react-helmet";
import { Row } from "reactstrap";
import { BalanceCards } from "../../commonComponents/statelessComponents/cardComponent";
import TransactionTable from "../../commonComponents/TransactionTable/TransactionTable";
import {
  PageHeading,
  CTA
} from "../../commonComponents/statelessComponents/cardComponent";
import "./TransactionSummary.css";
const BalanceCardsConfiguration = [
  {
    heading: "Current Balance",
    balance: 100000,
    url: "/",
    buttonName: "View account summary",
    comingSoon: false
  },
  {
    heading: "Available Balance",
    balance: 20000,
    url: "",
    buttonName: "View transaction summary",
    comingSoon: true
  }
];

class TransactionSummary extends Component {
  componentDidMount() {
    this.props.getAllAccountSummaryBalanceData();
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Transaction Summary Page</title>
          <meta
            name="description"
            content="Lets Do India Transaction Summary Page, here we can see all transaction data"
          />
        </Helmet>

        <div className="account-summary">
          <div className="bg-gray-color-container">
            <div className="main-max-width-container">
              <PageHeading data={"Transaction Summary"} />
              <h3>{"John Carson Eco Fund - A024759"}</h3>
              <Row>
                <BalanceCards config={BalanceCardsConfiguration} />
              </Row>
              <Row className="Cta-Wrapper">
                <CTA
                  data={"Transaction Summary"}
                  link={"/TransactionSummary"}
                />
                <CTA data={"Manage your account"} link={"#"} />
                <CTA data={"Contribution Activity"} link={"#"} />
                <CTA data={"Exchange Activity"} link={"#"} />
              </Row>
              <Row>
                {this.props.TransactionData.IsLoading === true ? (
                  <div>
                    <div className="loadingContainer">
                      <div>{"loading...."}</div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="transaction-heading">
                      {"Transaction Summary Details-"}
                    </h2>
                    <TransactionTable
                      data={this.props.TransactionData.FirstData}
                    />
                  </>
                )}
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionSummary);
