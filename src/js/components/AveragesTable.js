import React from 'react';

import Table from './Table';
import { ordinal, teamNames } from '../tools/helpers';

class AveragesTable extends React.Component {
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
                    slug: 'score',
                    title: 'Scored per match',
                    tooltip: 'Points scored',
                    filter: false,
                    numbers: true,
                    class: false,
                    min_max: true,
                    min_max_reverse: false
                },
                {
                    slug: 'score_against',
                    title: 'Conceded per match',
                    tooltip: 'Points conceded',
                    filter: false,
                    numbers: true,
                    class: false,
                    min_max: true,
                    min_max_reverse: true
                },
                {
                    slug: 'score_difference',
                    title: 'Points difference per match',
                    tooltip: 'Points difference',
                    filter: false,
                    numbers: true,
                    class: false,
                    min_max: true,
                    min_max_reverse: false
                }
            ]
        };
    }

    render() {
        return (
            <div className="table__wrapper">
                <div className="table__title-wrapper">
                    <h2 className="table__title">Average results</h2>
                </div>
                <Table
                    columns={this.state.columns}
                    data={this.props.data}
                    setFocus={() => {}}
                    focused={false}
                />
            </div>
        );
    }
}

export default AveragesTable;
