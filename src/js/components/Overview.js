import React from 'react';

import teamStats, { sortResults } from '../tools/dataWranglers';
// import { ordinal, teamNames } from '../tools/helpers';

import Table from './Table';

import sixNationsData from '../data/sixnations';

// let allStats_2018 = teamStats(sixNationsData.Y_2018.teams, sixNationsData.Y_2018.matches);
// let finalResults_2018 = sortResults(allStats_2018);
// console.log('2018', finalResults_2018);

// let allStats_2017 = teamStats(sixNationsData.Y_2017.teams, sixNationsData.Y_2017.matches);
// let finalResults_2017 = sortResults(allStats_2017);
// console.log('2017', finalResults_2017);

class Overview extends React.Component {
    render() {
        const years = sixNationsData.map((year, key) => {
            let stats = teamStats(year.teams, year.matches);
            let results = sortResults(stats);
            let output = <Table data={results} />;
            console.log(results);
            return (
                <div key={key} className="year">
                    <h2>{year.year}</h2>
                    <ul>{output}</ul>
                    <hr />
                </div>
            );
        });
        return <div>{years}</div>;
    }
}

export default Overview;
