import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../styles/index.css";

const SimpleCounter = (props) => {
    return (
        <div className="counterBox">
            <div className="clock">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="sixthDigit">{props.sixth}</div>
            <div className="fifthDigit">{props.fifth}</div>
            <div className="fourthDigit">{props.fourth}</div>
            <div className="thirdDigit">{props.third}</div>
            <div className="secondDigit">{props.second}</div>
            <div className="firstDigit">{props.first}</div>
        </div>);
}

SimpleCounter.propTypes = {
    sixthDigit: PropTypes.number,
    fifthDigit: PropTypes.number,
    fourthDigit: PropTypes.number,
    thirdDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    firstDigit: PropTypes.number
}

let counter = 0;

setInterval(function () {
    let sixth = Math.floor(counter / 100000) % 10;
    let fifth = Math.floor(counter / 10000) % 10;
    let fourth = Math.floor(counter / 1000) % 10;
    let third = Math.floor(counter / 100) % 10;
    let second = Math.floor(counter / 10) % 10;
    let first = Math.floor(counter / 1) % 10;
    counter++;

    ReactDOM.render(
        <SimpleCounter
            firstDigit={first}
            secondDigit={second}
            thirdDigit={third}
            fourthDigit={fourth}
            fifthDigit={fifth}
            sixthDigit={sixth}
        />,
        document.querySelector("#app"));

}, 1000);
