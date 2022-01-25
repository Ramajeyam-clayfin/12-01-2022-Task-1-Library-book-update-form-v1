import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      book: {
        bname: '',
        aname: '',
        price: '',
        tbooks: '',
      },
    };
  }

  bnameGetter = (event) => {
    this.setState({ bname: event.target.value });
  };
  anameGetter = (event) => {
    this.setState({ aname: event.target.value });
  };
  priceGetter = (event) => {
    this.setState({ price: event.target.value });
  };
  tbooksGetter = (event) => {
    this.setState({ tbooks: event.target.value });
  };

  buttonClicked = (event) => {
    let total = this.state.price * this.state.tbooks;
    let newLine = '\r\n';
    alert(
      `Book Name : ${this.state.bname}${newLine} Author Name :  ${this.state.aname}${newLine} Price : ${this.state.price}${newLine} No. Of Books : ${this.state.tbooks}${newLine} Total Price Of The Books : ₹ ${total}`
    );
  };
  render() {
    return (
      <div>
        <form>
          <h1> Library Book Update</h1>
          <label>Book Name : </label>
          <input type="text" onChange={this.bnameGetter} />
          <br />
          <br />
          <label>Author Name : </label>
          <input type="text" onChange={this.anameGetter} />
          <br />
          <br />
          <label>Price : </label>
          <input type="Number" onChange={this.priceGetter} /> <br />
          <br />
          <label>Number Of Books : </label>
          <input type="Number" onChange={this.tbooksGetter} />
          <br />
          <br />
          <button value={this.tpricecalc} onClick={this.buttonClicked}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
