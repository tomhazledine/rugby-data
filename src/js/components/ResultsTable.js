import React from 'react';

import Table from './Table';
import { ordinal, teamNames } from '../tools/helpers';

const ResultsTable = ({ year, data }) => {
    const columnsToShowInTable = [
        {
            slug: 'key',
            title: '#',
            tooltip: 'Finishing position',
            filter: ordinal,
            numbers: false,
            class: false,
            min_max: false,
            min_max_reverse: false
        },
        {
            slug: 'team',
            title: 'Team',
            tooltip: false,
            filter: teamNames,
            numbers: false,
            class: false,
            min_max: false,
            min_max_reverse: false
        },
        {
            slug: 'wins',
            title: 'W',
            tooltip: 'Wins',
            filter: false,
            numbers: true,
            class: false,
            min_max: false,
            min_max_reverse: false
        },
        {
            slug: 'losses',
            title: 'L',
            tooltip: 'Losses',
            filter: false,
            numbers: true,
            class: false,
            min_max: false,
            min_max_reverse: true
        },
        {
            slug: 'draws',
            title: 'D',
            tooltip: 'Draws',
            filter: false,
            numbers: true,
            class: false,
            min_max: false,
            min_max_reverse: true
        },
        {
            slug: 'score',
            title: '+',
            tooltip: 'Points scored',
            filter: false,
            numbers: true,
            class: false,
            min_max: true,
            min_max_reverse: false
        },
        {
            slug: 'score_against',
            title: '-',
            tooltip: 'Points conceded',
            filter: false,
            numbers: true,
            class: false,
            min_max: true,
            min_max_reverse: true
        },
        {
            slug: 'score_difference',
            title: 'Diff',
            tooltip: 'Points difference',
            filter: false,
            numbers: true,
            class: false,
            min_max: true,
            min_max_reverse: false
        },
        {
            slug: 'tries',
            title: 'T',
            tooltip: 'Tries',
            filter: false,
            numbers: true,
            class: false,
            min_max: true,
            min_max_reverse: false
        },
        {
            slug: 'conversions',
            title: 'C',
            tooltip: 'Conversions',
            filter: false,
            numbers: true,
            class: false,
            min_max: true,
            min_max_reverse: false
        },
        {
            slug: 'penalties',
            title: 'P',
            tooltip: 'Penalties',
            filter: false,
            numbers: true,
            class: false,
            min_max: true,
            min_max_reverse: false
        },
        {
            slug: 'drops',
            title: 'D',
            tooltip: 'Drop goals',
            filter: false,
            numbers: true,
            class: false,
            min_max: true,
            min_max_reverse: false
        },
        {
            slug: 'points',
            title: 'Points',
            tooltip: 'Championship points',
            filter: false,
            numbers: true,
            class: false,
            min_max: false,
            min_max_reverse: false
        }
    ];
    return (
        <div className="table__wrapper">
            <div className="table__title-wrapper">
                <h2 className="table__title">Final championship table: {year}</h2>
            </div>
            <Table columns={columnsToShowInTable} data={data} />
        </div>
    );
};

export default ResultsTable;
