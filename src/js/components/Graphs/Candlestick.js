import React from "react";
import * as d3 from "d3";

const Candlestick = ({ domain, data, dimensions, position }) => {
    const xScale = d3.scaleLinear().range([0, dimensions.width]);

    const _domain = d3.extent(domain);
    xScale.domain(_domain);

    // console.log(data);

    return (
        // <svg
        //     className="candlesick__wrapper"
        //     width={dimensions.width}
        //     height={dimensions.height}
        //     style={{ display: "block" }}
        // >
        <g transform={`translate(${position.x},${position.y})`}>
            <rect
                className="candlestick__background"
                y="0"
                x="0"
                height={dimensions.height}
                width={dimensions.width}
                fill="rgba(0, 0, 255, 0.2)"
            />
            <line
                className="candlestick__total"
                y1={dimensions.height / 2}
                x1={xScale(data.min)}
                y2={dimensions.height / 2}
                x2={xScale(data.max)}
                stroke="black"
                strokeWidth="1px"
                strokeLinecap="butt"
            />
            <rect
                className="candlestick__main"
                y="0"
                x={xScale(data.quartile25)}
                height={dimensions.height}
                width={xScale(data.quartile75) - xScale(data.quartile25)}
                fill="black"
            />
            <line
                className="candlestick__total"
                y1={0}
                x1={xScale(data.median)}
                y2={dimensions.height}
                x2={xScale(data.median)}
                stroke="red"
                strokeWidth="2px"
                strokeLinecap="butt"
            />
        </g>
        // </svg>
    );
};

export default Candlestick;
