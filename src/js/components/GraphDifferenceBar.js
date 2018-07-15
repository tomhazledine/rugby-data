import React from 'react';

import { remapDomain } from '../tools/dataWranglers';

class GraphDifferenceBar extends React.Component {
    constructor() {
        super();

        this.sortByValue = this.sortByValue.bind(this);
        this.defaultSort = this.defaultSort.bind(this);
        this.toggleFocus = this.toggleFocus.bind(this);

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
    toggleFocus(team) {
        if (this.props.focused === team) {
            this.props.setFocus(false);
        } else {
            this.props.setFocus(team);
        }
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
        const minValue = Math.min(...valuesArray);
        const zeroValue = Math.abs(minValue);
        const maxWidth = maxValue + zeroValue;
        const zeroPercentage = remapDomain(zeroValue, 0, maxWidth, 0, 100);

        const rows = data.map((row, key) => {
            const negativeValue = row[this.props.value] < 0 ? true : false;
            const negativeClass = negativeValue ? 'negative' : '';

            const normalized = Math.abs(row[this.props.value]);

            const widthPercentage = remapDomain(normalized, 0, maxWidth, 0, 100);
            const leftMarginPercentage = negativeValue
                ? zeroPercentage - widthPercentage
                : zeroPercentage;

            let focusedClass =
                this.props.focused === row.team ? 'graph__row--focused' : 'graph__row';

            return (
                <div
                    className={`graph__row graph__row--${negativeClass} ${focusedClass}`}
                    key={key}
                    title={`${row.team}: ${row[this.props.value]}`}
                    onClick={() => this.toggleFocus(row.team)}
                >
                    <span className="graph__row-display-wrapper">
                        <span className="graph__row-title">
                            <span className="graph__row-title--main">{row.team}</span>
                        </span>
                        <span
                            className="graph__row-display"
                            style={{
                                width: `${widthPercentage}%`,
                                marginLeft: `${leftMarginPercentage}%`
                            }}
                        >
                            <span className="graph__row-value">{row[this.props.value]}</span>
                        </span>
                    </span>
                </div>
            );
        });

        let sortActive__value = this.state.sort ? 'active' : '';
        let sortActive__default = this.state.sort ? '' : 'active';

        let modifierClass = this.props.modifier ? this.props.modifier : '';

        return (
            <div className={`graph__bar--horizontal graph__bar--${modifierClass}`}>
                <h3 className="table__title">{this.props.title}</h3>
                <div className="graph__body">
                    <span className="graph__axis--y" style={{ left: `${zeroPercentage}%` }} />
                    {rows}
                </div>
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

export default GraphDifferenceBar;
