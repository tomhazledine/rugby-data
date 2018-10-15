import React from "react";
import * as d3 from "d3";

const Candlestick = ({ scale, data, dimensions }) => {
    return (
        <g transform={`translate(${dimensions.x},${dimensions.y})`}>
            <rect
                className="candlestick__background"
                y="0"
                x="0"
                height={dimensions.height}
                width={dimensions.width}
                fill="rgba(0, 0, 255, 0.1)"
            />
            <line
                className="candlestick__total"
                y1={dimensions.height / 2}
                x1={scale(data.min)}
                y2={dimensions.height / 2}
                x2={scale(data.max)}
                stroke="black"
                strokeWidth="1px"
                strokeLinecap="butt"
            />
            <rect
                className="candlestick__main"
                y="0"
                x={scale(data.quartile25)}
                height={dimensions.height}
                width={scale(data.quartile75) - scale(data.quartile25)}
                fill="black"
            />
            <line
                className="candlestick__total"
                y1={0}
                x1={scale(data.median)}
                y2={dimensions.height}
                x2={scale(data.median)}
                stroke="red"
                strokeWidth="2px"
                strokeLinecap="butt"
            />
        </g>
        // </svg>
    );
};

export default Candlestick;
