import React from 'react';

import teamStats, { sortResults } from '../tools/dataWranglers';

import sixNationsData from '../data/sixnations';

let allStats_2018 = teamStats(sixNationsData.Y_2018.teams, sixNationsData.Y_2018.matches);
let finalResults_2018 = sortResults(allStats_2018);
console.log('2018', finalResults_2018);

let allStats_2017 = teamStats(sixNationsData.Y_2017.teams, sixNationsData.Y_2017.matches);
let finalResults_2017 = sortResults(allStats_2017);
console.log('2017', finalResults_2017);

class Overview extends React.Component {
    render() {
        return <div />;
    }
}

export default Overview;
