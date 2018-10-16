import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import * as d3 from "d3";

import Candlestick from "../src/js/components/Graphs/Candlestick";

const mockData = [
    9,
    23,
    4,
    56,
    3,
    22,
    45,
    2,
    34,
    6,
    6,
    23,
    32,
    42,
    52,
    65,
    78,
    43,
    75,
    26,
    45
];

const mockDimensions = {
    width: 400,
    rowHeight: 16,
    padding: [0, 0, 0, 0]
};

storiesOf("Candlestick", module)
    .add("solo", () => {
        const xScale = d3
            .scaleLinear()
            .range([0, mockDimensions.width])
            .domain(d3.extent([0, 100]));
        return (
            <svg width={mockDimensions.width} height={mockDimensions.rowHeight}>
                <Candlestick
                    scale={xScale}
                    dimensions={{
                        x: 0,
                        y: 0,
                        width: mockDimensions.width,
                        height: mockDimensions.rowHeight
                    }}
                    data={mockData}
                />
            </svg>
        );
    })
    .add("solo (negative)", () => {
        const xScale = d3
            .scaleLinear()
            .range([0, mockDimensions.width])
            .domain(d3.extent([0, 100]));
        return (
            <svg width={mockDimensions.width} height={mockDimensions.rowHeight}>
                <Candlestick
                    scale={xScale}
                    dimensions={{
                        x: 0,
                        y: 0,
                        width: mockDimensions.width,
                        height: mockDimensions.rowHeight
                    }}
                    data={mockData}
                    negative={true}
                />
            </svg>
        );
    });
