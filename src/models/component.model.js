export default class Component {

    /**
     * @param {string} content 
     */
    render(content) { 
        const appContent = document.getElementById('app-content');
        appContent.innerHTML = content;
    }
}