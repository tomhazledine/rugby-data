export const sortByAlternateKey = (results, sortKey, reverse = false) =>
    results.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
            return reverse ? -1 : 1;
        }
        if (a[sortKey] > b[sortKey]) {
            return reverse ? 1 : -1;
        }
        return 0;
    });

export const mean = numbers => {
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
};

export const median = numbers => {
    let median = 0;
    let sorted = [].concat(numbers).sort();
    if (sorted.length % 2 === 0) {
        // An even length needs to return an average of the middle 2 numbers.
        median = (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
    } else {
        // An odd length can return the middle value.
        median = sorted[(sorted.length - 1) / 2];
    }
    return median;
};

export const mode = numbers => {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array

    let modes = [];

    let counts = numbers.reduce(
        (acc, number) => {
            acc.numbers[number] = (acc.numbers[number] || 0) + 1;
            if (acc.numbers[number] > acc.max) {
                acc.max = acc.numbers[number];
            }

            return acc;
        },
        { max: 0, numbers: {} }
    );

    for (let key in counts.numbers) {
        if (counts.numbers[key] === counts.max) {
            modes.push(key);
        }
    }

    return modes;
};
