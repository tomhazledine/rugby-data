import fs from 'fs';
import rp from 'request-promise';
import { JSDOM } from 'jsdom';
import moment from 'moment';

const teamNames = initial => {
    const teamDictionary = {
        england: 'ENG',
        france: 'FRA',
        ireland: 'IRE',
        italy: 'ITA',
        scotland: 'SCO',
        wales: 'WAL'
    };
    let fullName = teamDictionary[initial];
    return fullName ? fullName : false;
};

const years = [
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015'
];
const TARGET = '_Six_Nations_Championship';

const extractText = (rawmarkup, document) => {
    let markup = rawmarkup.replace('<br>', ' ');
    let div = document.createElement('div');
    div.innerHTML = markup;
    let text = div.textContent || div.innerText || '';
    return text;
};

years.map(year => {
    let options = {
        uri: `https://en.wikipedia.org/wiki/${year}${TARGET}`
    };

    rp(options)
        .then(data => {
            const dom = new JSDOM(data);
            return dom.window.document;
        })
        .then(document => {
            let events = document.querySelectorAll('.vevent');
            let results = [...events].map(event => {
                let tables = event.querySelectorAll('table');

                // Get date info
                let date = extractText(tables[0].querySelector('div').innerHTML, document);

                // 6 February 2015 20:05 GMT (UTC+0)
                let d = date.split(' ');
                let dateResultObject = moment(`${d[0]} ${d[1]} ${d[2]}`, 'D MMMM YYYY');
                let dateResult = dateResultObject.format('YYYYMMDD');
                let timeResult = `${d[3]} ${d[4]} ${d[5]}`;

                // Get the teams
                let orgs = event.querySelectorAll('.fn.org a');
                let homeTeam = orgs[0].innerHTML;
                let awayTeam = orgs[1].innerHTML;

                // Get the score
                let scoreString = extractText(
                    tables[1].querySelectorAll('th')[1].innerHTML,
                    document
                );
                let scores = scoreString
                    .trim()
                    .split('–')
                    .map(score => parseInt(score, 10));
                let homeWin = scores[0] > scores[1] ? true : false;
                let homeResult = scores[0] == scores[1] ? 'draw' : homeWin ? 'win' : 'loss';
                let awayResult = scores[0] == scores[1] ? 'draw' : homeWin ? 'loss' : 'win';

                // Get the score info
                let scoreInfoWrapper = tables[1].querySelectorAll('tr')[1].querySelectorAll('td');
                let homeScoreInfo = scoreInfoWrapper[0].innerHTML;
                let awayScoreInfo = scoreInfoWrapper[2].innerHTML;

                // console.log(homeScoreInfo);
                // console.log(awayScoreInfo);
                // console.log(extractText(homeScoreInfo, document));
                // console.log(extractText(awayScoreInfo, document));

                let result = {
                    date: dateResult,
                    kick_off: timeResult,
                    home: {
                        team: teamNames(homeTeam.toLowerCase()),
                        result: homeResult,
                        bonus_points: 0,
                        score: scores[0],
                        scoring: extractText(homeScoreInfo, document),
                        tries: null,
                        conversions: null,
                        penalties: null,
                        drop: 0
                    },
                    away: {
                        team: teamNames(awayTeam.toLowerCase()),
                        result: awayResult,
                        bonus_points: 0,
                        score: scores[1],
                        scoring: extractText(awayScoreInfo, document),
                        tries: null,
                        conversions: null,
                        penalties: null,
                        drop: 0
                    }
                };

                return result;
            });

            // console.log(results);

            // fs.writeFile(`${year}${TARGET}.json`, JSON.stringify(results), function(err) {
            //     if (err) {
            //         console.log(err);
            //     }
            // });
        })
        .catch(err => {
            console.log(err);
        });
});
