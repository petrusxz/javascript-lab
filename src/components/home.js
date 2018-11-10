import Component from './../models/component.model.js';
import Storage from '../services/storage.service.js';

export default class Home extends Component {

    constructor() {
        super();
    }
    
    /**
     * @returns {string}
     */
    mountScheduleList() {
        const scheduleList = Storage.getAll('scheduling');
        
        if (!scheduleList.length) {
            return `
                <label>Empty list.</label>
            `;
        }

        let elementList = null;
        scheduleList.forEach(element => {
            elementList += `<li>${element}</li>`;
        });

        return elementList;
    }

    render() {
        return `
            <p>Recent scheduling</p>

            <ul>
                ${this.mountScheduleList()}
            </ul>
        `;
    }    
}
