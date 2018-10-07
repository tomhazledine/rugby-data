import React from "react";
import ReactDOM from "react-dom";

import * as tools from "../tools/dataWranglers";
import * as averages from "../tools/helpers-data";
import data from "../data/sixnations";
import { findTeamMatches } from "../tools/dataWranglers";

console.log("sandbox running...");

const getAllMatches = years =>
    years.reduce((acc, curr) => acc.concat(curr.matches), []);

const filterByResult = (matches, result) =>
    matches.filter(match => {
        if (match.home.team === "ENG" && match.home.result === result)
            return true;
        if (match.away.team === "ENG" && match.away.result === result)
            return true;
        return false;
    });

const allMatches = getAllMatches(data);
const allEngMatches = findTeamMatches("ENG", allMatches);

const allEngWins = filterByResult(allEngMatches, "win");
const allEngDraws = filterByResult(allEngMatches, "draw");
const allEngLosses = filterByResult(allEngMatches, "loss");

const winPercentage = (matches, wins) => ((wins / matches) * 100).toFixed(2);

const winDiffs = allEngWins.map(match =>
    Math.abs(match.home.score - match.away.score)
);

const lossDiffs = allEngLosses.map(match =>
    Math.abs(match.home.score - match.away.score)
);

console.log(allEngMatches);
console.log(winDiffs);
console.log(lossDiffs);

ReactDOM.render(
    <div>
        <h1>England results</h1>
        <p>Total matches: {allEngMatches.length}</p>
        <ul>
            <li>{allEngWins.length} wins</li>
            <li>{allEngDraws.length} draws</li>
            <li>{allEngLosses.length} losses</li>
        </ul>
        <p>
            win percentage ={" "}
            {winPercentage(allEngMatches.length, allEngWins.length)}%
        </p>
        <p>Median win point-difference {averages.median(winDiffs)}</p>
        <p>Median loss point-difference {averages.median(lossDiffs)}</p>
    </div>,
    document.getElementById("root")
);
