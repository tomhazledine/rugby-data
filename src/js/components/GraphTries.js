import React from 'react';

import Table from './Table';
import { remapDomain } from '../tools/dataWranglers';

const GraphTries = ({ data }) => {
    const sortByTries = results =>
        results.sort((a, b) => {
            if (a.tries < b.tries) {
                return 1;
            }
            if (a.tries > b.tries) {
                return -1;
            }
            return 0;
        });

    const justTries = data.map(team => ({ team: team.team, tries: team.tries }));
    const sortedTries = sortByTries(justTries);

    const triesArray = sortedTries.map(team => team.tries);

    const maxTries = Math.max(...triesArray);
    const GLOBAL_MAX_TRIES = 30;

    const rows = sortedTries.map((row, key) => {
        const tryPercentage = remapDomain(row.tries, 0, GLOBAL_MAX_TRIES, 0, 100);
        return (
            <div className="graph__row" key={key}>
                <span className="graph__row-title">{row.team}</span>
                <span className="graph__row-display-wrapper">
                    <span className="graph__row-display" style={{ width: `${tryPercentage}%` }}>
                        <span className="graph__row-value">{row.tries}</span>
                    </span>
                </span>
            </div>
        );
    });

    return (
        <div className="graph--tries">
            <h3 className="table__title">Total tries scored:</h3>
            <div className="graph__body">{rows}</div>
        </div>
    );
};

export default GraphTries;
