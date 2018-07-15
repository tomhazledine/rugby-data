import React from 'react';

import teamStats, { sortResults } from '../tools/dataWranglers';

class Overview extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    getTotalScore(team, results, key) {
        return results.reduce((acc, year) => {
            let teamResults = year.results.find(results => results.team == team);
            return (acc += teamResults[key]);
        }, 0);
    }

    render() {
        // console.log(this.props.years);

        const eng = this.getTotalScore('ENG', this.props.years, 'score');

        console.log(eng);

        // console.log(years);

        return (
            <div>
                <h1>Overview</h1>
            </div>
        );
    }
}

export default Overview;
