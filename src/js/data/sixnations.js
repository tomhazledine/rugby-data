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
    },
    {
        year: 2015,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20150206',
                kick_off: '20:05 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Webb 7' c Con: Halfpenny (1/1) 8'Pen: Halfpenny (2/3) 1', 23'Drop: Biggar (1/1) 40'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 1
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 21,
                    scoring:
                        "Try: Watson 14' m Joseph 43' cCon: Ford (1/2) 45'Pen: Ford (3/4) 31', 61', 78'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20150207',
                kick_off: '15:30 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 3,
                    scoring: "Pen: Haimona (1/1) 40' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Murray 64' c O'Donnell 66' cCon: Keatley (1/1) 65'Madigan (1/1) 67'Pen: Keatley (4/4) 6', 20', 35', 57'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20150207',
                kick_off: '18:00 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 15,
                    scoring: "Pen: Lopez (5/6) 2', 16', 37', 49', 78' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 8,
                    scoring: "Try: Fife 39' m Pen: Laidlaw (1/1) 13'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20150214',
                kick_off: '14:30 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 47,
                    scoring:
                        "Try: B. Vunipola 23' m Joseph (2) 26' c, 60' cB. Youngs 54' cCipriani 63' cEaster 68' mCon: Ford (3/4) 28', 55', 62'Cipriani (1/2) 63'Pen: Ford (3/3) 20', 45', 57'\n",
                    tries: 6,
                    conversions: 4,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 17,
                    scoring: "Try: Parisse 3' m Morisi (2) 49' m, 78' cCon: Allan (1/1) 79'\n",
                    tries: 3,
                    conversions: 1,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20150214',
                kick_off: '17:00 WET (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 18,
                    scoring: "Pen: Sexton (5/5) 13', 18', 32', 38', 67' Madigan (1/1) 50'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 6,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 11,
                    scoring: "Try: Taofifénua 70' m Pen: Lopez (2/3) 16', 35'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20150215',
                kick_off: '15:00 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: Hogg 9' c Welsh 79' cCon: Laidlaw (1/1) 10'Russell (1/1) 79'Pen: Laidlaw (3/3) 17', 44', 54'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Webb 33' c Davies 63' cCon: Halfpenny (2/2) 34', 64'Pen: Halfpenny (4/5) 6', 19', 31', 48'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20150228',
                kick_off: '14:30 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 19,
                    scoring:
                        "Try: Bennett 7' c Con: Laidlaw (1/1) 8'Pen: Laidlaw (4/4) 1', 15', 26', 66'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'win',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: Furno 9' m Venditti 36' cPenalty try 79' cCon: Haimona (1/2) 37'Allan (1/1) 80'Pen: Haimona (1/2) 17'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20150228',
                kick_off: '18:00 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring: "Try: Dulin 67' c Con: Lopez (1/1) 68'Pen: Lopez (2/4) 17', 48'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 20,
                    scoring: "Try: Biggar 59' m Pen: Halfpenny (5/5) 7', 28', 51', 64', 73'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 5,
                    drop: 0
                }
            },
            {
                date: '20150301',
                kick_off: '15:00 WET (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 19,
                    scoring:
                        "Try: Henshaw 52' c Con: Sexton (1/1) 52'Pen: Sexton (4/5) 1', 8', 29', 47'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: Ford (2/3) 58', 67' Drop: Ford (1/1) 11'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 2,
                    drop: 1
                }
            },
            {
                date: '20150314',
                kick_off: '14:30 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: S. Williams 61' m Pen: Halfpenny (5/5) 2', 7', 11', 13', 74'Drop: Biggar (1/1) 33'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 5,
                    drop: 1
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Penalty try 68' c Con: Sexton (1/1) 69'Pen: Sexton (3/4) 17', 29', 36'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20150314',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 25,
                    scoring:
                        "Try: Joseph 4' c Ford 43' cNowell 75' mCon: Ford (2/3) 5', 43'Pen: Ford (2/3) 25', 50'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Bennett 21' c Con: Laidlaw (1/1) 22'Pen: Laidlaw (2/2) 29', 38'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20150315',
                kick_off: '16:00 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 0,
                    scoring: '\n',
                    tries: 0,
                    conversions: 0,
                    penalties: 0,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 29,
                    scoring:
                        "Try: Maestri 45' c Bastareaud 80' cCon: Plisson (2/2) 46', 80'Pen: Lopez (2/2) 28', 34'Spedding (1/2) 40'Plisson (2/2) 41', 57'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 5,
                    drop: 0
                }
            },
            {
                date: '20150321',
                kick_off: '13:30 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: Venditti 24' c Sarto 79' cCon: Orquera (2/2) 26', 80'Pen: Haimona (1/1) 1'Orquera (1/1) 10'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 61,
                    scoring:
                        "Try: Roberts 18' m L. Williams 47' cNorth (3) 49' c, 54' c, 59' cWebb 66' mWarburton 68' cS. Williams 73' cCon: Biggar (6/7) 47', 50', 55', 59', 69', 73'Pen: Halfpenny (2/2) 7', 12'Biggar (1/1) 40'\n",
                    tries: 8,
                    conversions: 6,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20150321',
                kick_off: '14:30 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring: "Try: Russell 29' c Con: Laidlaw (1/1) 30'Pen: Laidlaw (1/1) 17'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 40,
                    scoring:
                        "Try: O'Connell 4' c O'Brien (2) 24' c, 71' cPayne 49' cCon: Sexton (3/3) 5', 25', 50'Madigan (1/1) 72'Pen: Sexton (4/6) 9', 33', 44', 61'\n",
                    tries: 4,
                    conversions: 4,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20150321',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 55,
                    scoring:
                        "Try: B. Youngs (2) 1' c, 35' c Watson 30' cFord 46' cNowell (2) 53' c, 74' cB. Vunipola 63' cCon: Ford (7/7) 3', 30', 36', 46', 54', 63', 75'Pen: Ford (2/3) 26', 40'\n",
                    tries: 7,
                    conversions: 7,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 35,
                    scoring:
                        "Try: Tillous-Borde 13' m Nakaitaci 17' cMermoz 42' cDebaty 59' mKayser 65' mCon: Plisson (2/3) 18', 42'Kockott (0/2)Pen: Plisson (1/3) 10'Kockott (1/1) 51'\n",
                    tries: 5,
                    conversions: 3,
                    penalties: 2,
                    drop: 0
                }
            }
        ]
    },
    {
        year: 2014,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20140201',
                kick_off: '14:30 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: Cuthbert 3' c S. Williams 37' cCon: Halfpenny (2/2) 4', 39'Pen: Halfpenny (3/4) 28', 66', 73'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 15,
                    scoring:
                        "Try: Campagnaro (2) 42' m, 68' c Con: Allan (1/2) 69'Pen: Allan (1/2) 13'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20140201',
                kick_off: '18:00 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Huget (2) 1' m, 17' m Fickou 76' cCon: Doussain (0/2)Machenaud (1/1) 78'Pen: Doussain (2/2) 10', 22'Machenaud (1/1) 69'\n",
                    tries: 3,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 24,
                    scoring:
                        "Try: Brown 36' m Burrell 47' cCon: Farrell (1/2) 48'Pen: Farrell (2/2) 5', 42'Goode (1/1) 72'Drop: Care (1/1) 56'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 1
                }
            },
            {
                date: '20140202',
                kick_off: '15:00 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 28,
                    scoring:
                        "Try: Trimble 40' m Heaslip 46' cR. Kearney 70' cCon: Sexton (2/3) 47', 72'Pen: Sexton (3/3) 13', 22', 56'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 6,
                    scoring: "Pen: Laidlaw (2/3) 18', 42' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20140208',
                kick_off: '14:30 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Henry 31' c Jackson 78' cCon: Sexton (1/1) 33'Jackson (1/1) 79'Pen: Sexton (4/5) 7', 16', 45', 55'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 3,
                    scoring: "Pen: Halfpenny (1/1) 55' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20140208',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 0,
                    scoring: 'Pen: Laidlaw (0/2) \n',
                    tries: 0,
                    conversions: 0,
                    penalties: 0,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: Burrell 14' c Brown 58' cCon: Farrell (2/2) 15', 59'Pen: Farrell (1/4) 28'Drop: Care (1/1) 5'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 1,
                    drop: 1
                }
            },
            {
                date: '20140209',
                kick_off: '16:00 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 30,
                    scoring:
                        "Try: Picamoles 42' c Fofana 45' cBonneval 51' cCon: Doussain (3/3) 43', 46', 52'Pen: Doussain (3/5) 26', 33', 38'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring:
                        "Try: Iannone 76' c Con: Orquera (1/1) 77'Pen: Allan (1/2) 28'Garcia (0/2)\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20140221',
                kick_off: '20:00 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 27,
                    scoring:
                        "Try: North 5' m Warburton 63' cCon: Halfpenny (1/2) 63'Pen: Halfpenny (5/6) 2', 9', 19', 34', 40'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 6,
                    scoring: "Pen: Doussain (1/2) 16' Plisson (1/2) 31'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20140221',
                kick_off: '14:30 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: Allan 39' c Furno 70' cCon: Allan (1/1) 40'Orquera (1/1) 72'Pen: Allan (2/3) 13', 31'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 21,
                    scoring:
                        "Try: Dunbar (2) 53' m, 67' c Con: Laidlaw (0/1)Weir (1/1) 67'Pen: Laidlaw (2/2) 22', 45'Drop: Weir (1/1) 79'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 1
                }
            },
            {
                date: '20140222',
                kick_off: '16:00 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 13,
                    scoring: "Try: Care 56' c Con: Farrell (1/1) 56'Pen: Farrell (2/3) 24', 53'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring: "Try: R. Kearney 41' c Con: Sexton (1/1) 42'Pen: Sexton (1/1) 49'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20140308',
                kick_off: '14:30 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 46,
                    scoring:
                        "Try: Sexton (2) 6' c, 59' m Trimble 37' cHealy 52' mCronin 68' cMcFadden 77' cMcGrath 80' mCon: Sexton (2/4) 6', 39'Jackson (2/3) 69', 77'Pen: Sexton (1/1) 31'\n",
                    tries: 7,
                    conversions: 4,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 7,
                    scoring: "Try: Sarto 24' c Con: Orquera (1/1) 25'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20140308',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 17,
                    scoring:
                        "Try: Hogg 12' c Seymour 22' cCon: Laidlaw (2/2) 13', 22'Pen: Laidlaw (0/1)Weir (1/2) 61'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 19,
                    scoring:
                        "Try: Huget 45' c Con: Machenaud (1/1) 46'Pen: Machenaud (3/4) 1', 10', 16'Doussain (1/1) 78'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20140309',
                kick_off: '15:00 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 29,
                    scoring:
                        "Try: Care 4' c Burrell 33' cCon: Farrell (2/2) 5', 34'Pen: Farrell (5/5) 18', 26', 45', 54', 58'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    scoring: "Pen: Halfpenny (6/6) 8', 22', 30', 37', 40', 56' \n",
                    tries: 9,
                    conversions: 9,
                    penalties: 6,
                    drop: 0
                }
            },
            {
                date: '20140315',
                kick_off: '13:30 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 11,
                    scoring: "Try: Sarto 68' m Con: Allan (0/1)Pen: Orquera (2/2) 6', 22'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 52,
                    scoring:
                        "Try: Brown (2) 12' c, 37' c Farrell 31' cNowell 52' cVunipola 60' cTuilagi 67' cRobshaw 80+1' cCon: Farrell (7/7) 13', 32', 39', 53', 61', 67', 80+2'Pen: Farrell (1/1) 10'\n",
                    tries: 7,
                    conversions: 7,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20140315',
                kick_off: '14:45 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 51,
                    scoring:
                        "Try: L. Williams 15' c North (2) 33' c, 41' mRoberts (2) 38' c, 47' cFaletau 52' mR. Williams 73' cCon: Biggar (4/6) 15', 23', 39', 48'Hook (1/1) 74'Pen: Biggar (2/2) 8', 23'\n",
                    tries: 7,
                    conversions: 5,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 3,
                    scoring: "Pen: Laidlaw (1/3) 3' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20140315',
                kick_off: '18:00 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: Dulin 30' c Szarzewski 62' cCon: Machenaud (2/2) 31', 63'Pen: Machenaud (2/2) 1', 14'Doussain (0/1)\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: Sexton (2) 20' m, 46' c Trimble 25' cCon: Sexton (2/3) 26', 47'Pen: Sexton (1/2) 52'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                }
            }
        ]
    },
    {
        year: 2013,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20130202',
                kick_off: '13:30 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: Cuthbert 47' c Halfpenny 58' mMitchell 75' cCon: Halfpenny (2/3) 49', 76'Pen: Halfpenny (1/1) 33'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 30,
                    scoring:
                        "Try: Zebo 10' c Healy 23' cO'Driscoll 42' cCon: Sexton (3/3) 11', 25', 43'Pen: Sexton (3/3) 20', 28', 40'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20130202',
                kick_off: '16:00 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 38,
                    scoring:
                        "Try: Ashton 30' c Twelvetrees 42' cParling 53' mCare 80' cCon: Farrell (3/4) 31', 43', 80'Pen: Farrell (4/4) 2', 13', 18', 37'\n",
                    tries: 4,
                    conversions: 3,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    scoring:
                        "Try: Maitland 9' m Hogg 70' cCon: Laidlaw (1/2) 70'Pen: Laidlaw (2/2) 19', 39'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20130203',
                kick_off: '16:00 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: Parisse 4' c Castrogiovanni 56' cCon: Orquera (2/2) 5', 58'Pen: Orquera (1/1) 17'Drop: Orquera 14'Burton 68'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 1,
                    drop: 2
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    scoring:
                        "Try: Picamoles 11' m Fall 33' cCon: Michalak (1/2) 33'Pen: Michalak (2/3) 27', 49'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20130209',
                kick_off: '14:30 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 34,
                    scoring:
                        "Try: Visser 28' c Scott 42' cHogg 47' cLamont 68' cCon: Laidlaw (4/4) 30', 44', 48', 69'Pen: Laidlaw (2/2) 15', 24'\n",
                    tries: 4,
                    conversions: 4,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring: "Try: Zanni 73' c Con: Burton (1/1) 74'Pen: Orquera (1/2) 39'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20130209',
                kick_off: '18:00 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 6,
                    scoring: "Pen: Michalak (2/2) 14', 52' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: North 71' c Con: Halfpenny (1/1) 73'Pen: Halfpenny (3/3) 17', 42', 74'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20130210',
                kick_off: '15:00 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 6,
                    scoring: "Pen: O'Gara (2/3) 44', 57' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: Farrell (4/6) 2', 28', 63', 65' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20130223',
                kick_off: '15:30 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: Burton (3/3) 9', 29', 49' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: null,
                    drop: 3
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Davies 44' c Cuthbert 61' cCon: Halfpenny (2/2) 45', 61'Pen: Halfpenny (4/5) 7', 15', 19', 52'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20130223',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: Tuilagi 54' m Pen: Farrell (4/5) 1', 27', 33', 47'Flood (2/2) 72', 76'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 6,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Fofana 29' c Con: Parra (1/1) 31'Pen: Parra (1/3) 4'Michalak (1/1) 56'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20130224',
                kick_off: '14:00 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: Laidlaw (4/4) 52', 59', 63', 73' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 8,
                    scoring: "Try: Gilroy 43' m Pen: Jackson (1/3) 35'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20130309',
                kick_off: '14:30 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    scoring: "Pen: Laidlaw (6/8) 6', 12', 26', 37', 48', 60' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 6,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 28,
                    scoring:
                        "Try: Hibbard 23' c Con: Halfpenny (1/1) 23'Pen: Halfpenny (7/10) 4', 40', 46', 55', 58', 67', 71'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 7,
                    drop: 0
                }
            },
            {
                date: '20130309',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'draw',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Heaslip 10' c Con: Jackson (1/1) 11'Pen: Jackson (2/4) 29', 32'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'draw',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Picamoles 73' c Con: Michalak (1/1) 74'Pen: Michalak (1/3) 26'Parra (1/2) 53'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20130310',
                kick_off: '15:00 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 18,
                    scoring: "Pen: Flood (6/6) 3', 15', 37', 40', 43', 61' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 6,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 11,
                    scoring: "Try: McLean 48' m Pen: Orquera (2/3) 17', 47'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20130316',
                kick_off: '15:30 CET (UTC+1)',
                home: {
                    team: 'ITA',
                    result: 'win',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: Venditti 48' c Con: Orquera (1/1) 49'Pen: Orquera (4/5) 13', 21', 69', 80'Garcia (1/2) 35'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 15,
                    scoring: "Pen: Jackson (5/6) 5', 40', 52', 57', 63' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 5,
                    drop: 0
                }
            },
            {
                date: '20130316',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 30,
                    scoring:
                        "Try: Cuthbert (2) 56' m, 65' c Con: Biggar (1/1) 66'Pen: Halfpenny (4/4) 10', 17', 23', 51'Biggar (1/1) 70'Drop: Biggar 64'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 5,
                    drop: 1
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 3,
                    scoring: "Pen: Farrell (1/3) 20' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20130316',
                kick_off: '21:00 CET (UTC+1)',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: Fofana 65' c Médard 70' cCon: Michalak (1/1) 66'Machenaud (1/1) 71'Pen: Michalak (3/3) 44', 49', 53'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Visser 75' c Con: Jackson (1/1) 75'Pen: Laidlaw (3/3) 8', 14', 58'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            }
        ]
    },
    {
        year: 2012,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20120204',
                kick_off: '15:30 CET (UTC+01)',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 30,
                    scoring:
                        "Try: Rougerie 20' c Malzieu 34' mClerc 53' cFofana 71' mCon: Yachvili (2/3) 21', 54'Pen: Yachvili (2/3) 11', 51'\n",
                    tries: 4,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: Burton (2/3) 29', 46' Botes (1/1) 60'Drop: Burton (1/2) 17'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 1
                }
            },
            {
                date: '20120204',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 6,
                    scoring: "Pen: Parks (2/2) 25', 32' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Hodgson 40' c Con: Farrell (1/1) 41'Pen: Farrell (2/4) 22', 74'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20120205',
                kick_off: '15:00 IST (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 21,
                    scoring:
                        "Try: Best 36' c Bowe 67' mCon: Sexton (1/2) 38'Pen: Sexton (3/5) 3', 43', 59'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: J. Davies (2) 13' m, 54' c North 75' mCon: Halfpenny (1/2) 55'Pen: Halfpenny (2/2) 53', 79'\n",
                    tries: 3,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20120211',
                kick_off: '17:00 CET (UTC+01)',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 15,
                    scoring:
                        "Try: Venditti 37' m Benvenuti 40' cCon: Burton (1/2) 40'Pen: Burton (1/1) 47'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 19,
                    scoring:
                        "Try: Hodgson 50' c Con: Farrell (1/1) 50'Pen: Farrell (4/4) 26', 35', 54', 65'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                }
            },
            // {
            //     "date": "20120211",
            //     "kick_off": "21:00 CET (UTC+01)",
            //     "home": {
            //         "team": "FRA",
            //         "result": "loss",
            //         "bonus_points": 0,
            //         "score": 0,
            //         "scoring": "\n",
            //         "tries": null,
            //         "conversions": null,
            //         "penalties": null,
            //         "drop": 0
            //     },
            //     "away": {
            //         "team": "IRE",
            //         "result": "win",
            //         "bonus_points": 0,
            //         "score": null,
            //         "scoring": "\n",
            //         "tries": null,
            //         "conversions": null,
            //         "penalties": null,
            //         "drop": 0
            //     }
            // },
            {
                date: '20120212',
                kick_off: '15:00 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 27,
                    scoring:
                        "Try: Cuthbert 41' c Halfpenny (2) 50' c, 55' cCon: Halfpenny (3/3) 43', 52', 56'Pen: Halfpenny (2/3) 29', 45'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Laidlaw 63' c Con: Laidlaw (1/1) 64'Pen: Laidlaw (2/3) 22', 48'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20120225',
                kick_off: '13:30 IST (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 42,
                    scoring:
                        "Try: Earls 15' c Bowe (2) 38' c, 61' cCourt 76' cTrimble 80' mCon: Sexton (4/5) 17', 39', 61', 78'Pen: Sexton (3/3) 10', 48', 57'\n",
                    tries: 5,
                    conversions: 4,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring: "Try: Parisse 34' c Con: Botes (1/1) 35'Pen: Botes (1/4) 7'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20120225',
                kick_off: '16:00 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: Farrell (4/5) 23', 29', 38', 45' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 19,
                    scoring:
                        "Try: S. Williams 75' c Con: Halfpenny (1/1) 76'Pen: Halfpenny (4/5) 25', 34', 53', 71'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20120226',
                kick_off: '15:00 GMT (UTC+0)',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 17,
                    scoring:
                        "Try: Hogg 7' c Jones 55' cCon: Laidlaw (1/1) 9'Weir (1/1) 56'Pen: Laidlaw (1/2) 25'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: Fofana 28' c Médard 58' cCon: Parra (2/2) 29', 59'Pen: Parra (2/3) 39', 47'Drop: Beauxis (1/1) 68'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 1
                }
            },
            {
                date: '20120304',
                kick_off: '2] 16:00 CET',
                home: {
                    team: 'FRA',
                    result: 'draw',
                    bonus_points: 0,
                    score: 17,
                    scoring: "Try: Fofana 50' m Pen: Parra (4/5) 22', 29', 46', 57'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'draw',
                    bonus_points: 0,
                    score: 17,
                    scoring:
                        "Try: Bowe (2) 12' c, 37' c Con: Sexton (2/2) 13', 38'Pen: Sexton (1/2) 25'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20120310',
                kick_off: '14:30 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 24,
                    scoring:
                        "Try: Roberts 59' c Cuthbert 77' mCon: Halfpenny (1/2) 50'Pen: Halfpenny (3/3) 9', 19', 36'Priestland (1/1) 69'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 3,
                    scoring: "Pen: Bergamasco (1/1) 12' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20120310',
                kick_off: '17:00 IST (UTC+0)',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 32,
                    scoring:
                        "Try: Best 13' c Reddan 33' cTrimble 40' mMcFadden 76' cCon: Sexton (3/4) 14', 34', 77'Pen: Sexton (2/2) 25', 71'\n",
                    tries: 4,
                    conversions: 3,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 14,
                    scoring: "Try: Gray 36' m Pen: Laidlaw (3/3) 3', 9', 31'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20120311',
                kick_off: '16:00 CET (UTC+01)',
                home: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: Fofana 74' c Con: Parra (1/1) 75'Pen: Beauxis (3/4) 16', 39', 68'Dupuy (1/2) 32'Parra (1/1) 64'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 24,
                    scoring:
                        "Try: Tuilagi 12' c Foden 17' cCroft 70' cCon: Farrell (3/3) 14', 18', 71'Pen: Farrell (1/2) 49'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20120317',
                kick_off: '13:30 CET (UTC+01)',
                home: {
                    team: 'ITA',
                    result: 'win',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Venditti 42' c Con: Burton (1/1) 43'Pen: Bergamasco (1/3) 10'Drop: Burton (1/2) 76'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 1
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 6,
                    scoring: "Pen: Laidlaw (2/3) 35', 59' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20120317',
                kick_off: '14:45 GMT (UTC+0)',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Cuthbert 20' c Con: Halfpenny (1/1) 21',Pen: Halfpenny (3/4) 32', 52', 75'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: Yachvili (2/2) 10', 72' Beauxis (1/1) 44'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20120317',
                kick_off: '17:00 GMT (UTC+0)',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 30,
                    scoring:
                        "Try: Penalty try 58' c Youngs 73' mCon: Farrell (1/2) 58'Pen: Farrell (6/6) 2', 23', 34', 48', 64', 77'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 6,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: Sexton (3/3) 15', 40', 51' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            }
        ]
    },
    {
        year: 2011,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20110204',
                kick_off: '19:45 undefined undefined',
                home: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 19,
                    scoring:
                        "Try: Stoddart 60' c Con: S. Jones (1/1)Pen: S. Jones (3/4) 23', 29', 43'Hook (1/2) 70'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Ashton (2) 14' c, 56' c Con: Flood (2/2)Pen: Flood (3/3) 19', 32', 47'Wilkinson (1/1) 75'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20110205',
                kick_off: '14:30 undefined undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 11,
                    scoring: "Try: McLean 75' m Pen: Mi. Bergamasco (2/3) 6', 40'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: O'Driscoll 44' c Con: Sexton (1/1)Pen: Sexton (1/1) 28'Drop: O'Gara (1/1) 78'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 1
                }
            },
            {
                date: '20110205',
                kick_off: '17:00 undefined undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 34,
                    scoring:
                        "Try: Médard 2' c Penalty try 29' cHarinordoquy 54' cTraille 68' cCon: Parra (2/2)Yachvili (2/2)Pen: Yachvili (1/2) 79'Drop: Trinh-Duc (1/1) 9'\n",
                    tries: 4,
                    conversions: 4,
                    penalties: 1,
                    drop: 1
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 21,
                    scoring:
                        "Try: Kellock 18' c Brown 60' cLamont 75' cCon: Parks (2/2)Jackson (1/1)\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20110212',
                kick_off: '14:30 undefined undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 59,
                    scoring:
                        "Try: Ashton (4) 3' c, 25' c, 54' c, 76' c Cueto 30' cTindall 35' cCare 58' cHaskell 72' cCon: Flood (5/5)Wilkinson (3/3)Pen: Flood (1/1) 10'\n",
                    tries: 8,
                    conversions: 8,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Ongaro 70' c Con: Bergamasco (1/1)Pen: Bergamasco (2/3) 4', 12'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20110212',
                kick_off: '17:00 undefined undefined',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 6,
                    scoring: "Pen: Parks (2/3) 31', 58' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 24,
                    scoring:
                        "Try: Williams (2) 8' c, 70' m Con: Hook (1/1)Pen: Hook (4/5) 13', 18', 21', 65'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20110213',
                kick_off: '15:00 undefined undefined',
                home: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: McFadden 4' c O'Leary 37' mHeaslip 67' cCon: Sexton (1/2)O'Gara (1/1)Pen: Sexton (1/1) 15'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 25,
                    scoring:
                        "Try: Médard 54' c Con: Yachvili (1/1)Pen: Parra (5/5) 10', 18', 20', 27', 48'Yachvili (1/2) 62'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 6,
                    drop: 0
                }
            },
            {
                date: '20110226',
                kick_off: '14:30 undefined undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 16,
                    scoring: "Try: Canale 5' m Parisse 52' mPen: Bergamasco (2/2) 12', 26'\n",
                    tries: 2,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 24,
                    scoring:
                        "Try: Stoddart 9' m Warburton 13' cCon: S. Jones (1/2)Pen: S. Jones (3/3) 3', 38', 40+2'Drop: Hook (1/1) 73'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 1
                }
            },
            {
                date: '20110226',
                kick_off: '17:00 undefined undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 17,
                    scoring: "Try: Foden 42' m Pen: Flood (3/3) 5', 13', 17'Wilkinson (1/1) 52'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: Yachvili (3/5) 7', 19', 22' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20110227',
                kick_off: '15:00 undefined undefined',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    scoring: "Pen: Paterson 16', 17', 32', 58' Parks 66'Drop: Parks 70'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 5,
                    drop: 1
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 21,
                    scoring: "Try: Heaslip 6' c Reddan 29' cO'Gara 53' cCon: O'Gara (3/3)\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20110312',
                kick_off: '14:30 undefined undefined',
                home: {
                    team: 'ITA',
                    result: 'win',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: Masi 59' c Con: Bergamasco (1/1)Pen: Bergamasco (5/7) 1', 23', 63', 70', 75'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 21,
                    scoring:
                        "Try: Clerc 14' m Parra 50' cCon: Parra (1/2)Pen: Parra (3/4) 19', 44', 66'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20110312',
                kick_off: '17:00 undefined undefined',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 19,
                    scoring:
                        "Try: Phillips 50' c Con: Hook (1/1)Pen: Hook (3/4) 19', 27', 68'Halfpenny (1/1) 38'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring: "Try: O'Driscoll 2' c Con: O'Gara (1/1)Pen: O'Gara (2/2) 32', 40'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20110313',
                kick_off: '15:00 undefined undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: Croft 67' c Con: Wilkinson (1/1)Pen: Flood (4/5) 15', 23', 29', 57'Wilkinson (1/1) 79'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Evans 74 'c Con: Paterson (1/1)Pen: Paterson (2/2) 3', 20'Drop: Jackson (1/1) 40'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 1
                }
            },
            {
                date: '20110319',
                kick_off: '14:30 undefined undefined',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 21,
                    scoring:
                        "Try: De Luca 46' m Walker 54' cCon: Paterson (1/2)Pen: Paterson (3/4) 3', 18', 67'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 8,
                    scoring: "Try: Masi 10' m Pen: Bergamasco (1/1) 30'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20110319',
                kick_off: '17:00 undefined undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 24,
                    scoring:
                        "Try: Bowe 27' m O’Driscoll 46' cCon: Sexton (1/2)Pen: Sexton (4/4) 6' 14' 22' 37'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 8,
                    scoring: "Try: Thompson 52' m Pen: Flood (1/2) 32'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20110319',
                kick_off: '19:45 undefined undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 28,
                    scoring:
                        "Try: Nallet (2) 37' m, 43' c Clerc 58' cCon: Parra (2/3)Pen: Parra (3/4) 7', 25', 52'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: Hook (3/4) 2', 42', 48' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            }
        ]
    },
    {
        year: 2010,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20100206',
                kick_off: '14:30 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 29,
                    scoring:
                        "Try: Heaslip 15' c O'Leary 35' cCon: O'Gara (2/2)Pen: O'Gara (4/4) 9', 27', 32', 46'P. Wallace (1/1) 67'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 11,
                    scoring: "Try: Robertson 39' m Pen: Gower (1/1) 26'Mi. Bergamasco (1/1) 44'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20100206',
                kick_off: '17:00 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 30,
                    scoring:
                        "Try: Haskell (2) 40' c, 75' c Care 44' cCon: Wilkinson (3/3)Pen: Wilkinson (3/3) 11', 35', 79'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 17,
                    scoring:
                        "Try: A. Jones 49' c Hook 71' cCon: S. Jones (2/2)Pen: S. Jones (1/2) 27'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20100207',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: Paterson (3/3) 9', 30', 52' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 18,
                    scoring:
                        "Try: Bastareaud (2) 14' m, 33' c Con: Parra (1/2)Pen: Parra (2/3) 28', 44'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20100213',
                kick_off: '14:00 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 31,
                    scoring:
                        "Try: Byrne 56' m Halfpenny 77' cS. Williams 80+1' cCon: S. Jones (2/3)Pen: S. Jones (4/5) 15', 23', 39', 79'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 24,
                    scoring:
                        "Try: Barclay 9' c M. Evans 20' mCon: Paterson (1/2)Pen: Parks (2/2) 26', 41'Drop: Parks (2/4) 18', 66'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 2
                }
            },
            {
                date: '20100213',
                kick_off: '16:30 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 33,
                    scoring:
                        "Try: Servat 27' c Jauzion 31' cPoitrenaud 59' cCon: Parra (3/3)Pen: Parra (2/3) 17', 68'Drop: Parra (1/1) 62'Michalak (1/1) 78'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 2,
                    drop: 2
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring: "Try: D. Wallace 64' c Con: O'Gara (1/1)Pen: O'Gara (1/1) 29'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20100214',
                kick_off: '14:30 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 12,
                    scoring: 'Pen: Mi. Bergamasco (4/5) \n',
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 17,
                    scoring: "Try: Tait 44' m Pen: Wilkinson (3/5)Drop: Wilkinson (1/1) 74'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 3,
                    drop: 1
                }
            },
            {
                date: '20100226',
                kick_off: '20:00 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: Halfpenny 62' c S. Williams 79' cCon: S. Jones (2/2)Pen: S. Jones (2/2) 45', 49'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Palisson 6' c Trinh-Duc 40' cCon: Parra (2/2)Pen: Parra (3/3) 19', 26', 78'Michalak (1/1) 71'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20100227',
                kick_off: '13:30 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'win',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Canavosio 64' c Con: Mi. Bergamasco (1/1)Pen: Mi. Bergamasco (3/3) 10', 14', 43'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: Parks (3/4) 22', 33', 64' Drop: Parks 49'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 1
                }
            },
            {
                date: '20100227',
                kick_off: '16:00 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Cole 61' c Con: Wilkinson (1/1)Pen: Wilkinson (2/5) 15', 36'Drop: Wilkinson (1/3) 70'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 1
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: Bowe (2) 4' m, 75' c Earls 56' mCon: O'Gara (1/1)Pen: Sexton (1/3) 29'\n",
                    tries: 3,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20100313',
                kick_off: '14:30 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 27,
                    scoring:
                        "Try: Earls (2) 27' m, 60' m O'Leary 31' mPen: Sexton (3/4) 16', 21', 50'Drop: Sexton (1/1) 76'\n",
                    tries: 3,
                    conversions: 0,
                    penalties: 3,
                    drop: 1
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: S. Jones (4/5) 9', 38', 54', 63' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20100313',
                kick_off: '17:00 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'draw',
                    bonus_points: 0,
                    score: 15,
                    scoring: "Pen: Parks (4/6) 6', 18', 50', 68' Drop: Parks (1/2) 39'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 1
                },
                away: {
                    team: 'ENG',
                    result: 'draw',
                    bonus_points: 0,
                    score: 15,
                    scoring: "Pen: Wilkinson (3/3) 14', 30', 41' Flood (2/4) 49', 64'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 5,
                    drop: 0
                }
            },
            {
                date: '20100314',
                kick_off: '14:30 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 46,
                    scoring:
                        "Try: Harinordoquy 5' c Marty (2) 17' c, 25' mAndreu 51' cJauzion 56' cLapandry 65' cCon: Parra (5/6)Pen: Parra (2/3) 10', 41'\n",
                    tries: 6,
                    conversions: 5,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: Del Fava 68' c Canavosio 72' cCon: Mi. Bergamasco (2/2)Pen: Mi. Bergamasco (2/2) 35', 44'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20100320',
                kick_off: '14:30 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 33,
                    scoring:
                        "Try: Hook (2) 52' c, 57' c S. Williams 68' cCon: S. Jones (3/3)Pen: S. Jones (4/4) 8', 22', 33', 36'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring:
                        "Try: McLean 75' c Con: Mi. Bergamasco (1/1) 75'Pen: Mi. Bergamasco (1/2) 65'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20100320',
                kick_off: '17:00 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: O'Driscoll 11' c Bowe 64' cCon: Sexton (1/1)O'Gara (1/1)Pen: Sexton (1/3) 51'O'Gara (1/1) 76'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: Beattie 15' m Pen: Parks (5/6) 5', 37', 46', 73', 78'Drop: Parks (1/2) 40'+1'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 5,
                    drop: 1
                }
            },
            {
                date: '20100320',
                kick_off: '19:45 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: Parra (3/4) 19', 25', 35' Drop: Trinh-Duc (1/1) 3'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring: "Try: Foden 6' c Con: Flood (1/1)Pen: Wilkinson (1/1) 67'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            }
        ]
    },
    {
        year: 2009,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20090207',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 36,
                    scoring:
                        "Try: Goode 2' c Ellis (2) 18' m, 54' cFlutey 28' cCueto 78' cCon: Goode (4/5)Pen: Goode (1/3) 36'\n",
                    tries: 5,
                    conversions: 4,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 11,
                    scoring: "Try: Mi. Bergamasco 72' m Pen: McLean (2/3) 34', 39'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20090207',
                kick_off: '17:00 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 30,
                    scoring:
                        "Try: Heaslip 34' c O'Driscoll 43' cD'Arcy 66' cCon: O'Gara (3/3)Pen: O'Gara (3/5) 3', 17', 78'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 21,
                    scoring:
                        "Try: Harinordoquy 15' c Médard 50' mCon: Beauxis (1/2)Pen: Beauxis (1/1) 76'Drop: Beauxis (2/2) 40+1', 53'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 1,
                    drop: 2
                }
            },
            {
                date: '20090208',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: M. Evans 69' c Con: Paterson (1/1)Pen: Paterson (2/2) 32', 51'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Shanklin 22' m A. W. Jones 29' mHalfpenny 41' mS. Williams 58' mPen: S. Jones (2/3) 13', 40+1'\n",
                    tries: 4,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20090214',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: Ouedraogo 46' c Con: Beauxis (1/1)Pen: Beauxis (5/7) 23', 38', 53', 60', 73'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring: "Try: T. Evans 69' c Con: Paterson (1/1)Pen: Godman (2/3) 35', 49'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20090214',
                kick_off: '17:30 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: Halfpenny 44' m Pen: S. Jones (5/5) 4', 16', 43', 54', 72'Halfpenny 22' (1/2)\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 6,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 15,
                    scoring:
                        "Try: Sackey 24' m D. Armitage 57' cCon: Flood (1/1)Drop: Goode (1/1) 30'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 0,
                    drop: 1
                }
            },
            {
                date: '20090215',
                kick_off: '14:30 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: McLean (3/4) 5', 16', 24' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 38,
                    scoring:
                        "Try: Bowe 19' c Fitzgerald (2) 40' c, 76' cD. Wallace 48' cO'Driscoll 78' cCon: O'Gara (4/4)Kearney (1/1)Pen: O'Gara (1/1) 50'\n",
                    tries: 5,
                    conversions: 5,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20090227',
                kick_off: '20:00 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 21,
                    scoring:
                        "Try: Dusautoir 40' c Heymans 53' mCon: Parra (1/2)Pen: Parra (3/5) 6', 35', 70'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Byrne 24' c Con: S. Jones (1/1)Pen: S. Jones (2/2) 3', 9'Hook (1/1) 73'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20090228',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Danielli 35' c Gray 64' cCon: Godman (1/1)Paterson (1/1)Pen: Paterson (3/3) 5', 13', 68'Godman (1/2) 31'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 6,
                    scoring: "Pen: McLean (1/1) 55' Drop: Parisse (1/1) 22'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 1,
                    drop: 1
                }
            },
            {
                date: '20090228',
                kick_off: '17:30 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 14,
                    scoring:
                        "Try: O'Driscoll 57' m Pen: O'Gara (2/5) 27', 71'Drop: O'Driscoll (1/2) 46'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 2,
                    drop: 1
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: D. Armitage 78' c Con: Goode (1/1)Pen: Flood (1/1) 38'D. Armitage (1/1) 64'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20090314',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 15,
                    scoring: "Pen: Marcato (5/5) 5', 31', 34', 57', 70' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: S. Williams 25' c Shanklin 71' cCon: Hook (2/2)Pen: Hook (2/3) 59', 63'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20090314',
                kick_off: '17:00 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 15,
                    scoring: "Pen: Paterson (5/5) 5', 13', 21', 31', 60' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: Heaslip 51' c Con: O'Gara (1/1)Pen: O'Gara (4/5) 11', 27', 33', 70'Drop: O'Gara (1/1) 57'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 1
                }
            },
            {
                date: '20090315',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 34,
                    scoring:
                        "Try: Cueto 1' c Flutey (2) 22' c, 41' mD. Armitage 37' cWorsley 39' mCon: Flood (3/3)Pen: Flood (1/1) 18'\n",
                    tries: 5,
                    conversions: 3,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring: "Try: Szarzewski 56' m Malzieu 64' m\n",
                    tries: 2,
                    conversions: 0,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20090321',
                kick_off: '13:15 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 8,
                    scoring: "Try: Parisse 57' m Pen: Marcato (1/2) 23'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 50,
                    scoring:
                        "Try: Chabal 25' c Trinh-Duc 29' mMédard (2) 31' c, 70' mHeymans 42' cDomingo 55' mMalzieu 76' mCon: Parra (3/4)Pen: Parra (3/3) 7', 15', 48'\n",
                    tries: 7,
                    conversions: 3,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20090321',
                kick_off: '15:30 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Monye 22' m Flutey 28' cTait 77' mCon: Flood (1/2)Pen: Flood (2/2) 40', 41'Drop: Care 72'\n",
                    tries: 3,
                    conversions: 1,
                    penalties: 2,
                    drop: 1
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: Paterson (3/3) 9', 44', 66' Godman (1/2) 51'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20090321',
                kick_off: '17:30 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 15,
                    scoring: "Pen: S. Jones (4/5) 33', 39', 51', 56' Drop: S. Jones (1/1) 76'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 1
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 17,
                    scoring:
                        "Try: O'Driscoll 44' c Bowe 46' cCon: O'Gara (2/2)Drop: O'Gara (1/1) 78'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 0,
                    drop: 1
                }
            }
        ]
    },
    {
        year: 2008,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20080202',
                kick_off: '14:00 undefined undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Dempsey 18' c Con: O'Gara (1/1)Pen: O'Gara (3/4) 12', 57', 66'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 11,
                    scoring: "Try: Castrogiovanni 60' m Pen: Bortolussi (2/3) 38', 70'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20080202',
                kick_off: '16:30 undefined undefined',
                home: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 19,
                    scoring:
                        "Try: Flood 23' c Con: Wilkinson (1/1)Pen: Wilkinson (3/4) 1', 11', 45'Drop: Wilkinson (1/1) 17'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 1
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Byrne 67' c Phillips 70' cCon: Hook (2/2)Pen: Hook (4/4) 4', 34', 57', 63'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20080203',
                kick_off: '15:00 undefined undefined',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 6,
                    scoring: "Pen: Parks (1/2) 30' Drop: Parks (1/2) 4'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 1,
                    drop: 1
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 27,
                    scoring:
                        "Try: Clerc 12' c, 65' c Malzieu 23' cCon: Élissalde (2/2)Skrela(1/1)Pen: Traille (2/2) 18', 55'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20080209',
                kick_off: '14:00 undefined undefined',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 30,
                    scoring:
                        "Try: S. Williams 13' c, 68' c Hook 46' cCon: Hook (2/2)S. Jones (1/1)Pen: Hook (1/1) 28'S. Jones (2/2) 63', 71'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 15,
                    scoring: "Pen: Paterson (5/5) 10', 32', 42', 50', 55 \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 5,
                    drop: 0
                }
            },
            {
                date: '20080209',
                kick_off: '16:00 undefined undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring: "Try: Clerc 14' c, 18' m, 35' c Heymans 48' cCon: Élissalde (3/4)\n",
                    tries: 4,
                    conversions: 3,
                    penalties: 0,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 21,
                    scoring:
                        "Try: Penalty try 55' c D. Wallace 59' mCon: O'Gara (1/2)Pen: O'Gara (3/3) 17', 28', 74'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20080210',
                kick_off: '14:30 undefined undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 19,
                    scoring:
                        "Try: Picone 76' c Con: Bortolussi (1/1)Pen: Bortolussi (4/4) 5', 11', 44', 54'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: Sackey 3' c Flood 15' cCon: Wilkinson (2/2)Pen: Wilkinson (3/4) 31', 37', 57'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20080223',
                kick_off: '15:00 undefined undefined',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 47,
                    scoring:
                        "Try: Byrne 28' c, 68' c Shanklin 42' cS. Williams 57' c, 74' cCon: S. Jones (3/3) Hook (2/2)Pen: S. Jones (4/4) 4', 11', 47', 50'\n",
                    tries: 5,
                    conversions: 5,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 8,
                    scoring: "Try: Castrogiovanni 12' m Pen: Marcato (1/2) 40+2'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20080223',
                kick_off: '17:00 undefined undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 34,
                    scoring:
                        "Try: D. Wallace 22' c Kearney 26' cHoran 41' mBowe 62' c, 79' mCon: O'Gara (3/5)Pen: O'Gara (1/1) 50'\n",
                    tries: 5,
                    conversions: 3,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring: "Try: Webster 53' c Con: Paterson (1/1)Pen: Paterson (2/2) 24', 31'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20080223',
                kick_off: '20:00 undefined undefined',
                home: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Nallet 24' c Con: Traille(1/1)Pen: Parra (1/1) 49'Yachvili (1/1) 74'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 24,
                    scoring:
                        "Try: Sackey 5' c Wigglesworth 79' mCon: Wilkinson (1/2)Pen: Wilkinson (3/5) 14', 29', 68'Drop: Wilkinson (1/2) 64'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 1
                }
            },
            {
                date: '20080308',
                kick_off: '13:15 undefined undefined',
                home: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: O'Gara (4/4) 5', 19', 62', 68' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: S. Williams 51' c Con: S. Jones (1/1)Pen: S. Jones (2/4) 26', 46'Hook (1/1) 76'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20080308',
                kick_off: '15:15 undefined undefined',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 15,
                    scoring: "Pen: Paterson (4/4) 9', 31', 40+2', 41' Parks (1/1) 48'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: Wilkinson (3/5) 27', 50', 53' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20080309',
                kick_off: '15:00 undefined undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 25,
                    scoring:
                        "Try: Floch 13' c Jauzion 53' mRougerie 66' cCon: Yachvili (2/3)Pen: Yachvili (2/2) 27', 37'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Castrogiovanni 58' c Con: Marcato (1/1)Pen: Marcato (2/2) 18', 31'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20080315',
                kick_off: '13:00 undefined undefined',
                home: {
                    team: 'ITA',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: Penalty try 13' c Canale 59' cCon: Marcato (2/2)Pen: Marcato (2/4) 36', 68'Drop: Marcato (1/1) 79'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 1
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: Hogg 21' c Blair 40' cCon: Paterson (2/2)Pen: Parks (1/1) 25'Paterson (1/1) 72'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20080315',
                kick_off: '15:00 undefined undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 33,
                    scoring:
                        "Try: Sackey 19' c Tait 57' c Noon 69' cCon: Cipriani (3/3)Pen: Cipriani (4/4) 12', 30', 44', 73'\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring: "Try: Kearney 4' c Con: O'Gara (1/1)Pen: O'Gara (1/2) 7'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20080315',
                kick_off: '17:00 undefined undefined',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 29,
                    scoring:
                        "Try: S. Williams 60' c M. Williams 77' cCon: S. Jones (2/2)Pen: Hook (3/5) 5', 18', 21'S. Jones (2/2) 63', 74'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: Élissalde (3/3) 19', 39', 46'  Yachvili (1/1) 69'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                }
            }
        ]
    },
    {
        year: 2007,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20070203',
                kick_off: '13:30 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 3,
                    scoring: "Pen: Pez (1/1) 36' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 39,
                    scoring:
                        "Try: Dominici 23' c Heymans 30' cChabal (2) 40' m, 44' cJauzion 63' cCon: Skrela (4/5)Pen: Skrela (1/1) 13'Beauxis (1/1) 72'\n",
                    tries: 5,
                    conversions: 4,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20070203',
                kick_off: '16:00 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 42,
                    scoring:
                        "Try: Robinson (2) 37' m, 55' c Wilkinson 59' cLund 72' mCon: Wilkinson (2/4)Pen: Wilkinson (5/5) 11', 29', 31', 49', 53'Drop: Wilkinson (1/2) 19'\n",
                    tries: 4,
                    conversions: 2,
                    penalties: 5,
                    drop: 1
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: Taylor 25' c Dewey 77' cCon: Paterson (2/2)Pen: Paterson (2/3) 18', 43'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20070204',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: S. Jones (3/3) 9', 19', 25' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 19,
                    scoring: "Try: R. Best 1' m B. O'Driscoll 33' cO'Gara 71' cCon: O'Gara (2/3)\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20070210',
                kick_off: '13:30 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 20,
                    scoring: "Try: Robinson 39' m Pen: Wilkinson (5/5) 3', 15', 25', 56', 75'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 7,
                    scoring: "Try: Scanavacca 65' c Con: Scanavacca (1/1)\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20070210',
                kick_off: '15:30 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 21,
                    scoring: "Pen: Paterson (7/7) 6', 19', 37', 48', 52', 58', 79' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 7,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: S. Jones (3/3) 24', 40', 54' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20070211',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 17,
                    scoring: "Try: O'Gara 31' m Pen: O'Gara (4/4) 12', 24', 56', 78'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: Ibañez 14' c Clerc 79' cCon: Skrela (1/1) Beauxis (1/1)Pen: Skrela (2/4) 4', 9'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20070224',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 17,
                    scoring:
                        "Try: Dewey 14' c Paterson 60' cCon: Paterson (2/2)Pen: Paterson (1/1) 40'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'win',
                    bonus_points: 0,
                    score: 37,
                    scoring:
                        "Try: Ma. Bergamasco 1' c Scanavacca 4' cRobertson 6' c Troncon 75' cCon: Scanavacca (4/4)Pen: Scanavacca (3/3) 19', 66', 71'\n",
                    tries: 4,
                    conversions: 4,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20070224',
                kick_off: '17:30 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 43,
                    scoring:
                        "Try: Dempsey 30' c D. Wallace 37' cHorgan 63' cBoss 78' cCon: O'Gara (3/3)P. Wallace (1/1)Pen: O'Gara (5/5) 6', 20', 26', 43', 57'\n",
                    tries: 4,
                    conversions: 4,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Strettle 46' c Con: Wilkinson (1/1)Pen: Wilkinson (2/3) 2', 56'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20070224',
                kick_off: '20:00 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 32,
                    scoring:
                        "Try: Dominici 28' c Nallet 34' cCon: Skrela (2/2)Pen: Skrela (5/6) 11', 18', 38', 46', 52'Beauxis (1/1) 80'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 6,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 21,
                    scoring: "Try: Popham 13' c Shanklin 15' cRobinson 74' cCon: S. Jones (3/3)\n",
                    tries: 3,
                    conversions: 3,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20070310',
                kick_off: '13:30 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    scoring: "Pen: Paterson (6/6) 17', 36', 40', 51', 61', 66' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 6,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 19,
                    scoring:
                        "Try: O'Gara 30' c Con: O'Gara (1/1)Pen: O'Gara (4/6) 9', 38', 68', 70'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20070310',
                kick_off: '15:30 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'win',
                    bonus_points: 0,
                    score: 23,
                    scoring:
                        "Try: Robertson 37' c Mauro Bergamasco 78' cCon: Pez (2/2)Pen: Pez (3/4) 12', 20', 73'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: S. Williams 27' c Rees 45' cCon: S. Jones (1/1)Hook (1/1)Pen: Hook (2/2) 44', 54'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20070311',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Flood 48' c Tindall 73' cCon: Flood (1/1)Geraghty (1/1)Pen: Flood (3/5) 8', 31', 35'Geraghty (1/1) 68'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    scoring: "Pen: Skrela (3/3) 4', 15', 21' Yachvili (3/3) 34', 52', 59'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 6,
                    drop: 0
                }
            },
            {
                date: '20070317',
                kick_off: '13:30 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 24,
                    scoring:
                        "Try: Bortolami 75' m De Marigny 80' cCon: Scanavacca (1/2)Pen: Pez (2/3) 15', 26'Drop: Pez (2/2) 12', 29'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 2
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 51,
                    scoring:
                        "Try: Dempsey (2) 17' m, 46' c Easterby 21' mD'Arcy 40' cHorgan 51' mHickie (2) 55' c, 77' mO'Gara 59' cCon: O'Gara (4/8)Pen: O'Gara (1/1) 6'\n",
                    tries: 8,
                    conversions: 4,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20070317',
                kick_off: '15:30 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 46,
                    scoring:
                        "Try: Harinordoquy 29' c Jauzion 33' cMarty 52' cHeymans 59' mMilloud 62' cVermeulen 80' cCon: Beauxis (5/6)Pen: Beauxis (2/2) 19', 37'\n",
                    tries: 6,
                    conversions: 5,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 19,
                    scoring: "Try: Walker 7' c S. Lamont 40' cE. Murray 76' mCon: Paterson (2/3)\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20070317',
                kick_off: '17:30 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 27,
                    scoring:
                        "Try: Hook 3' c Horsman 13' mCon: Hook (1/2)Pen: Hook (4/5) 11', 39', 64', 74'Drop: Hook (1/2) 68'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 4,
                    drop: 1
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    scoring:
                        "Try: Ellis 32' c Robinson 40' mCon: Flood (1/2)Pen: Flood (1/1) 46'Drop: Flood (1/1) 35'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 1,
                    drop: 1
                }
            }
        ]
    },
    {
        year: 2006,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20060204',
                kick_off: '13:30 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Tries: Flannery 26' c Bowe 48' cCon: O'Gara (2/2)Pen: O'Gara (4/5) 40+2', 60', 70', 80+4'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Mi. Bergamasco 30' c Con: Pez (1/1)Pen: Pez (2/3) 13', 64'Griffen (1/1) 45'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20060204',
                kick_off: '15:30 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 47,
                    scoring:
                        "Tries: Cueto 15' c Moody 31' mTindall 65' mDallaglio 75' cDawson 78' cVoyce 80+7' cCon: Hodgson (2/3)Goode (2/3)Pen: Hodgson (3/4) 28', 45', 55'\n",
                    tries: 6,
                    conversions: 4,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: M. Williams 35' c Con: S. Jones (1/1)Pen: S. Jones (2/2) 21', 53'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20060205',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Tries: Lamont (2) 11' c, 46' c Con: Paterson (2/2)Pen: Paterson (2/3) 22', 33'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 16,
                    scoring: "Tries: Bonnaire 50' m Bruno 80+2' mPen: Élissalde (2/2) 40+2', 62'\n",
                    tries: 2,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20060211',
                kick_off: '13:30 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 43,
                    scoring:
                        "Tries: Rougerie 3' m Magne 8' cMarty (2) 18' c, 58' cHeymans (2) 37' c, 45' cCon: Élissalde (5/6)Pen: Élissalde (1/1) 32'\n",
                    tries: 6,
                    conversions: 5,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 31,
                    scoring:
                        "Tries: O'Gara 57' c D'Arcy 61' cO'Callaghan 66' cTrimble 70' cCon: O'Gara (4/4)Pen: O'Gara (1/2) 30'\n",
                    tries: 4,
                    conversions: 4,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20060211',
                kick_off: '16:00 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Mi. Bergamasco 80+4' c Con: Pez (1/1)Pen: Pez (1/2) 37'Drop: Pez (2/2) 40+1', 42'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 2
                },
                away: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 31,
                    scoring:
                        "Tries: Tindall 30' c Hodgson 57' cCueto 70' cSimpson-Daniel 80+9' cCon: Hodgson (4/4)Pen: Hodgson (1/2) 51'\n",
                    tries: 4,
                    conversions: 4,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20060212',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 28,
                    scoring:
                        "Tries: Penalty try 7' c G. Thomas (2) 35' c, 64' cSidoli 54' cCon: S. Jones (4/4)\n",
                    tries: 4,
                    conversions: 4,
                    penalties: 0,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    scoring:
                        "Tries: Southwell 80+4' m Paterson 80+7' cCon: Paterson (1/2)Pen: Paterson (2/2) 19', 39'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20060225',
                kick_off: '14:00 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 37,
                    scoring:
                        "Tries: Lièvremont 31' m Nyanga 59' mde Villiers 72' cRougerie 80+6' cMichalak 80+10' cCon: Yachvili (3/5)Pen: Élissalde (1/2) 5'Yachvili (1/2) 47'\n",
                    tries: 5,
                    conversions: 3,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: Pez (3/4) 10', 20', 28' Drop: Pez (1/1) 38'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 1
                }
            },
            {
                date: '20060225',
                kick_off: '17:30 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 18,
                    scoring: "Pen: Paterson (5/5) 3', 43', 48', 75', 80+1' Drop: Parks (1/1) 58'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 5,
                    drop: 1
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 12,
                    scoring: "Pen: Hodgson (4/5) 8', 41', 64', 78'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                }
            },
            {
                date: '20060226',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 31,
                    scoring:
                        "Tries: Wallace 29' m Horgan 44' cStringer 80+12' cCon: O'Gara (2/3)Pen: O'Gara (4/5) 18', 40+1', 48', 59'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 5,
                    scoring: "Try: M. Jones 9' m\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20060311',
                kick_off: '13:30 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'draw',
                    bonus_points: 0,
                    score: 18,
                    scoring:
                        "Tries: M. Jones 12' m S. Jones 29' cCon: S. Jones (1/2)Pen: S. Jones (2/2) 4', 63'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'draw',
                    bonus_points: 0,
                    score: 18,
                    scoring:
                        "Tries: Galon 17' m Canavosio 40+6' cCon: Pez (1/2)Pen: Pez (2/5) 40', 47'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20060311',
                kick_off: '15:30 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 15,
                    scoring: "Pen: O'Gara (5/7) 3', 10', 24', 38', 58'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 5,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: Paterson (3/3) 11', 17', 28'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20060312',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 31,
                    scoring:
                        "Tries: Fritz 1' c Traille 70' mDominici 80+3' cCon: Yachvili (2/3)Pen: Yachvili (4/6) 7', 11', 34', 77'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 6,
                    scoring: "Pen: Hodgson 40+4' (1/2) Goode (1/1) 43'\n",
                    tries: 0,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20060318',
                kick_off: '13:30 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring: "Try: Mi. Bergamasco 7' c Con: Pez (1/1)Pen: Pez (1/1) 58'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 13,
                    scoring:
                        "Try: Paterson 13' c Con: Paterson (1/1)Pen: Paterson (1/1) 78'Drop: Ross (1/1) 40'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 1
                }
            },
            {
                date: '20060318',
                kick_off: '15:30 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'loss',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Luscombe 34' c Con: S. Jones (1/1)Pen: S. Jones (2/2) 5', 27'Henson (1/1) 60'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 21,
                    scoring:
                        "Tries: Szarzewski 50' m Fritz 80' cCon: Élissalde (1/2)Pen: Yachvili (2/2) 12', 40+2'Élissalde (1/3) 80+6'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20060318',
                kick_off: '17:30 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 24,
                    scoring:
                        "Tries: Noon 2' m Borthwick 52' cCon: Goode (1/2)Pen: Goode (4/6) 38', 44', 69', 75'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 28,
                    scoring:
                        "Tries: Horgan (2) 8' m, 79' c Leamy 59' cCon: O'Gara (2/3)Pen: O'Gara (3/5) 17', 37', 43'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 3,
                    drop: 0
                }
            }
        ]
    },
    {
        year: 2005,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: [
            {
                date: '20050205',
                kick_off: '14:00 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 16,
                    scoring:
                        "Try: Traille 80+4' c Con: MichalakPen: Delaigue 51', 57'Drop: Delaigue 78'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 1
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: Paterson (3) 3', 40', 43' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20050205',
                kick_off: '17:30 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 11,
                    scoring: "Try: S. Williams 11' m Pen: S. Jones 25'Henson 77'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 9,
                    scoring: "Pen: Hodgson (3) 16', 50', 74' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20050206',
                kick_off: '14:30 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 17,
                    scoring:
                        "Try: Castrogiovanni 80+7' m Pen: Orquera 8'de Marigny (3) 38', 44', 63'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 28,
                    scoring:
                        "Try: Murphy 29' m Stringer 50' cHickie 80+2' cCon: O'Gara (2)Pen: O'Gara (3) 22', 55', 79'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20050212',
                kick_off: '13:30 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 8,
                    scoring: "Try: Orquera 11' m Pen: de Marigny 45'\n",
                    tries: 1,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 38,
                    scoring:
                        "Try: J. Thomas 5' c Shanklin 22' mM. Williams 40+4' cCockbain 56' cS. Williams 60' cSidoli 77' mCon: S. Jones (4)\n",
                    tries: 6,
                    conversions: 4,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20050212',
                kick_off: '16:00 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring: "Try: Southwell 13' m Petrie 60' mPen: Paterson 10'\n",
                    tries: 2,
                    conversions: 0,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 40,
                    scoring:
                        "Try: O'Kelly 25' c O'Connell 40+2' mHickie 44' cHayes 75' mDuffy 80+2' cCon: O'Gara (2)HumphreysPen: O'Gara (3) 19', 39', 50'\n",
                    tries: 5,
                    conversions: 3,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20050213',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 17,
                    scoring: "Try: Barkley 19' c Lewsey 36' cCon: Hodgson (2)Pen: Hodgson 27'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 18,
                    scoring: "Pen: Yachvili (6) 5', 30', 55', 61', 68', 75' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 6,
                    drop: 0
                }
            },
            {
                date: '20050226',
                kick_off: '14:00 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'win',
                    bonus_points: 0,
                    score: 18,
                    scoring: "Pen: Paterson (6) 5', 33', 51', 54', 76', 80+2' \n",
                    tries: 0,
                    conversions: 0,
                    penalties: 6,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 10,
                    scoring: "Try: Masi 80+6' c Con: de MarignyPen: de Marigny 23'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 0
                }
            },
            {
                date: '20050226',
                kick_off: '16:00 GMT undefined',
                home: {
                    team: 'FRA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 18,
                    scoring:
                        "Try: Yachvili 4' c Rougerie 14' mCon: YachviliPen: Yachvili 28'Drop: Michalak 65'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 1,
                    drop: 1
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 24,
                    scoring:
                        "Try: M. Williams (2) 42' c, 45' m Con: S. JonesPen: S. Jones (3) 26', 40+5', 68'Drop: S. Jones 75'\n",
                    tries: 2,
                    conversions: 1,
                    penalties: 3,
                    drop: 1
                }
            },
            {
                date: '20050227',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'win',
                    bonus_points: 0,
                    score: 19,
                    scoring:
                        "Try: O'Driscoll 59' c Con: O'GaraPen: O'Gara (2) 10', 13'Drop: O'Gara (2) 4', 35'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 2
                },
                away: {
                    team: 'ENG',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring: "Try: Corry 7' c Con: HodgsonPen: Hodgson 26'Drop: Hodgson 57'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 1,
                    drop: 1
                }
            },
            {
                date: '20050312',
                kick_off: '13:30 GMT undefined',
                home: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 19,
                    scoring: "Try: O'Driscoll 77' c Con: O'GaraPen: O'Gara (4) 9', 21', 28', 49'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 4,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 26,
                    scoring:
                        "Try: Dominici (2) 31' m, 80+3' m Baby 36' cCon: YachviliPen: Yachvili (2) 23', 64'Drop: Delaigue 12'\n",
                    tries: 3,
                    conversions: 1,
                    penalties: 2,
                    drop: 1
                }
            },
            {
                date: '20050312',
                kick_off: '16:00 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 39,
                    scoring:
                        "Try: Cueto (3) 10' c, 40+7' m, 69' m Thompson 40+3' cBalshaw 65' mHazell 80+8' cCon: Hodgson (2)Andy GoodePen: Hodgson 7'\n",
                    tries: 6,
                    conversions: 3,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 7,
                    scoring: "Try: Troncon 46' c Con: Peens\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 0,
                    drop: 0
                }
            },
            {
                date: '20050313',
                kick_off: '15:00 GMT undefined',
                home: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: Craig 54' c R. Lamont 71' mPaterson 74' cCon: Paterson (2)Pen: Paterson 24'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                },
                away: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 46,
                    scoring:
                        "Try: R. Jones 4' c R. Williams (2) 10' c, 50' mS. Williams 14' cMorgan (2) 29' c, 40+3' cCon: S. Jones (5)Pen: S. Jones (2) 19', 78'\n",
                    tries: 6,
                    conversions: 5,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20050319',
                kick_off: '13:00 GMT undefined',
                home: {
                    team: 'ITA',
                    result: 'loss',
                    bonus_points: 0,
                    score: 13,
                    scoring: "Try: Robertson 28' c Con: PeensPen: Peens (2) 3', 43'\n",
                    tries: 1,
                    conversions: 1,
                    penalties: 2,
                    drop: 0
                },
                away: {
                    team: 'FRA',
                    result: 'win',
                    bonus_points: 0,
                    score: 56,
                    scoring:
                        "Try: Nyanga 11' c Jauzion 18' cLaharrague 40+2' cMarty (2) 70' c, 80+2' mLamboley 75' cMignoni 80+4' cCon: Yachvili (4)Michalak (2)Pen: Yachvili (3) 8', 52', 54'\n",
                    tries: 7,
                    conversions: 6,
                    penalties: 3,
                    drop: 0
                }
            },
            {
                date: '20050319',
                kick_off: '15:30 GMT undefined',
                home: {
                    team: 'WAL',
                    result: 'win',
                    bonus_points: 0,
                    score: 32,
                    scoring:
                        "Try: Jenkins 17' c Morgan 61' cCon: S. Jones (2)Pen: Henson 24'S. Jones (4) 33', 43', 51', 74'Drop: Henson 13'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 5,
                    drop: 1
                },
                away: {
                    team: 'IRE',
                    result: 'loss',
                    bonus_points: 0,
                    score: 20,
                    scoring:
                        "Try: Horan 69' c Murphy 77' cCon: Humphreys (2)Pen: O'Gara (2) 3', 37'\n",
                    tries: 2,
                    conversions: 2,
                    penalties: 2,
                    drop: 0
                }
            },
            {
                date: '20050319',
                kick_off: '18:00 GMT undefined',
                home: {
                    team: 'ENG',
                    result: 'win',
                    bonus_points: 0,
                    score: 43,
                    scoring:
                        "Try: Noon (3) 14' c, 25' c, 78' m Worsley 29' mLewsey 40+1' cEllis 49' cCueto 72' mCon: Hodgson (4)\n",
                    tries: 7,
                    conversions: 4,
                    penalties: 0,
                    drop: 0
                },
                away: {
                    team: 'SCO',
                    result: 'loss',
                    bonus_points: 0,
                    score: 22,
                    scoring:
                        "Try: S. Lamont 40+8' c Craig 46' cTaylor 51' mCon: Paterson (2)Pen: Paterson 23'\n",
                    tries: 3,
                    conversions: 2,
                    penalties: 1,
                    drop: 0
                }
            }
        ]
    },
    {
        year: 2004,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: []
    },
    {
        year: 2003,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: []
    },
    {
        year: 2002,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: []
    },
    {
        year: 2001,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: []
    },
    {
        year: 2000,
        teams: ['ENG', 'FRA', 'IRE', 'ITA', 'SCO', 'WAL'],
        matches: []
    }
];

export default sixNationsData;
