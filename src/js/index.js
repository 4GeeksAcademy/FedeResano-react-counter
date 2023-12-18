import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../styles/index.css";

function simpleCounter(props) {
    return (
        <div className="counterBox">
            <div className="clock">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="sixthDigit">{props.sixth % 10}</div>
            <div className="fifthDigit">{props.fifth % 10}</div>
            <div className="fourthDigit">{props.fourth % 10}</div>
            <div className="thirdDigit">{props.third % 10}</div>
            <div className="secondDigit">{props.second % 10}</div>
            <div className="firstDigit">{props.first % 10}</div>
        </div>);
}

simpleCounter.propTypes = {
    sixthDigit: PropTypes.number,
    fifthDigit: PropTypes.number,
    fourthDigit: PropTypes.number,
    thirdDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    firstDigit: PropTypes.number
}

let counter = 0;

setInterval(function () {
    const sixth = Math.floor(counter / 100000);
    const fifth = Math.floor(counter / 10000);
    const fourth = Math.floor(counter / 1000);
    const third = Math.floor(counter / 100);
    const second = Math.floor(counter / 10);
    const first = Math.floor(counter / 1);
    counter++;

    ReactDOM.render(
        <simpleCounter
            firstDigit={first}
            secondDigit={second}
            thirdDigit={third}
            fourthDigit={fourth}
            fifthDigit={fifth}
            sixthDigit={sixth}
        />,
        document.querySelector("#app"));

}, 1000);
