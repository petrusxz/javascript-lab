import { expect } from 'chai';
import Schedule from './../../src/models/schedule.model.js';

describe('Scheduling Component', () => {
    it('should initialize Schedule with null values', () => {
        const schedule = new Schedule();
        const mockSchedule = {
            date: null,
            hour: null,
            technology: null
        };

        expect(schedule).to.deep.equal(mockSchedule);
    });
});
