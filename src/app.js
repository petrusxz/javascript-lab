const Schedule = require('./models/schedule.model');

class App {
    constructor() {
        const a = new Schedule({ date: new Date('2018-11-9') });
        a.hour = '12:00';
    }
}

module.exports = App;
