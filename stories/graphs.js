import React from "react";
import { storiesOf } from "@storybook/react";
import * as d3 from "d3";

import Candlestick from "../src/js/components/Graphs/Candlestick";
import CandlestickGraph from "../src/js/components/Graphs/CandlestickGraph";
import Wrapper from "../src/js/components/generic/Wrapper";

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
        <Wrapper>
            <h2>Graph</h2>
            <CandlestickGraph
                dimensions={{
                    width: 400,
                    height: 16,
                    padding: [10, 10, 10, 100]
                }}
                data={[
                    {
                        title: "all wins",
                        data: mockData(100, 0)
                    },
                    {
                        title: "home wins",
                        data: mockData(10, 0)
                    },
                    {
                        title: "away wins",
                        data: mockData(70, 0)
                    },
                    {
                        title: "all wins",
                        data: mockData(100, 0, 10)
                    },
                    {
                        title: "all losses",
                        data: mockData(100, -100)
                    },
                    {
                        title: "home losses",
                        data: mockData(70, -70)
                    },
                    {
                        title: "away losses",
                        data: mockData(100, -100)
                    },
                    {
                        title: "all losses",
                        data: mockData(10, -10, 5)
                    }
                ]}
                domain={[-100, 100]}
            />
        </Wrapper>
    ));
