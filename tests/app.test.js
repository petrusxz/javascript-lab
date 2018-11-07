const { expect } = require('chai');
const Schedule = require('./../src/models/schedule.model');

describe('App Core', () => {
    it('should initialize Schedule with null values', () => {
        const schedule = new Schedule();
        const mockSchedule = {
            date: null,
            hour: null
        };
        expect(schedule).to.deep.equal(mockSchedule);
    });
});
