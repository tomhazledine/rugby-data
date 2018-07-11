import React from 'react';

import Table from './Table';
import { remapDomain } from '../tools/dataWranglers';

const GraphScore = ({ data }) => {
    const sortByScore = results =>
        results.sort((a, b) => {
            if (a.score < b.score) {
                return 1;
            }
            if (a.score > b.score) {
                return -1;
            }
            return 0;
        });

    const justScores = data.map(team => ({ team: team.team, score: team.score }));
    const sortedScores = sortByScore(justScores);

    const scoreArray = sortedScores.map(team => team.score);

    const maxScore = Math.max(...scoreArray);
    const GLOBAL_MAX_SCORE = 160;

    const rows = sortedScores.map((row, key) => {
        const scorePercentage = remapDomain(row.score, 0, GLOBAL_MAX_SCORE, 0, 100);
        return (
            <div className="graph__row" key={key}>
                <span className="graph__row-title">{row.team}</span>
                <span className="graph__row-display-wrapper">
                    <span className="graph__row-display" style={{ width: `${scorePercentage}%` }}>
                        <span className="graph__row-value">{row.score}</span>
                    </span>
                </span>
            </div>
        );
    });

    return (
        <div className="graph--tries">
            <h3 className="table__title">Total score:</h3>
            <div className="graph__body">{rows}</div>
        </div>
    );
};

export default GraphScore;
