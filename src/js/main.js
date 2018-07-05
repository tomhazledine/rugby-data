import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';

import '../scss/main.scss';
import './icons';

import sixNationsData from './data/sixnations';

console.log(sixNationsData.Y_2018);

const findTeamMatches = (team, matches) =>
    matches.filter(match => match.home.team === team || match.away.team === team);

const totalScore = (team, year) => {
    let matches = findTeamMatches(team, year);
    let score = matches.reduce((acc, match) => {
        let matchData = getTeamDataFromMatch(team, match);
        return acc + matchData.score;
    }, 0);
    return score;
};

const totalConceded = (team, year) => {
    let matches = findTeamMatches(team, year);
    let score = matches.reduce((acc, match) => {
        let matchData = getOpponentDataFromMatch(team, match);
        return acc + matchData.score;
    }, 0);
    return score;
};

const totalTries = (team, year) => {
    let matches = findTeamMatches(team, year);
    let score = matches.reduce((acc, match) => {
        let matchData = getTeamDataFromMatch(team, match);
        return acc + matchData.tries;
    }, 0);
    return score;
};

const totalConversions = (team, year) => {
    let matches = findTeamMatches(team, year);
    let score = matches.reduce((acc, match) => {
        let matchData = getTeamDataFromMatch(team, match);
        return acc + matchData.conversions;
    }, 0);
    return score;
};

const totalPenalties = (team, year) => {
    let matches = findTeamMatches(team, year);
    let score = matches.reduce((acc, match) => {
        let matchData = getTeamDataFromMatch(team, match);
        return acc + matchData.penalties;
    }, 0);
    return score;
};

const totalDrops = (team, year) => {
    let matches = findTeamMatches(team, year);
    let score = matches.reduce((acc, match) => {
        let matchData = getTeamDataFromMatch(team, match);
        return acc + matchData.drop;
    }, 0);
    return score;
};

const matchWinner = match => {
    if (match.home.result === 'win') {
        return match.home.team;
    }
    if (match.away.result === 'win') {
        return match.away.team;
    }
    return 'draw';
};

const getTeamDataFromMatch = (team, match) => {
    if (match.home.team === team) {
        return match.home;
    }
    if (match.away.team === team) {
        return match.away;
    }
    return false;
};

const getOpponentDataFromMatch = (team, match) => {
    if (match.home.team === team) {
        return match.away;
    }
    if (match.away.team === team) {
        return match.home;
    }
    return false;
};

const totalWins = (team, year) => {
    let matches = findTeamMatches(team, year);
    let wins = matches.reduce((acc, match) => {
        let teamData = getTeamDataFromMatch(team, match);
        if (teamData.result === 'win') {
            return acc + 1;
        }
        return acc;
    }, 0);
    return wins;
};

const totalLosses = (team, year) => {
    let matches = findTeamMatches(team, year);
    let losses = matches.reduce((acc, match) => {
        let teamData = getTeamDataFromMatch(team, match);
        if (teamData.result === 'loss') {
            return acc + 1;
        }
        return acc;
    }, 0);
    return losses;
};

const totalDraws = (team, year) => {
    let matches = findTeamMatches(team, year);
    let draws = matches.reduce((acc, match) => {
        let teamData = getTeamDataFromMatch(team, match);
        if (teamData.result === 'draw') {
            return acc + 1;
        }
        return acc;
    }, 0);
    return draws;
};

const totalPoints = (team, year) => {
    let matches = findTeamMatches(team, year);
    let wins = 0;
    let points = matches.reduce((acc, match) => {
        let matchPoints = 0;
        let teamData = getTeamDataFromMatch(team, match);
        if (teamData.result === 'win') {
            matchPoints += 4;
            wins++;
        }
        if (teamData.result === 'draw') {
            matchPoints += 2;
        }
        matchPoints += teamData.bonus_points;
        return acc + matchPoints;
    }, 0);
    if (wins >= 5) {
        points += 3;
    }
    return points;
};

const teamStats = (teams, matches) =>
    teams.reduce((acc, team) => {
        acc.push({
            team,
            points: totalPoints(team, matches),
            wins: totalWins(team, matches),
            losses: totalLosses(team, matches),
            draws: totalDraws(team, matches),
            score: totalScore(team, matches),
            score_against: totalConceded(team, matches),
            score_difference: totalScore(team, matches) - totalConceded(team, matches),
            tries: totalTries(team, matches),
            conversions: totalConversions(team, matches),
            penalties: totalPenalties(team, matches),
            drops: totalDrops(team, matches)
        });
        return acc;
    }, []);

const teamArray = (teams, matches, callback) =>
    teams.reduce((acc, team) => {
        acc.push({
            team,
            result: callback(team, matches)
        });
        return acc;
    }, []);

// let results_eng = totalScore('ENG', sixNationsData.Y_2018.matches);
// console.log(results_eng);

// let allScores = teamArray(sixNationsData.Y_2018.teams, sixNationsData.Y_2018.matches, totalScore);
// console.log(allScores);

// let allPoints = teamArray(sixNationsData.Y_2018.teams, sixNationsData.Y_2018.matches, totalPoints);
// console.log(allPoints);

const compareByPoints = (a, b) => {
    if (a.points < b.points) {
        return 1;
    }
    if (a.points > b.points) {
        return -1;
    }
    return 0;
};

let allStats_2018 = teamStats(sixNationsData.Y_2018.teams, sixNationsData.Y_2018.matches);
let finalResults_2018 = allStats_2018.sort(compareByPoints);
console.log('2018', finalResults_2018);

let allStats_2017 = teamStats(sixNationsData.Y_2017.teams, sixNationsData.Y_2017.matches);
let finalResults_2017 = allStats_2017.sort(compareByPoints);
console.log('2017', finalResults_2017);

ReactDOM.render(<Main />, document.getElementById('root'));
