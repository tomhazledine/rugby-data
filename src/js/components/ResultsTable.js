import React from 'react';

import Table from './Table';
import { ordinal, teamNames } from '../tools/helpers';

class ResultsTable extends React.Component {
    constructor() {
        super();

        this.state = {
            columns: [
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
            ]
        };
    }

    // componentWillMount() {
    //     let localData = localStorage.getItem(`table_${this.props.year}`);
    //     if (!localData) {
    //         localStorage.setItem(`table_${this.props.year}`, this.props.data);
    //         localData = this.props.data;
    //     }
    //     this.setState({ data: localData });
    // }

    render() {
        return (
            <div className="table__wrapper">
                <div className="table__title-wrapper">
                    <h2 className="table__title">Final championship table: {this.props.year}</h2>
                </div>
                <Table
                    columns={this.state.columns}
                    data={this.props.data}
                    setFocus={this.props.setFocus}
                    focused={this.props.focused}
                />
            </div>
        );
    }
}

export default ResultsTable;
