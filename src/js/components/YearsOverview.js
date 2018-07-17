import React from 'react';

import ResultsTable from './ResultsTable';
import OverviewGraphs from './OverviewGraphs';

import sixNationsData from '../data/sixnations';

class YearsOverview extends React.Component {
    constructor() {
        super();

        this.setFocus = this.setFocus.bind(this);

        this.state = {
            focused: false,
            tab: { table: true, graphs: true }
        };
    }

    setFocus(team) {
        // console.log(team);
        if (team) {
            this.setState({ focused: team });
        } else {
            this.setState({ focused: false });
        }
    }

    render() {
        console.log('years:', this.props.years);

        const years = this.props.years.map((year, key) => {
            return (
                <div key={key} className="year">
                    {this.state.tab.table ? (
                        <ResultsTable
                            year={year.year}
                            data={year.results}
                            setFocus={this.setFocus}
                            focused={this.state.focused}
                            // key={this.state.focused}
                        />
                    ) : null}
                    {this.state.tab.graphs ? (
                        <OverviewGraphs
                            year={year.year}
                            data={year.results}
                            setFocus={this.setFocus}
                            focused={this.state.focused}
                        />
                    ) : null}
                </div>
            );
        });
        return <div>{years}</div>;
    }
}

export default YearsOverview;
