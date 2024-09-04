// utils.test.js
const { getFullYear, getFooterCopy, getLatestNotification } = require('./utils');


describe(getFullYear, () => {
  it('should return the correct year', () => {
    // Mock the current date
    const mockDate = new Date(2023, 0, 1); // January 1, 2023
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    // Call the function and check the result
    const year = getFullYear();
    expect(year).toBe(2023);

    // Restore the original Date object
    global.Date.mockRestore();
  });
});

describe(getFooterCopy, () => {
    it('should return the correct string when isIndex is true', () => {
        const isIndex = true;
        const footerCopy = getFooterCopy(isIndex);
        expect(footerCopy).toBe('Copywright © 2023 - All rights reserved');
    });

    it('should return the correct string when isIndex is false', () => {
        const isIndex = false;
        const footerCopy = getFooterCopy(isIndex);
        expect(footerCopy).toBe('Copywright © 2023 - All rights reserved');
    });
});

describe(getLatestNotification, () => {
    it('should return a string', () => {
        const notification = getLatestNotification();
        expect(typeof notification).toBe('string');
    });

    it('should return the correct notification', () => {
        const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
        const notification = getLatestNotification();
        expect(notification).toBe(expectedNotification);
    });
});