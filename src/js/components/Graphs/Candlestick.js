import React from "react";
import * as d3 from "d3";

const Candlestick = ({ scale, data, dimensions, negative = false }) => {
    const color = negative ? "red" : "green";
    return (
        <g transform={`translate(${dimensions.x},${dimensions.y})`}>
            {/* <rect
                className="candlestick__background"
                y="0"
                x="0"
                height={dimensions.height}
                width={dimensions.width}
                fill="rgba(0, 0, 255, 0.1)"
            /> */}
            <line
                className="candlestick__zero"
                y1={0}
                x1={scale(0)}
                y2={dimensions.height}
                x2={scale(0)}
                stroke={"black"}
                strokeWidth="1px"
                strokeLinecap="butt"
                stroke-dasharray="2 1"
            />
            <line
                className="candlestick__total"
                y1={dimensions.height / 2}
                x1={scale(data.min)}
                y2={dimensions.height / 2}
                x2={scale(data.max)}
                stroke={color}
                strokeWidth="1px"
                strokeLinecap="butt"
            />
            <rect
                className="candlestick__main"
                y={dimensions.height * 0.25}
                x={scale(Math.min(data.quartile25, data.quartile75))}
                height={dimensions.height * 0.5}
                width={
                    scale(Math.max(data.quartile25, data.quartile75)) -
                    scale(Math.min(data.quartile25, data.quartile75))
                }
                fill={color}
            />
            <line
                className="candlestick__median"
                y1={0}
                x1={scale(data.median)}
                y2={dimensions.height}
                x2={scale(data.median)}
                stroke={"black"}
                strokeWidth="2px"
                strokeLinecap="butt"
            />
        </g>
        // </svg>
    );
};

export default Candlestick;
