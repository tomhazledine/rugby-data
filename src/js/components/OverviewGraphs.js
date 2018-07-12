import React from 'react';

import GraphHorizontalBar from './GraphHorizontalBar';

const OverviewGraphs = ({ year, data }) => {
    return (
        <div className="graphs__wrapper">
            <h2>Overview graphs for {year}</h2>
            <div className="graphs__inner">
                <GraphHorizontalBar
                    data={data}
                    value="tries"
                    title="Total tries scored"
                    sort={'tries'}
                />
                <GraphHorizontalBar data={data} value="score" title="Total score" sort={'score'} />
                <GraphHorizontalBar
                    data={data}
                    value="score_against"
                    title="Total score against"
                    sort={'score_against'}
                    modifier={'negative'}
                />
            </div>
        </div>
    );
};

export default OverviewGraphs;
