import Component from './../models/component.model.js';
import Schedule from './../models/schedule.model.js';

export default class Scheduling extends Component {

    constructor() {
        super();
        this.schedule = new Schedule();
        this.schedulingForm = document.createElement('form');
        this.schedulingForm.setAttribute('action', '#');
        this.schedulingForm.addEventListener('submit', this.updateSchedule.bind(this));
    }

    updateSchedule(event) {
        console.log(event);
    }

    render() {
        return `
            <p>Scheduling</p>
        `;
    }
}
