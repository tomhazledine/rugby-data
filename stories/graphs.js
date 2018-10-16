import React from "react";
import { storiesOf } from "@storybook/react";
import * as d3 from "d3";

import Candlestick from "../src/js/components/Graphs/Candlestick";
import CandlestickGraph from "../src/js/components/Graphs/CandlestickGraph";

const mockData = (max = 100, offset = 0, length = 20) =>
    Array.from(
        { length: length },
        () => Math.floor(Math.random() * max) + offset
    );

const mockDimensions = {
    width: 400,
    rowHeight: 16,
    padding: [0, 0, 0, 0]
};

const xScale = d3
    .scaleLinear()
    .range([0, mockDimensions.width])
    .domain(d3.extent([0, 100]));

storiesOf("Candlestick", module)
    .add("solo", () => (
        <svg width={mockDimensions.width} height={mockDimensions.rowHeight}>
            <Candlestick
                scale={xScale}
                dimensions={{
                    x: 0,
                    y: 0,
                    width: mockDimensions.width,
                    height: mockDimensions.rowHeight
                }}
                data={mockData()}
            />
        </svg>
    ))
    .add("solo (negative)", () => (
        <svg width={mockDimensions.width} height={mockDimensions.rowHeight}>
            <Candlestick
                scale={xScale}
                dimensions={{
                    x: 0,
                    y: 0,
                    width: mockDimensions.width,
                    height: mockDimensions.rowHeight
                }}
                data={mockData()}
                negative={true}
            />
        </svg>
    ))
    .add("full graph", () => (
        <CandlestickGraph
            dimensions={{
                width: 400,
                height: 16,
                padding: [10, 10, 10, 10]
            }}
            data={[
                mockData(100, 0),
                mockData(10, 0),
                mockData(70, 0),
                mockData(100, 0, 10),
                mockData(100, -100),
                mockData(70, -70),
                mockData(100, -100),
                mockData(10, -10, 5),
                [10, 25, 50, 52, 80]
            ]}
            domain={[-100, 100]}
        />
    ));
