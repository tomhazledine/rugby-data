export const findTeamMatches = (team, matches) =>
    matches.filter(
        match => match.home.team === team || match.away.team === team
    );

const findTotal = (team, year, stat, winner = true) => {
    let matches = findTeamMatches(team, year);
    let result = matches.reduce((acc, match) => {
        let matchData = winner
            ? getTeamDataFromMatch(team, match)
            : getTeamDataFromMatch(team, match, true);
        return acc + matchData[stat];
    }, 0);
    return result;
};

const matchWinner = match => {
    if (match.home.result === "win") {
        return match.home.team;
    }
    if (match.away.result === "win") {
        return match.away.team;
    }
    return "draw";
};

export const getTeamDataFromMatch = (team, match, opponent = false) => {
    if (match.home.team === team) {
        return opponent ? match.away : match.home;
    }
    if (match.away.team === team) {
        return opponent ? match.home : match.away;
    }
    return false;
};

const totalOutcomes = (team, year, outcome) => {
    let matches = findTeamMatches(team, year);
    let result = matches.reduce((acc, match) => {
        let teamData = getTeamDataFromMatch(team, match);
        if (teamData.result === outcome) {
            return acc + 1;
        }
        return acc;
    }, 0);
    return result;
};

const POINTS_RULES = {
    win: 4,
    draw: 2,
    slam: 3,
    bonus: true
};

const OLD_POINTS_RULES = {
    win: 2,
    draw: 1,
    slam: 0,
    bonus: false
};

const totalPoints = (team, year, pointsRules = POINTS_RULES) => {
    let matches = findTeamMatches(team, year);
    let wins = 0;
    let points = matches.reduce((acc, match) => {
        let matchPoints = 0;
        let teamData = getTeamDataFromMatch(team, match);
        if (teamData.result === "win") {
            matchPoints += pointsRules.win;
            wins++;
        }
        if (teamData.result === "draw") {
            matchPoints += pointsRules.draw;
        }
        if (pointsRules.bonus) {
            matchPoints += teamData.bonus_points;
        }
        return acc + matchPoints;
    }, 0);
    if (wins >= 5) {
        points += pointsRules.slam;
    }
    return points;
};

const teamStats = (teams, matches, oldPoints = false) => {
    let pointsRules = oldPoints ? OLD_POINTS_RULES : POINTS_RULES;
    return teams.reduce((acc, team) => {
        acc.push({
            team,
            points: totalPoints(team, matches, pointsRules),
            score: findTotal(team, matches, "score"),
            score_against: findTotal(team, matches, "score", false),
            score_difference:
                findTotal(team, matches, "score") -
                findTotal(team, matches, "score", false),
            tries: findTotal(team, matches, "tries"),
            conversions: findTotal(team, matches, "conversions"),
            penalties: findTotal(team, matches, "penalties"),
            drops: findTotal(team, matches, "drop"),
            wins: totalOutcomes(team, matches, "win"),
            losses: totalOutcomes(team, matches, "loss"),
            draws: totalOutcomes(team, matches, "draw")
        });
        return acc;
    }, []);
};

const teamArray = (teams, matches, callback) =>
    teams.reduce((acc, team) => {
        acc.push({
            team,
            result: callback(team, matches)
        });
        return acc;
    }, []);

export const sortResults = results => {
    results.sort((a, b) => {
        if (a.points < b.points) {
            return 1;
        }
        if (a.points > b.points) {
            return -1;
        }
        // If we get here, then the points are equal, so we need to sort by score
        // difference
        if (a.score_difference < b.score_difference) {
            return 1;
        }
        if (a.score_difference > b.score_difference) {
            return -1;
        }
        // If we get here, then the points AND score difference are equal, so we
        // need to sort by tries
        if (a.tries < b.tries) {
            return 1;
        }
        if (a.tries > b.tries) {
            return -1;
        }
        return 0;
    });
    let withPosition = results.map((item, key) => {
        item.position = key + 1;
        return item;
    });

    return withPosition;
};

export const getColumnsMinMax = (columns, data) => {
    let minMax = columns.map((column, key) => {
        if (!column.min_max) {
            return false;
        }
        let columnData = data.map(i => i[column.slug]);
        return {
            slug: column.slug,
            max: Math.max(...columnData),
            min: Math.min(...columnData)
        };
    });
    return minMax;
};

export const getMappedValue = (slug, data, minMax, reversed) => {
    let columnMinMax = minMax.find(item => item.slug === slug);
    let mappedData = remapDomain(
        parseInt(data),
        columnMinMax.min,
        columnMinMax.max,
        0,
        100
    );
    if (reversed) {
        mappedData = 100 - mappedData;
    }
    return Math.round(mappedData);
};

export const remapDomain = (x, in_min, in_max, out_min, out_max) => {
    if (in_min === in_max) {
        return (out_max - out_min) / 2;
    }
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export const decile = percentile => {
    let decile = Math.round(percentile / 10);
    return decile * 10;
};

export default teamStats;
