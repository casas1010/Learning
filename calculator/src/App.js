import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import Flexbox from 'flexbox-react';

// file:///Users/juancasas/
// Users/juancasas/practical-react
// npm star
//

// charCodeAt
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topDisplay: 0,
      bottomDisplay: 0,
      reset: true,
      ACreset:true,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  checkLenght(){
    let topLen = this.state.topDisplay.length;
    let botLen = this.state.bottomDisplay.length;
    if (botLen==12){
      componentDidMount() {
        setInterval(this.myFunction, 3000)
     }

    }


  }

  handleClick(event) {
    let ev = event.target.textContent;
    let evChar = ev.charCodeAt();
    //alert(ev);

    if ( ev =="="){
      this.setState({
        topDisplay: eval(this.state.topDisplay)
      })
    }
    if (ev == 'AC') {
      this.setState({
        topDisplay: 0,
        bottomDisplay: 0,
        ACreset: true
      })
    }
    // initial conditions for number input
    if (this.state.ACreset == true) {
      if (evChar >= 48 && evChar <= 57) {
        this.setState({
          bottomDisplay: ev,
          topDisplay: ev,
          ACreset: false,
        })
      }
    }
    // after initial conditions
    else {


      if (evChar >= 48 && evChar <= 57 || evChar == 32) {
        //alert( 'its a number ' );
        if (this.state.reset == true) {
          this.setState({
            topDisplay: this.state.topDisplay + ev,
            bottomDisplay: ev,
            reset: false
          });
        }
        else {
          this.setState({
            topDisplay: this.state.topDisplay + ev,
            bottomDisplay: this.state.bottomDisplay + ev
          });
        }
      }
      else if (47 >= evChar) {
        //alert('its not a number!')

        this.setState({
          topDisplay: this.state.topDisplay+ev ,
          bottomDisplay: ev,
          reset: true
        });

      }

    }

  }

  render() {


    return (
      <div id='casing'>

        <div id='display-casing'>

          <div id='display-top'>{this.state.topDisplay}</div>
          <div id='display-bottom' >{this.state.bottomDisplay}</div>

        </div> {/*display-casing-ends*/}


        <div id='button-casing' onClick={this.handleClick}>


          <div id='row1' className="flex-container" >
            <div className='button' value="AC" style={{ width: "60px" }} id='clear'>AC</div>
            <div className='button' value="/" id='divide' >/</div>
            <div className='button' value="*" id='multiply'  >*</div>
          </div>
          <div id='row2' className="flex-container">
            <div className='button' value="7" id='7'>7</div>
            <div className='button' value="8" id='8'>8</div>
            <div className='button' value="9" id='9'>9</div>
            <div className='button' value="-" id='subtract'>-</div>
          </div>
          <div id='row3' className="flex-container">
            <div className='button' value="4" id='4'>4</div>
            <div className='button' value="5" id='5'>5</div>
            <div className='button' value="6" id='6'>6</div>
            <div className='button' value="+" id='+'>+</div>
          </div>
          <div id='bottom-casing'  >
            <div className='button' style={{ float: 'right', height: '60px', lineHeight: '60px', textAlign: 'center' }} id='equals'>=</div>
            <div id='row4' className="flex-container">
              <div className='button' value="1" id='1'>1</div>
              <div className='button' value="2" id='2'>2</div>
              <div className='button' value="3" id='3'>3</div>
            </div>
            <div id='row5' className="flex-container">
              <div className='button' id='0' value="0" style={{ width: "60px" }} > 0</div>
              <div className='button' id='.' value="." >.</div>
            </div>

          </div>




        </div>

      </div>
    )
  }
};


export default App;








// https://cdn.freebiesupply.com/logos/large/2x/twitter-logo-png-transparent.png


/*

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // describe your state here
      author: '',
      text: '',
      quoteBox: {},
      outterBox: {}

    }



    this.newQuteColor = this.newQuteColor.bind(this);
  }
  componentDidMount() { //runs in the begining
    this.newQuteColor();
  }

  newQuteColor() {
    //select a quote
    let vari = Math.floor(Math.random() * quoteBank.length);
    this.setState({ // describe your state here
      author: quoteBank[vari][0],
      text: quoteBank[vari][1]
    });

    // creates a random color
    var randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);


    this.setState({
      quoteBox: {
        color: randomColor1,
        backgroundColor: 'white'

      }
      ,
      outterBox: {
        color: randomColor1

      }
    })
  }







  render() {



    return (
      <div id='outer-box' stlye={this.state.outterBox}> Outer-box is here

        <div id="quote-box" onLoad={this.newQuteColor} style={this.state.quoteBox}  >
          <div id='text'>{this.state.text}</div>
          <div id='author'>{this.state.author}</div>
          <button id='new-quote' onClick={this.newQuteColor} >click me</button>
        </div>

      </div>
    );
  }
}

*/
