import React from 'react';

import teamStats, { sortResults } from '../tools/dataWranglers';
import { ordinal, teamNames } from '../tools/helpers';

import Table from './Table';

import sixNationsData from '../data/sixnations';

class Overview extends React.Component {
    render() {
        const columnsToShowInTable = [
            {
                slug: 'key',
                title: '#',
                tooltip: 'Finishing position',
                filter: ordinal,
                numbers: false,
                class: false
            },
            {
                slug: 'team',
                title: 'Team',
                tooltip: false,
                filter: teamNames,
                numbers: false,
                class: false
            },
            {
                slug: 'wins',
                title: 'W',
                tooltip: 'Wins',
                filter: false,
                numbers: true,
                class: false
            },
            {
                slug: 'losses',
                title: 'L',
                tooltip: 'Losses',
                filter: false,
                numbers: true,
                class: false
            },
            {
                slug: 'draws',
                title: 'D',
                tooltip: 'Draws',
                filter: false,
                numbers: true,
                class: false
            },
            {
                slug: 'score',
                title: '+',
                tooltip: 'Points scored',
                filter: false,
                numbers: true,
                class: false
            },
            {
                slug: 'score_against',
                title: '-',
                tooltip: 'Points conceded',
                filter: false,
                numbers: true,
                class: false
            },
            {
                slug: 'score_difference',
                title: 'Diff',
                tooltip: 'Points difference',
                filter: false,
                numbers: true,
                class: false
            },
            {
                slug: 'tries',
                title: 'T',
                tooltip: 'Tries',
                filter: false,
                numbers: true,
                class: false
            },
            {
                slug: 'conversions',
                title: 'C',
                tooltip: 'Conversions',
                filter: false,
                numbers: true,
                class: false
            },
            {
                slug: 'penalties',
                title: 'P',
                tooltip: 'Penalties',
                filter: false,
                numbers: true,
                class: false
            },
            {
                slug: 'drops',
                title: 'D',
                tooltip: 'Drop goals',
                filter: false,
                numbers: true,
                class: false
            },
            {
                slug: 'points',
                title: 'Points',
                tooltip: 'Championship points',
                filter: false,
                numbers: true,
                class: false
            }
        ];

        const years = sixNationsData.map((year, key) => {
            let stats = teamStats(year.teams, year.matches);
            let results = sortResults(stats);
            return (
                <div key={key} className="year">
                    <div className="table__wrapper">
                        <div className="table__title-wrapper">
                            <h2 class="table__title">Final championship table: {year.year}</h2>
                        </div>
                        <Table columns={columnsToShowInTable} data={results} />
                    </div>
                </div>
            );
        });
        return <div>{years}</div>;
    }
}

export default Overview;
