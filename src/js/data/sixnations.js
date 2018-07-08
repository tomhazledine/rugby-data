const sixNationsData = [
    {
        year: 2018,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20180203',
                kick_off: '14:15 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 1,
                    score: 34,
                    tries: 4,
                    conversions: 4,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 7,
                    tries: 1,
                    conversions: 1,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20180203',
                kick_off: '17:45 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 1,
                    score: 13,
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 15,
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 1
                }
            },
            {
                date: '20180204',
                kick_off: '16:00 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 15,
                    tries: 2,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 1,
                    score: 46,
                    tries: 7,
                    conversions: 4,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20180210',
                kick_off: '14:15 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 1,
                    score: 56,
                    tries: 8,
                    conversions: 8,
                    penalties: 0,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 19,
                    tries: 3,
                    conversions: 2,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20180210',
                kick_off: '16:45 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 12,
                    tries: 2,
                    conversions: 1,
                    penalties: 0,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 1,
                    score: 6,
                    tries: 0,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20180211',
                kick_off: '15:00 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 32,
                    tries: 2,
                    conversions: 2,
                    penalties: 6,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 1,
                    score: 26,
                    tries: 2,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20180223',
                kick_off: '21:00 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 34,
                    tries: 3,
                    conversions: 2,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 17,
                    tries: 2,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20180224',
                kick_off: '14:15 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 1,
                    score: 37,
                    tries: 5,
                    conversions: 3,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 27,
                    tries: 3,
                    conversions: 3,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20180224',
                kick_off: '16:45 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 25,
                    tries: 3,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20180310',
                kick_off: '14:15 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 1,
                    score: 28,
                    tries: 4,
                    conversions: 4,
                    penalties: 0,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 8,
                    tries: 1,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20180310',
                kick_off: '17:45 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 1,
                    score: 22,
                    tries: 1,
                    conversions: 1,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 1,
                    score: 16,
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20180311',
                kick_off: '15:00 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 1,
                    score: 38,
                    tries: 5,
                    conversions: 5,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 14,
                    tries: 2,
                    conversions: 2,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20180317',
                kick_off: '13:30 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 1,
                    score: 27,
                    tries: 3,
                    conversions: 3,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 1,
                    score: 29,
                    tries: 4,
                    conversions: 3,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20180317',
                kick_off: '14:45 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 25,
                    tries: 3,
                    conversions: 0,
                    penalties: 0,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 24,
                    tries: 3,
                    conversions: 3,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20180317',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 14,
                    tries: 1,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 1,
                    score: 13,
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 1
                }
            }
        ]
    },
    {
        year: 2017,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20170204',
                kick_off: '14:25 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 27,
                    tries: 3,
                    conversions: 3,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 1,
                    score: 22,
                    tries: 3,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20170204',
                kick_off: '16:50 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 19,
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 1,
                    score: 16,
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20170205',
                kick_off: '15:00 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 7,
                    tries: 1,
                    conversions: 1,
                    penalties: 0,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 33,
                    tries: 3,
                    conversions: 3,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20170211',
                kick_off: '15:25 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 1,
                    score: 63,
                    tries: 9,
                    conversions: 9,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20170211',
                kick_off: '16:50 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 1,
                    score: 16,
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 21,
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20170212',
                kick_off: '16:00 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 22,
                    tries: 1,
                    conversions: 1,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 1,
                    score: 16,
                    tries: 2,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20170225',
                kick_off: '14:25 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 29,
                    tries: 2,
                    conversions: 2,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20170225',
                kick_off: '16:50 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 19,
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 1
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20170226',
                kick_off: '15:00 CET (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 1,
                    score: 36,
                    tries: 6,
                    conversions: 3,
                    penalties: 0,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 15,
                    tries: 2,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20170310',
                kick_off: '20:05 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 22,
                    tries: 3,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20170311',
                kick_off: '14:30 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 1,
                    score: 40,
                    tries: 4,
                    conversions: 4,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20170311',
                kick_off: '16:00 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 1,
                    score: 61,
                    tries: 7,
                    conversions: 7,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 21,
                    tries: 3,
                    conversions: 3,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20170318',
                kick_off: '12:30 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 1,
                    score: 29,
                    tries: 4,
                    conversions: 3,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 0,
                    tries: 0,
                    conversions: 0,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20170318',
                kick_off: '15:45 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 20,
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 1,
                    score: 18,
                    tries: 0,
                    conversions: 0,
                    penalties: 6,
                    drop: 0
                }
            },
            {
                date: '20170318',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 13,
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 1,
                    score: 9,
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            }
        ]
    },
    {
        year: 2016,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20160206',
                kick_off: '15:25 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    tries: 3,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 21,
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 1
                }
            },
            {
                date: '20160206',
                kick_off: '16:50 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 15,
                    tries: 2,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20160207',
                kick_off: '15:00 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'draw',
                    bonus_points: 0,
                    score: 16,
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'draw',
                    bonus_points: 0,
                    score: 16,
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20160213',
                kick_off: '15:25 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 10,
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20160213',
                kick_off: '16:50 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 27,
                    tries: 3,
                    conversions: 3,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 23,
                    tries: 2,
                    conversions: 2,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20160214',
                kick_off: '15:00 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 40,
                    tries: 5,
                    conversions: 3,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20160226',
                kick_off: '20:05 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 19,
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20160227',
                kick_off: '15:25 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 20,
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 36,
                    tries: 3,
                    conversions: 3,
                    penalties: 5,
                    drop: 0
                }
            },
            {
                date: '20160227',
                kick_off: '16:50 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 21,
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20160312',
                kick_off: '13:30 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 58,
                    tries: 9,
                    conversions: 5,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 15,
                    tries: 2,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20160312',
                kick_off: '16:00 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 25,
                    tries: 1,
                    conversions: 1,
                    penalties: 6,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 21,
                    tries: 3,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20160313',
                kick_off: '15:00 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 29,
                    tries: 3,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20160319',
                kick_off: '14:30 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 67,
                    tries: 9,
                    conversions: 8,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 14,
                    tries: 2,
                    conversions: 2,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20160319',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 35,
                    tries: 4,
                    conversions: 3,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 25,
                    tries: 3,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20160319',
                kick_off: '21:00 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 21,
                    tries: 0,
                    conversions: 0,
                    penalties: 7,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 31,
                    tries: 3,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                }
            }
        ]
    }
];

export default sixNationsData;
