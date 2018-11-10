import Component from './../models/component.model.js';
import Storage from '../services/storage.service.js';
import Schedule from '../models/schedule.model.js';

export default class Home extends Component {

    constructor() {
        super();
    }

    /**
     * @returns {string}
     */
    mountScheduleList() {
        const scheduleList = Storage.getAll(Schedule);

        if (!scheduleList.length) {
            return `
                <label>Empty list.</label>
            `;
        }

        const container = document.createElement('div');
        const elementList = document.createElement('ul');
        scheduleList.forEach(element => {
            elementList.innerHTML += `<li>${element.technology} | ${element.date} | ${element.hour}</li>`;
        });

        container.appendChild(elementList);

        return container.innerHTML;
    }

    render() {
        const templateHTML = `
            <p>Recent scheduling</p>

            <div>
                ${this.mountScheduleList()}
            </div>
        `;

        super.render(templateHTML);
    }
}
