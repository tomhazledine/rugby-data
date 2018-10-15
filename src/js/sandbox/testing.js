import React from "react";
import ReactDOM from "react-dom";
import CandlestickGraph from "../components/Graphs/CandlestickGraph";

import { getTeamFingerPrint } from "../tools/fingerprinting";
import data from "../data/sixnations";

console.log("sandbox running...");

const getAllMatches = years =>
    years.reduce((acc, curr) => acc.concat(curr.matches), []);

const allMatches = getAllMatches(data);

const engFingerprint = getTeamFingerPrint("ENG", allMatches);
console.log(engFingerprint);

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
        <CandlestickGraph results={matches} />
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
