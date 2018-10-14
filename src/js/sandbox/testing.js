import React from "react";
import ReactDOM from "react-dom";
import { css } from "emotion";
import * as d3 from "d3";

import Candlestick from "../components/Graphs/Candlestick";

import { getTeamFingerPrint } from "../tools/fingerprinting";
import data from "../data/sixnations";

console.log("sandbox running...");

const getAllMatches = years =>
    years.reduce((acc, curr) => acc.concat(curr.matches), []);

const allMatches = getAllMatches(data);

const engFingerprint = getTeamFingerPrint("ENG", allMatches);
console.log(engFingerprint);

const resultSpreads = results => {
    const rowDimensions = {
        width: 400,
        height: 16
    };
    return (
        <div key={results}>
            <CandlestickGraph
                domain={[0, 100]}
                dimensions={{
                    width: rowDimensions.width,
                    height: 2 * rowDimensions.height
                }}
            >
                <Candlestick
                    domain={[0, 100]}
                    dimensions={{
                        width: rowDimensions.width,
                        height: rowDimensions.height
                    }}
                    data={results.diffs.win}
                    position={{ x: 0, y: 0 }}
                />
                <Candlestick
                    domain={[0, 100]}
                    dimensions={{
                        width: rowDimensions.width,
                        height: rowDimensions.height
                    }}
                    data={results.diffs.loss}
                    position={{ x: 0, y: rowDimensions.height }}
                />
            </CandlestickGraph>
        </div>
    );
};

const CandlestickGraph = ({ dimensions, children }) => {
    return (
        <svg
            className="candlesick__wrapper"
            width={dimensions.width}
            height={dimensions.height}
            style={{ display: "block" }}
        >
            {children}
        </svg>
    );
};

const overview = (matches, title) => (
    <div key={title}>
        <h2>{title}</h2>
        <ul>
            <li>{matches.total} total matches</li>
            <li>{matches.wins} wins</li>
            <li>{matches.draws} draws</li>
            <li>{matches.losses} losses</li>
            <li>{matches.winpercentage}% win percentage</li>
            <li>{matches.diffs.win.median} median win point-difference</li>
        </ul>
        {resultSpreads(matches)}
        <hr />
    </div>
);

ReactDOM.render(
    <div>
        <h1>England results</h1>
        {overview(engFingerprint.all, "all matches")}
        {overview(engFingerprint.home, "home matches")}
        {overview(engFingerprint.away, "away matches")}
    </div>,
    document.getElementById("root")
);
