import React from 'react';

import teamStats, { sortResults } from '../tools/dataWranglers';

import ResultsTable from './ResultsTable';

import sixNationsData from '../data/sixnations';

class Overview extends React.Component {
    render() {
        const years = sixNationsData.map((year, key) => {
            let oldPoints = parseInt(year.year) < 2017 ? true : false;
            let stats = teamStats(year.teams, year.matches, oldPoints);
            let results = sortResults(stats);
            return (
                <div key={key} className="year">
                    <ResultsTable year={year.year} data={results} />
                </div>
            );
        });
        return <div>{years}</div>;
    }
}

export default Overview;
