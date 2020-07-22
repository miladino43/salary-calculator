import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: 40000,
      percentageafter: 50,
      billingPoint: 100000,
      TotalBilled: 200000,
      salary: 0
    };
    this.handleChangeBase = this.handleChangeBase.bind(this);
    this.handleChangebillingPoint = this.handleChangebillingPoint.bind(this);
    this.handleChangePercentage = this.handleChangePercentage.bind(this);
    this.handleChangeTotalBilled = this.handleChangeTotalBilled.bind(this);
  }
  handleChangeBase(event) {
    let earnings_from_billed =
      (this.state.TotalBilled - this.state.billingPoint) *
      (this.state.percentageafter * 0.01);
    console.log(earnings_from_billed);
    const salary =
      parseInt(event.target.value) + parseInt(earnings_from_billed);
    this.setState({ base: event.target.value, salary: salary });
  }
  handleChangebillingPoint(event) {
    let v = event.target.value;
    console.log(v);
    let earnings_from_billed =
      (this.state.TotalBilled - v) * (this.state.percentageafter * 0.01);
    console.log(earnings_from_billed);
    const salary = parseInt(this.state.base) + parseInt(earnings_from_billed);
    this.setState({ billingPoint: event.target.value, salary: salary });
  }
  handleChangePercentage(event) {
    let earnings_from_billed =
      (this.state.TotalBilled - this.state.billingPoint) *
      (this.state.percentageafter * 0.01);
    console.log(earnings_from_billed);
    const salary = parseInt(this.state.base) + parseInt(earnings_from_billed);
    this.setState({ percentageafter: event.target.value, salary: salary });
  }
  handleChangeTotalBilled(event) {
    let earnings_from_billed =
      (this.state.TotalBilled - this.state.billingPoint) *
      (this.state.percentageafter * 0.01);
    console.log(earnings_from_billed);
    const salary = parseInt(this.state.base) + parseInt(earnings_from_billed);
    this.setState({ TotalBilled: event.target.value, salary: salary });
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <label>
              base:
              <input
                type="number"
                name="name"
                value={this.state.base}
                onChange={this.handleChangeBase}
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              billingPoint:
              <input
                type="number"
                name="name"
                value={this.state.billingPoint}
                onChange={this.handleChangebillingPoint}
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              percentageafter:
              <input
                type="number"
                name="percentageafter"
                value={this.state.percentageafter}
                onChange={this.handleChangePercentage}
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              TotalBilled:
              <input
                type="number"
                name="totalBilled"
                value={this.state.TotalBilled}
                onChange={this.handleChangeTotalBilled}
              />
            </label>
          </Col>
        </Row>
        <Row>
          <label>
            Salary:
            {this.state.salary}
          </label>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
