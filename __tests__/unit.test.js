// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// test for phone number
test('test true phone number', () => {
    expect(functions['isPhoneNumber']('123-123-1234')).toBe(true);
});

test('test true phone number', () => {
    expect(functions['isPhoneNumber']('123-123-123-1234')).toBe(true);
});

test('test false phone number', () => {
    expect(functions['isPhoneNumber']('1-2-3')).toBe(false);
});

test('test false phone number', () => {
    expect(functions['isPhoneNumber']('45-adf-4443')).toBe(false);
});


// test for email
test('test true email', () => {
    expect(functions['isEmail']('abc@gmail.com')).toBe(true);
});

test('test true email', () => {
    expect(functions['isEmail']('abc123@gmail.com')).toBe(true);
});

test('test false email', () => {
    expect(functions['isEmail']('')).toBe(false);
});

test('test false email', () => {
    expect(functions['isEmail']('123@abc')).toBe(false);
});

// test for strong password
test('test true is strong password', () => {
    expect(functions['isStrongPassword']('abcd')).toBe(true);
});

test('test true is strong password', () => {
    expect(functions['isStrongPassword']('a1725H____')).toBe(true);
});

test('test false is strong password', () => {
    expect(functions['isStrongPassword']('!@#$%^&*')).toBe(false);
});

test('test false is strong password', () => {
    expect(functions['isStrongPassword']('111')).toBe(false);
});

// test for date
test('test true is date', () => {
    expect(functions['isDate']('12/55/3939')).toBe(true);
});

test('test true is date', () => {
    expect(functions['isDate']('2/2/3333')).toBe(true);
});

test('test false is date', () => {
    expect(functions['isDate']('!@/44/2222')).toBe(false);
});

test('test false is date', () => {
    expect(functions['isDate']('2.22.33')).toBe(false);
});

// test for hex color
test('test true is hex color', () => {
    expect(functions['isHexColor']('a1f')).toBe(true);
});

test('test true is hex color', () => {
    expect(functions['isHexColor']('AAAEff')).toBe(true);
});

test('test false is hex color', () => {
    expect(functions['isHexColor']('ZZZ')).toBe(false);
});

test('test false is hex color', () => {
    expect(functions['isHexColor']('@12')).toBe(false);
});