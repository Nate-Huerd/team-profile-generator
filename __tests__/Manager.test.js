const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('KimManager', 101, 'kim.manager@email.com', Suite101);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role', () => {
    const manager = new Manager('KimManager', 101, 'kim.manager@email.com', Suite101);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});