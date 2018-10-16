import React from "react";
import * as d3 from "d3";

import Candlestick from "./Candlestick";

class CandlestickGraph extends React.Component {
    constructor() {
        super();
        this.rowDimensions = {
            width: 400,
            height: 16,
            padding: [0, 10, 10, 10]
        };
        this.xScale = d3
            .scaleLinear()
            .range([0, this.rowDimensions.width])
            .domain(d3.extent([-100, 100]));
        this.xAxis = d3
            .axisBottom()
            .scale(this.xScale)
            .ticks(4);
    }

    componentDidMount() {
        d3.select(this.refs.xAxis).call(this.xAxis);
    }

    render() {
        return (
            <div key={this.props.results}>
                <svg
                    className="candlesick__wrapper"
                    width={
                        this.rowDimensions.width +
                        this.rowDimensions.padding[3] +
                        this.rowDimensions.padding[1]
                    }
                    height={
                        3 * this.rowDimensions.height +
                        this.rowDimensions.padding[0] +
                        this.rowDimensions.padding[2]
                    }
                    style={{ display: "block" }}
                >
                    <line
                        className="candlestick__zero"
                        y1={0}
                        x1={scale(0)}
                        y2={dimensions.height}
                        x2={scale(0)}
                        stroke={"black"}
                        strokeWidth="1px"
                        strokeLinecap="butt"
                        strokeDasharray="2 1"
                    />
                    <Candlestick
                        scale={this.xScale}
                        dimensions={{
                            x: this.rowDimensions.padding[3],
                            y: this.rowDimensions.padding[0],
                            width: this.rowDimensions.width,
                            height: this.rowDimensions.height
                        }}
                        data={this.props.results.diffs.win}
                    />
                    <Candlestick
                        scale={this.xScale}
                        dimensions={{
                            x: this.rowDimensions.padding[3],
                            y:
                                this.rowDimensions.padding[0] +
                                this.rowDimensions.height,
                            width: this.rowDimensions.width,
                            height: this.rowDimensions.height
                        }}
                        data={this.props.results.diffs.loss}
                        negative={true}
                    />
                    <g>
                        <g
                            ref="xAxis"
                            className="axis axis--x frequecy__axis frequecy__axis--x"
                            transform={`translate(${
                                this.rowDimensions.padding[3]
                            },${2 * this.rowDimensions.height +
                                this.rowDimensions.padding[0]})`}
                        />
                    </g>
                </svg>
            </div>
        );
    }
}

export default CandlestickGraph;
