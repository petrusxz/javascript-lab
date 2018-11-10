import Home from './components/home.js';
import Scheduling from './components/scheduling.js';

const routes = [
    { id: 'home', name: 'Home', component: Home },
    { id: 'scheduling', name: 'Scheduling', component: Scheduling }
];

export default class App {
    
    constructor() {
        this.appContent = document.getElementById('app-content');
        this.appNavbar = document.getElementById('app-navbar');

        this.setRoot();
        this.setAppNavbar();
    }

    setAppNavbar() {
        const createButtonElement = ({ name, id }) => {
            return `
                <button type="button" id="${id}">
                    ${name}
                </button>
            `;
        };

        routes.forEach(element => {
            this.appNavbar.innerHTML += createButtonElement(element);
        });

        this.appNavbar.addEventListener('click', this.setRoot.bind(this));
    }

    /**
     * @param {MouseEvent} event 
     */
    setRoot(event = null) {
        let { component, id } = routes[0];

        if (event) {
            const route = routes.find(element => element.id === event.srcElement.id);
            component = route.component;
            id = route.id;
        }

        new component().render();
        document.location.assign(`/#/${id}`);
    }
}
