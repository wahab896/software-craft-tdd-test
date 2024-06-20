test('Return 0 when nothing is passed', () => {
    expect(add("")).toBe(0);
});

test('Return 1 when input is 1', () => {
    expect(add("1")).toBe(1);
    expect(add("4")).toBe(4);
});

test('Return 6 when input is 1,5', () => {
    expect(add("1,5")).toBe(6);
    expect(add("9,1")).toBe(10);
});

test('Return output for multiple inputs', () => {
    expect(add("1,5,5,10")).toBe(21);
    expect(add("5,5,5,5,5")).toBe(25);
});

test('Handle new-line inputs', () => {
    expect(add("1\n2,3").toBe(6))
    expect(add("1\n2,\n3,4").toBe(10));
});

test('Delimiters as inputs', () => {
    expect(add("//;\n1;2").toBe(3))
    expect(add("//,1\n1,2").toBe(4))
    expect(add("1|\n1|2").toBe(4))

});

test('Exception on negative numbers', () => {
    expect(add("1,-1").toBe("negative numbers not allowed -1"));
    expect(add("-4,1,-1").toBe("negative numbers not allowed -4,-1"));
})
