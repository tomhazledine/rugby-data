import React from 'react';

import { getColumnsMinMax, getMappedValue, decile } from '../tools/dataWranglers';

const Table = ({ columns, data, setFocus, focused }) => {
    const toggleFocus = team => {
        if (focused === team) {
            setFocus(false);
        } else {
            setFocus(team);
        }
    };

    let columnsMinMax = getColumnsMinMax(columns, data);

    let headers = (
        <colgroup>
            {columns.map((col, key) => (
                <col key={key} style={{ width: '50px', minWidth: '50px' }} />
            ))}
        </colgroup>
    );
    let titles = (
        <tr>
            {columns.map((col, key) => {
                let tooltip = col.tooltip ? col.tooltip : '';
                let classes = col.numbers ? 'number' : '';
                return (
                    <th key={key} className={classes} title={tooltip}>
                        {col.title}
                    </th>
                );
            })}
        </tr>
    );
    let rows = data.map((item, i) => {
        // console.log(`focused ${focused}`);
        let focusedClass = focused === item.team ? 'row--focused' : 'row';

        return (
            <tr key={i} className={focusedClass} onClick={() => toggleFocus(item.team)}>
                {columns.map((col, j) => {
                    let data = col.slug === 'key' ? i + 1 : item[col.slug].toString();
                    if (col.filter) {
                        data = col.filter(data);
                    }
                    let tooltip = col.tooltip
                        ? typeof data === 'string' ? `${col.tooltip}: ${data}` : col.tooltip
                        : '';
                    let classes = col.numbers ? 'number' : '';

                    if (col.min_max) {
                        let mappedValue = getMappedValue(
                            col.slug,
                            data,
                            columnsMinMax,
                            col.min_max_reverse
                        );
                        classes = `${classes} decile--${decile(mappedValue)}`;
                    }
                    return (
                        <td key={j} className={classes} title={tooltip}>
                            {data}
                        </td>
                    );
                })}
            </tr>
        );
    });
    return (
        <table className="table--results">
            {headers}
            <thead className="">{titles}</thead>
            <tbody className="">{rows}</tbody>
        </table>
    );
};

export default Table;
