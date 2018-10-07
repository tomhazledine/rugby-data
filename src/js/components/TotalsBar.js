import React, { Component } from 'react';
// import * as d3 from 'd3';
import { remapDomain } from '../tools/dataWranglers';

class TotalsBar extends Component {
    render() {
        console.log(this.props.data);
        const rowKeys = Object.keys(this.props.data);
        const maxValue = Math.max(rowKeys.map(rowKey => this.props.data[rowKey]));

        const rows = rowKeys.map((rowKey, key) => {
            const rowData = this.props.data[rowKey];
            const widthPercentage = remapDomain(rowData, 0, 800, 0, 100);
            return (
                <div className={'graph__row'} key={key}>
                    <span className="graph__row-title">
                        <span className="graph__row-title--main">{rowKey}</span>
                    </span>
                    <span className="graph__row-display-wrapper">
                        <span
                            className="graph__row-display"
                            style={{ width: `${widthPercentage}%` }}
                        >
                            <span className="graph__row-value">{rowData}</span>
                        </span>
                    </span>
                </div>
            );
        });

        return (
            <div className={`graph__bar--horizontal graph__bar`}>
                <h3 className="table__title">{this.props.title}</h3>
                <div className="graph__body">{rows}</div>
            </div>
        );
    }
}

export default TotalsBar;
