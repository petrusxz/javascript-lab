export default class Storage {
    
    /**
     * @param {string} key
     * @returns {Array}
     */
    static getAll(key) {
        const result = localStorage.getItem(key);
        const schedulingList = JSON.parse(result) || [];

        return schedulingList;
    }

    save() {
        
    }
}