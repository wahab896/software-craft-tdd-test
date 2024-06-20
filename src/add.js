function add(inputs) {
    if (!inputs) return 0;
    let newInput = '';
    inputs = inputs.replaceAll('\n', ',');
    inputs.split('').forEach((i) => {
        let length = newInput.length;
        let lastText = newInput.charAt(length - 1);
        if (isNaN(i)) {
            if (length && lastText !== ',') {
                newInput += ','
            }
        } else if (lastText && !isNaN(lastText)) {
            newInput += i
        } else {
            newInput += i
        }
    })
    const output = newInput.split(',').reduce((acc, i) => acc += parseInt(i), 0);
    return output;
}

module.exports = add