function add(inputs) {
    if (!inputs) return 0;
    let numValues = inputs.split(',');
    let output;
    return numValues.reduce((acc, i) => acc += parseInt(i), 0);
}

module.exports = add