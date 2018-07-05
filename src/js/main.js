import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';

import '../scss/main.scss';
import './icons';

import sixNationsData from './data/sixnations';

import teamStats, { sortResults } from './tools/dataWranglers';

let allStats_2018 = teamStats(sixNationsData.Y_2018.teams, sixNationsData.Y_2018.matches);
let finalResults_2018 = sortResults(allStats_2018);
console.log('2018', finalResults_2018);

let allStats_2017 = teamStats(sixNationsData.Y_2017.teams, sixNationsData.Y_2017.matches);
let finalResults_2017 = sortResults(allStats_2017);
console.log('2017', finalResults_2017);

ReactDOM.render(<Main />, document.getElementById('root'));
