import { findTeamMatches } from "../tools/dataWranglers";
import * as averages from "../tools/helpers-data";

export const filterByResultType = (matches, result) =>
    matches.filter(match => {
        if (match.home.team === "ENG" && match.home.result === result)
            return true;
        if (match.away.team === "ENG" && match.away.result === result)
            return true;
        return false;
    });

export const winPercentage = (matches, wins) =>
    ((wins / matches) * 100).toFixed(2);

export const getMatchStats = matches => {
    const wins = filterByResultType(matches, "win");
    const draws = filterByResultType(matches, "draw");
    const losses = filterByResultType(matches, "loss");

    const winDiffs = wins.map(
        match => Math.abs(match.home.score - match.away.score)
        // match.home.score - match.away.score
    );
    const lossDiffs = losses.map(
        match => Math.abs(match.home.score - match.away.score)
        // match.home.score - match.away.score
    );

    return {
        total: matches.length,
        wins: wins.length,
        draws: draws.length,
        losses: losses.length,
        winpercentage: winPercentage(matches.length, wins.length),
        diffs: {
            win: winDiffs,
            loss: averages.invert(lossDiffs)
        }
    };
};

export const getTeamFingerPrint = (teamSlug, matches) => {
    const allTeamMatches = findTeamMatches(teamSlug, matches);
    const homeMatches = allTeamMatches.filter(
        match => match.home.team === teamSlug
    );
    const awayMatches = allTeamMatches.filter(
        match => match.away.team === teamSlug
    );

    return {
        team: teamSlug,
        all: getMatchStats(allTeamMatches),
        home: getMatchStats(homeMatches),
        away: getMatchStats(awayMatches)
    };
};
