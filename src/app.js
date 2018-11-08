import Home from './components/home.js';
import Scheduling from './components/scheduling.js';
import Component from './models/component.model.js';

const routes = [
    { name: 'Home', component: Home },
    { name: 'Scheduling', component: Scheduling }
];

export default class App {

    constructor() {
        this.appContent = document.getElementById('app-content');
        this.setRoot();
        this.setAppNavbar();
    }

    setAppNavbar() {
        const appNavbar = document.getElementById('app-navbar');
        const createButtonElment = (name) => {
            return `
                <button type="button" id="${name.toLowerCase()}">
                    ${name}
                </button>
            `;
        };

        routes.forEach(element => {
            const { name, component } = element;
            appNavbar.innerHTML += createButtonElment(name);

            setTimeout(() => {
                document.getElementById(name.toLowerCase())
                    .addEventListener('click', this.setRoot.bind(this, component));
            }, 0);
        });
    }

    /**
     * @param {Component} component 
     */
    setRoot(component = Home) {
        this.appContent.innerHTML = new component().render();
    }
}
