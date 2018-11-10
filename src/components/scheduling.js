import Component from './../models/component.model.js';
import Schedule from './../models/schedule.model.js';
import Storage from '../services/storage.service.js';

export default class Scheduling extends Component {

    constructor() {
        super();
        this.schedulingForm = document.createElement('form');
    }

    /**
     * @param {Event} event 
     */
    updateSchedule(event) {
        event.preventDefault();
        const formValues = event.target.children;
        const schedule = new Schedule(formValues);
        Storage.save(schedule);
        document.location.assign('');
    }

    render() {
        this.schedulingForm.innerHTML = `
            <label for="date">Date</label>
            <input type="date" name="date"></input>

            <label for="hour">Time</label>
            <input type="time" name="hour"></input>
            
            <label for="technology">Technology</label>
            <input type="text" name="technology"></input>

            <button type="submit">Create</button>
        `;
        const container = document.createElement('div');
        container.appendChild(this.schedulingForm);
        
        super.render(container.innerHTML);

        document.querySelector('form').addEventListener('submit', this.updateSchedule.bind(this), true);
    }
}
