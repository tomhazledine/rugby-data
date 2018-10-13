import React, { Component } from "react";
import * as d3 from "d3";

const layout = {
    width: 400,
    height: 300
};

class ScoreOverTime extends Component {
    constructor() {
        super();

        // let teams = Object.keys(this.props.data);
        this.xScale = d3.scaleLinear().range([0, layout.width]);
        this.yScale = d3.scaleLinear().range([layout.height, 0]);
        // this.yScale = d3.scaleBand().range(teams);
        this.lineGenerator = d3.line();
        this.teams = ["ENG", "FRA", "IRE", "ITA", "SCO", "WAL"];
        this.teamColours = {
            ENG: "#ff4136",
            FRA: "#0074d9",
            IRE: "#2ecc40",
            ITA: "#7fdbff",
            SCO: "#001f3f",
            WAL: "#ff4136"
        };
    }

    render() {
        const data = this.props.data;

        const timeDomain = d3.extent(data, d => parseInt(d.year));

        const scoreMaxes = this.teams.map(team =>
            d3.max(data, d => parseInt(d[team]))
        );
        const scoreMax = d3.max(scoreMaxes);

        this.xScale.domain(timeDomain);
        this.yScale.domain([0, scoreMax]);

        const lines = this.teams.map((team, key) => {
            this.lineGenerator.x(d => this.xScale(parseInt(d.year)));
            this.lineGenerator.y(d => this.yScale(d[team]));
            let line = this.lineGenerator(data);

            return (
                <path
                    key={key}
                    d={line}
                    fill="none"
                    stroke={this.teamColours[team]}
                />
            );
        });

        return (
            <div className="table__wrapper">
                <div className="table__title-wrapper">
                    <h2 className="table__title">Average results</h2>
                </div>
                <svg width={layout.width} height={layout.height}>
                    {lines}
                </svg>
            </div>
        );
    }
}

export default ScoreOverTime;
