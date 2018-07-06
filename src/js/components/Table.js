import React from 'react';

import { ordinal, teamNames } from '../tools/helpers';

const Table = ({ data }) => {
    let rows = data.map((item, key) => {
        return (
            <tr key={key} className="">
                <td className="">{ordinal(key + 1)}</td>
                <td className="">{teamNames(item.team)}</td>
                <td className="">{item.wins}</td>
                <td className="">{item.losses}</td>
                <td className="">{item.draws}</td>
                <td className="">{item.score}</td>
                <td className="">{item.score_against}</td>
                <td className="">{item.score_difference}</td>
                <td className="">{item.tries}</td>
                <td className="">{item.conversions}</td>
                <td className="">{item.penalties}</td>
                <td className="">{item.drops}</td>
                <td className="">{item.points}</td>
            </tr>
        );
    });
    return (
        <table className="">
            <colgroup>
                <col style={{ width: '50px', minWidth: '50px' }} />
                <col style={{ width: '100px', minWidth: '100px' }} />
                <col style={{ width: '50px', minWidth: '50px' }} />
                <col style={{ width: '50px', minWidth: '50px' }} />
                <col style={{ width: '50px', minWidth: '50px' }} />
                <col style={{ width: '50px', minWidth: '50px' }} />
                <col style={{ width: '50px', minWidth: '50px' }} />
                <col style={{ width: '50px', minWidth: '50px' }} />
                <col style={{ width: '50px', minWidth: '50px' }} />
                <col style={{ width: '50px', minWidth: '50px' }} />
                <col style={{ width: '50px', minWidth: '50px' }} />
                <col style={{ width: '50px', minWidth: '50px' }} />
                <col style={{ width: '50px', minWidth: '50px' }} />
            </colgroup>
            <thead className="rc-table-thead">
                <tr>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        #
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        Team
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        W
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        L
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        D
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        For
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        Against
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        Diff
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        T
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        C
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        P
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        D
                    </th>
                    <th className="" style={{ textAlign: 'left', fontWeight: 'bold' }}>
                        Points
                    </th>
                </tr>
            </thead>
            <tbody className="rc-table-tbody">{rows}</tbody>
        </table>
    );
};

export default Table;
