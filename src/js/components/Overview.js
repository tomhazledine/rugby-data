import React from 'react';

import teamStats, { sortResults } from '../tools/dataWranglers';

class Overview extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    getTotalValue(team, results, key) {
        return results.reduce((acc, year) => {
            let teamResults = year.results.find(results => results.team == team);
            return (acc += teamResults[key]);
        }, 0);
    }

    countMatches(team, results) {
        return results.reduce((acc, year) => {
            let teamResults = year.results.find(results => results.team == team);
            let yearlyMatches = teamResults.wins + teamResults.losses + teamResults.draws;
            return (acc += yearlyMatches);
        }, 0);
    }

    constGetTotalTeamStats(team, results) {
        return {
            team: team,
            matches: this.countMatches(team, results),
            wins: this.getTotalValue(team, results, 'wins'),
            losses: this.getTotalValue(team, results, 'losses'),
            draws: this.getTotalValue(team, results, 'draws'),
            score: this.getTotalValue(team, results, 'score'),
            score_against: this.getTotalValue(team, results, 'score_against'),
            score_difference: this.getTotalValue(team, results, 'score_difference'),
            tries: this.getTotalValue(team, results, 'tries'),
            conversions: this.getTotalValue(team, results, 'conversions'),
            penalties: this.getTotalValue(team, results, 'penalties'),
            drops: this.getTotalValue(team, results, 'drops')
        };
    }

    getMeans(totals) {
        // console.log('totals', totals);
        return totals.map(team =>
            Object.keys(team).reduce((acc, key) => {
                if (
                    key === 'score' ||
                    key === 'score_against' ||
                    key === 'score_difference' ||
                    key === 'tries' ||
                    key === 'conversions' ||
                    key === 'penalties' ||
                    key === 'drops'
                ) {
                    acc[key] = Math.round(team[key] / team.matches);
                } else {
                    acc[key] = team[key];
                }
                return acc;
            }, {})
        );
    }

    render() {
        // console.log(this.props.years);

        const totals = [
            this.constGetTotalTeamStats('ENG', this.props.years),
            this.constGetTotalTeamStats('FRA', this.props.years),
            this.constGetTotalTeamStats('IRE', this.props.years),
            this.constGetTotalTeamStats('ITA', this.props.years),
            this.constGetTotalTeamStats('SCO', this.props.years),
            this.constGetTotalTeamStats('WAL', this.props.years)
        ];

        const avarages = this.getMeans(totals);

        console.log(totals);
        console.log(avarages);

        // console.log(years);

        return (
            <div>
                <h1>Overview</h1>
            </div>
        );
    }
}

export default Overview;
