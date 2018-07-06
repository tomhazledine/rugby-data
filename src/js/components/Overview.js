import React from 'react';

import teamStats, { sortResults } from '../tools/dataWranglers';

import Table from './Table';

import sixNationsData from '../data/sixnations';

class Overview extends React.Component {
    render() {
        const columnsToShowInTable = [
            {
                slug: 'wins',
                title: 'W',
                tooltip: 'Wins'
            },
            {
                slug: 'losses',
                title: 'L',
                tooltip: 'Losses'
            },
            {
                slug: 'draws',
                title: 'D',
                tooltip: 'Draws'
            },
            {
                slug: 'score',
                title: 'For',
                tooltip: false
            },
            {
                slug: 'score_against',
                title: 'Against',
                tooltip: false
            },
            {
                slug: 'score_difference',
                title: 'Diff',
                tooltip: 'Points difference'
            },
            {
                slug: 'tries',
                title: 'T',
                tooltip: 'Tries'
            },
            {
                slug: 'conversions',
                title: 'C',
                tooltip: 'Conversions'
            },
            {
                slug: 'penalties',
                title: 'P',
                tooltip: 'Penalties'
            },
            {
                slug: 'drops',
                title: 'D',
                tooltip: 'Drop goals'
            }
        ];

        const years = sixNationsData.map((year, key) => {
            let stats = teamStats(year.teams, year.matches);
            let results = sortResults(stats);
            return (
                <div key={key} className="year">
                    <h2>{year.year}</h2>
                    <Table columns={columnsToShowInTable} data={results} />
                    <hr />
                </div>
            );
        });
        return <div>{years}</div>;
    }
}

export default Overview;
