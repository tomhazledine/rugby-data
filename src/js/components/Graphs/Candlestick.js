import React from "react";
import * as d3 from "d3";
import { spread } from "../../tools/helpers-data";

const Candlestick = ({ scale, data, dimensions, negative = false }) => {
    console.log(data);
    const ranges = spread(data);
    const color = negative ? "red" : "green";
    return (
        <g transform={`translate(${dimensions.x},${dimensions.y})`}>
            <line
                className="candlestick__total"
                y1={dimensions.height / 2}
                x1={scale(ranges.min)}
                y2={dimensions.height / 2}
                x2={scale(ranges.max)}
                stroke={color}
                strokeWidth="1px"
                strokeLinecap="butt"
            />
            <rect
                className="candlestick__main"
                y={dimensions.height * 0.25}
                x={scale(Math.min(ranges.quartile25, ranges.quartile75))}
                height={dimensions.height * 0.5}
                width={
                    scale(Math.max(ranges.quartile25, ranges.quartile75)) -
                    scale(Math.min(ranges.quartile25, ranges.quartile75))
                }
                fill={color}
            />
            <line
                className="candlestick__median"
                y1={0}
                x1={scale(ranges.median)}
                y2={dimensions.height}
                x2={scale(ranges.median)}
                stroke={"black"}
                strokeWidth="2px"
                strokeLinecap="butt"
            />
        </g>
        // </svg>
    );
};

export default Candlestick;
