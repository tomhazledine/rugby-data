import React from 'react';

import Overview from './Overview';
import YearsOverview from './YearsOverview';
import sixNationsData from '../data/sixnations';
import teamStats, { sortResults } from '../tools/dataWranglers';

class Main extends React.Component {
    constructor() {
        super();

        this.setView = this.setView.bind(this);

        this.state = {
            data: [],
            page: { years: 0, overview: 1 }
        };
    }

    setView(view) {
        if (view == 'overview') {
            this.setState({ page: { years: 0, overview: 1 } });
        }
        if (view == 'years') {
            this.setState({ page: { years: 1, overview: 0 } });
        }
    }

    componentWillMount() {
        // const targetYears = sixNationsData.slice(0, 2);

        const years = sixNationsData.map(year => {
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
                <div className="switcher">
                    <button
                        className={`button switcher__button ${
                            this.state.page.overview ? 'active' : ''
                        }`}
                        onClick={() => this.setView('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`button switcher__button ${
                            this.state.page.years ? 'active' : ''
                        }`}
                        onClick={() => this.setView('years')}
                    >
                        Years
                    </button>
                </div>
                {this.state.page.overview ? <Overview years={this.state.data} /> : null}
                {this.state.page.years ? <YearsOverview years={this.state.data} /> : null}
            </main>
        );
    }
}

export default Main;
