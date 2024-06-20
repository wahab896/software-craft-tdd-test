test('Return 0 when nothing is passed', () => {
    expect(add("")).toBe(0);
});

test('Return 1 when input is 1', () => {
    expect(add("1")).toBe(0);
});

test('Return 6 when input is 1,5', () => {
    expect(add("1,5")).toBe(6);
});

test('Return output for multiple inputs', () => {
    expect(add("1,5,5,10")).toBe(21);
});

test('handle new-line inputs', () => {
    expect(add("1\n2,3").toBe(6))
})

test('delimiters as inputs', () => {
    expect(add("//;\n1;2").toBe(3))
})
