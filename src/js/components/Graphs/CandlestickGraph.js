import React from "react";
import * as d3 from "d3";
import { css } from "react-emotion";

import colours from "../../styles/colours";
import * as type from "../../styles/typefaces";
import Candlestick from "./Candlestick";

class CandlestickGraph extends React.Component {
    constructor() {
        super();
        this.xScale = d3
            .scaleLinear()
            .range([0, 400])
            .domain(d3.extent([-100, 100]));
        this.xAxis = d3
            .axisBottom()
            .scale(this.xScale)
            .ticks(4);
    }

    componentWillMount() {
        this.xScale
            .range([0, this.props.dimensions.width])
            .domain(d3.extent(this.props.domain));
    }

    componentDidMount() {
        d3.select(this.refs.xAxis).call(this.xAxis);
    }

    render() {
        const axisStyles = css`
            text {
                fill: ${colours.black};
            }
            font-size: 0.6em;
            ${type.utility};
        `;
        const candlesticks = this.props.data.map((item, key) => {
            return (
                <Candlestick
                    key={`candlestick_${key}`}
                    data={item.data}
                    label={item.title}
                    scale={this.xScale}
                    dimensions={{
                        x: 0,
                        y: key * this.props.dimensions.height,
                        width: this.props.dimensions.width,
                        height: this.props.dimensions.height
                    }}
                />
            );
        });
        return (
            <div key={this.props.results}>
                <svg
                    className="candlesick__wrapper"
                    width={
                        this.props.dimensions.width +
                        this.props.dimensions.padding[3] +
                        this.props.dimensions.padding[1]
                    }
                    height={
                        (1 + this.props.data.length) *
                            this.props.dimensions.height +
                        this.props.dimensions.padding[0] +
                        this.props.dimensions.padding[2]
                    }
                    style={{ display: "block" }}
                >
                    <g
                        transform={`translate(${
                            this.props.dimensions.padding[3]
                        },${this.props.dimensions.padding[0]})`}
                    >
                        <line
                            className="candlestick__zero"
                            y1={0}
                            x1={this.xScale(0)}
                            y2={
                                this.props.data.length *
                                this.props.dimensions.height
                            }
                            x2={this.xScale(0)}
                            stroke={"black"}
                            strokeWidth="1px"
                            strokeLinecap="butt"
                            strokeDasharray="2 1"
                        />
                        {candlesticks}
                    </g>
                    <g>
                        <g
                            ref="xAxis"
                            css={axisStyles}
                            className="axis axis--x frequecy__axis frequecy__axis--x"
                            transform={`translate(${
                                this.props.dimensions.padding[3]
                            },${this.props.data.length *
                                this.props.dimensions.height +
                                this.props.dimensions.padding[0]})`}
                        />
                    </g>
                </svg>
            </div>
        );
    }
}

export default CandlestickGraph;
