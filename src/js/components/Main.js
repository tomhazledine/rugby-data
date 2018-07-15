import React from 'react';

import YearsOverview from './YearsOverview';
import sixNationsData from '../data/sixnations';
import teamStats, { sortResults } from '../tools/dataWranglers';

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [],
            page: { years: true, overview: true }
        };
    }

    componentWillMount() {
        const targetYears = sixNationsData.slice(0, 2);

        const years = targetYears.map((year, key) => {
            let oldPoints = parseInt(year.year) < 2017 ? true : false;
            let stats = teamStats(year.teams, year.matches, oldPoints);
            let results = sortResults(stats);
            return {
                year: year.year,
                results
            };
        });
        this.setState({ data: years });
    }

    render() {
        return (
            <main>
                <h1>Six Nations Statistics</h1>
                {this.state.page.years ? <YearsOverview years={this.state.data} /> : null}
            </main>
        );
    }
}

export default Main;
