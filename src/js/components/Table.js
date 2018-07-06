import React from 'react';

import { ordinal, teamNames } from '../tools/helpers';

const Table = ({ columns, data }) => {
    let headers = (
        <colgroup>
            <col style={{ width: '50px', minWidth: '50px' }} />
            <col style={{ width: '100px', minWidth: '100px' }} />
            {columns.map((col, key) => (
                <col key={key} style={{ width: '50px', minWidth: '50px' }} />
            ))}
        </colgroup>
    );
    let titles = (
        <tr>
            <th
                className=""
                style={{ textAlign: 'left', fontWeight: 'bold' }}
                title={'Finishing position'}
            >
                #
            </th>
            <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                Team
            </th>
            {columns.map((col, key) => {
                let tooltip = col.tooltip ? col.tooltip : '';
                return (
                    <th
                        key={key}
                        className=""
                        style={{ textAlign: 'left', fontWeight: 'bold' }}
                        title={tooltip}
                    >
                        {col.title}
                    </th>
                );
            })}
        </tr>
    );
    let rows = data.map((item, key) => {
        return (
            <tr key={key} className="">
                <td className="">{ordinal(key + 1)}</td>
                <td className="">{teamNames(item.team)}</td>
                {columns.map((col, key) => (
                    <td key={key} className="">
                        {item[col.slug]}
                    </td>
                ))}
            </tr>
        );
    });
    return (
        <table className="">
            {headers}
            <thead className="rc-table-thead">{titles}</thead>
            <tbody className="rc-table-tbody">{rows}</tbody>
        </table>
    );
};

export default Table;
