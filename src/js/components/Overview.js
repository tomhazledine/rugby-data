import React from 'react';

import sixNationsData from '../data/sixnations';
import teamStats, { sortResults, getTeamDataFromMatch } from '../tools/dataWranglers';
import { sortByAlternateKey, mode, median, mean } from '../tools/helpers-data';
import AveragesTable from './AveragesTable';
import TotalsBar from './TotalsBar';
import ScoreOverTime from './ScoreOverTime';

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
                    acc[key] = (team[key] / team.matches).toFixed(2);
                } else {
                    acc[key] = team[key];
                }
                return acc;
            }, {})
        );
    }

    getOpponents(teams, team) {
        return teams.filter(opponent => opponent !== team);
    }

    createOppositionObject(opponents) {
        return opponents.reduce((acc, opponent) => {
            acc[opponent] = 0;
            return acc;
        }, {});
    }

    getYearlyResults(data) {
        let yearlyResults = data.map(year => {
            let yearResults = year.teams.map(team => {
                let teamMatches = year.matches.filter(
                    match => match.away.team === team || match.home.team === team
                );

                let opponents = this.getOpponents(year.teams, team);
                let opposition = this.createOppositionObject(opponents);

                let results = teamMatches.reduce(
                    (acc, match) => {
                        let teamMatchData = getTeamDataFromMatch(team, match);
                        let opponentMatchData = getTeamDataFromMatch(team, match, true);
                        acc.score += teamMatchData.score;
                        acc.opposition[opponentMatchData.team] += teamMatchData.score;
                        return acc;
                    },
                    { score: 0, opposition, opponents, team }
                );
                return results;
            });

            return yearResults;
        });

        return yearlyResults;
    }

    getCumulativeScores(data) {
        const teams = ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'];

        let yearlyResults = this.getYearlyResults(data);

        let cululativeResults = teams.map(team => {
            let opponents = this.getOpponents(teams, team);
            let opposition = this.createOppositionObject(opponents);
            let teamResults = yearlyResults.reduce(
                (acc, year) => {
                    let teamYear = year.find(item => item.team === team);

                    let results = opponents.map(opponent => {
                        acc.opposition[opponent] =
                            acc.opposition[opponent] + teamYear.opposition[opponent];
                    });

                    acc.score += teamYear.score;
                    return acc;
                },
                { score: 0, team, opponents, opposition }
            );
            return teamResults;
        });

        return cululativeResults;
    }

    getYearlyScoresArray(data) {
        const years = [
            '2000',
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018'
        ];
        years.reverse();
        const teams = ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'];

        // const results = teams.reduce((acc, team) => {
        //     acc[team] = data.map((year, i) => {
        //         let teamYear = year.find(item => item.team === team);
        //         return { year: years[i], score: teamYear.score };
        //     });
        //     return acc;
        // }, {});

        const results = years.map((year, i) => {
            let entry = teams.reduce((acc, team) => {
                let teamYear = data[i].find(item => item.team === team);
                acc[team] = teamYear.score;
                return acc;
            }, {});
            entry.year = year;

            // acc.year = year;
            // teams.map(team => {

            // })
            // acc[team] = data.map((year, i) => {
            //     let teamYear = year.find(item => item.team === team);
            //     return { year: years[i], score: teamYear.score };
            // });
            return entry;
        }, {});

        return results;
    }

    render() {
        const yearlyResults = this.getYearlyResults(sixNationsData);

        const cumulativeScores = this.getCumulativeScores(sixNationsData);

        const yearlyScoresArray = this.getYearlyScoresArray(yearlyResults);

        // console.log(yearlyResults);

        const totals = [
            this.constGetTotalTeamStats('ENG', this.props.years),
            this.constGetTotalTeamStats('FRA', this.props.years),
            this.constGetTotalTeamStats('IRE', this.props.years),
            this.constGetTotalTeamStats('ITA', this.props.years),
            this.constGetTotalTeamStats('SCO', this.props.years),
            this.constGetTotalTeamStats('WAL', this.props.years)
        ];

        let averages = this.getMeans(totals);
        averages = sortByAlternateKey(averages, 'score');

        // let numbers = [13, 25, 34, 34, 41, 41, 32, 13];

        // let result_mode = mode(numbers);
        // let result_median = median(numbers);
        // let result_mean = mean(numbers);

        // console.log('numbers', numbers);
        // console.log('result_mode', result_mode);
        // console.log('result_median', result_median);
        // console.log('result_mean', result_mean);
        // console.log(averages);

        // console.log(years);

        const totalsGraphs = cumulativeScores.map((team, key) => (
            <TotalsBar key={key} data={team.opposition} title={`Total scores for ${team.team}`} />
        ));

        return (
            <div>
                <h1>Overview</h1>
                <ScoreOverTime data={yearlyScoresArray} />
                {totalsGraphs}
                <AveragesTable data={averages} setFocus={() => {}} focused={false} />
            </div>
        );
    }
}

export default Overview;
