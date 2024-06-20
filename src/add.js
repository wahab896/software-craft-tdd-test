function add(inputs) {
    if (!inputs) return 0;
    let newInput = '';
    inputs = inputs.replaceAll('\n', ',');
    inputs.split('').forEach((i) => {
        let length = newInput.length;
        let lastText = newInput.charAt(length - 1);
        if (isNaN(i) && !['-'].includes(i)) {
            if (length && lastText !== ',') {
                newInput += ','
            }
        } else if (lastText && !isNaN(lastText)) {
            newInput += i
        } else {
            newInput += i
        }
    })
    newInput = newInput.split(',');
    const negativeValues = newInput.filter(n => parseInt(n) < 0);
    if (negativeValues.length) {
        throw new Error(`negative numbers not allowed ${negativeValues.join(',')}`)
    }
    console.log(negativeValues, newInput);
    const output = newInput.reduce((acc, i) => acc += parseInt(i), 0);
    return output;
}

module.exports = add