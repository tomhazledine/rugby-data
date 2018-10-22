import React from "react";
import { css } from "react-emotion";
import { transparentize } from "polished";

import { spread, sortNumbers } from "../../tools/helpers-data";
import colours from "../../styles/colours";
import { rgba } from "polished";
import * as type from "../../styles/typefaces";

const Candlestick = ({
    label = false,
    scale,
    data,
    dimensions,
    negative = false
}) => {
    const sortedData = sortNumbers(data);
    const ranges = spread(sortedData);
    const normalizedQuartiles = [
        Math.min(ranges.quartile25, ranges.quartile75),
        Math.max(ranges.quartile25, ranges.quartile75)
    ];
    if (Math.min(...sortedData) < 0 && Math.max(...sortedData) < 0) {
        negative = true;
    }
    const colour = negative ? colours.puce : colours.lime__dark;

    const styles = css`
        .candlestick__overlay {
            opacity: 0;
            transition: 0.2s;
        }
        &:hover .candlestick__overlay {
            opacity: 1;
        }
    `;

    const labelStyles = css`
        fill: ${colours.black};
        font-size: 0.8em;
        ${type.utility};
    `;

    const lines = sortedData.map((point, key) => (
        <line
            key={`${point}_${key}`}
            y1={0}
            x1={scale(point)}
            y2={dimensions.height}
            x2={scale(point)}
            stroke={colour}
            strokeWidth="1px"
        />
    ));

    return (
        <g>
            <text
                className="candlestick__label"
                transform={`translate(${dimensions.x - 5},${dimensions.y +
                    dimensions.height / 2})`}
                alignmentBaseline="middle"
                textAnchor="end"
                css={labelStyles}
            >
                {label}
            </text>
            <g
                css={styles}
                transform={`translate(${dimensions.x},${dimensions.y})`}
                width={dimensions.width}
                height={dimensions.height}
            >
                <rect
                    className="candlestick__background"
                    y={0}
                    x={0}
                    height={dimensions.height}
                    width={dimensions.width}
                    fill={rgba(0, 0, 0, 0)}
                />
                <g>
                    <line
                        className="candlestick__total"
                        y1={dimensions.height / 2}
                        x1={scale(ranges.min)}
                        y2={dimensions.height / 2}
                        x2={scale(ranges.max)}
                        stroke={colour}
                        strokeWidth="1px"
                    />
                    <rect
                        className="candlestick__main"
                        y={dimensions.height * 0.25}
                        x={scale(normalizedQuartiles[0])}
                        height={dimensions.height * 0.5}
                        width={
                            scale(normalizedQuartiles[1]) -
                            scale(normalizedQuartiles[0])
                        }
                        fill={colour}
                    />
                    <line
                        className="candlestick__median"
                        y1={0}
                        x1={scale(ranges.median)}
                        y2={dimensions.height}
                        x2={scale(ranges.median)}
                        stroke={"black"}
                        strokeWidth="2px"
                    />
                </g>
                <g className="candlestick__overlay">
                    <rect
                        className="candlestick__overlay-background"
                        y={0}
                        x={0}
                        height={dimensions.height}
                        width={dimensions.width}
                        fill={"rgba(255,255,255,0.8)"}
                    />
                    <rect
                        className="candlestick__overlay-background"
                        y={0}
                        x={0}
                        height={dimensions.height}
                        width={dimensions.width}
                        fill={transparentize(0.9, colour)}
                    />
                    {lines}
                </g>
            </g>
        </g>
    );
};

export default Candlestick;
