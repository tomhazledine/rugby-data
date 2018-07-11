import React from 'react';

import Table from './Table';
import { remapDomain } from '../tools/dataWranglers';
import { ordinal } from '../tools/helpers';

class GraphHorizontalBar extends React.Component {
    constructor() {
        super();

        this.sortByValue = this.sortByValue.bind(this);
        this.defaultSort = this.defaultSort.bind(this);

        this.state = {
            sort: false
        };
    }

    sortByValue() {
        this.setState({ sort: true });
    }
    defaultSort() {
        this.setState({ sort: false });
    }

    render() {
        const sortByAlternateKey = (results, sortKey, reverse = false) =>
            results.sort((a, b) => {
                if (a[sortKey] < b[sortKey]) {
                    return reverse ? -1 : 1;
                }
                if (a[sortKey] > b[sortKey]) {
                    return reverse ? 1 : -1;
                }
                return 0;
            });

        let data = this.props.data;

        if (this.state.sort) {
            data = sortByAlternateKey(data, this.props.sort);
        } else {
            data = sortByAlternateKey(data, 'position', true);
        }

        const valuesArray = this.props.data.map(team => team[this.props.value]);
        const maxValue = Math.max(...valuesArray);
        const GLOBAL_MAX_VALUE = 30;

        const rows = data.map((row, key) => {
            const widthPercentage = remapDomain(row[this.props.value], 0, maxValue, 0, 100);
            return (
                <div className="graph__row" key={key}>
                    <span className="graph__row-title">
                        <span className="graph__row-title--main">{row.team}</span>
                        <span className="graph__row-title--extra">{row.position}</span>
                    </span>
                    <span className="graph__row-display-wrapper">
                        <span
                            className="graph__row-display"
                            style={{ width: `${widthPercentage}%` }}
                        >
                            <span className="graph__row-value">{row[this.props.value]}</span>
                        </span>
                    </span>
                </div>
            );
        });

        let sortActive__value = this.state.sort ? 'active' : '';
        let sortActive__default = this.state.sort ? '' : 'active';

        return (
            <div className="graph__bar--horizontal">
                <h3 className="table__title">{this.props.title}</h3>
                <div className="graph__body">{rows}</div>
                <div className="graph__sorting">
                    Sort by:
                    <button
                        key={this.sort}
                        className={`graph__sort-button ${sortActive__value}`}
                        onClick={() => this.sortByValue()}
                    >
                        value
                    </button>
                    <button
                        key={this.sort}
                        className={`graph__sort-button ${sortActive__default}`}
                        onClick={() => this.defaultSort()}
                    >
                        finishing position
                    </button>
                </div>
            </div>
        );
    }
}

export default GraphHorizontalBar;
