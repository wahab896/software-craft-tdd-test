test('Return 0 when nothing is passed', () => {
    expect(add()).toBe(0);
});

test('Return 1 when input is 1', () => {
    expect(add(1)).toBe(0);
});

test('Return 6 when input is 1,5', () => {
    expect(add(1,5)).toBe(6);
});
