export default class Storage {
    
    /**
     * @param {Object} object
     * @returns {Array}
     */
    static getAll(object) {
        const key = (typeof object === 'string') ? object : object.name;
        const result = localStorage.getItem(key);
        const schedulingList = JSON.parse(result) || [];

        return schedulingList;
    }

    /**
     * @param {Object} object 
     */
    static save(object) {
        const key = object.constructor.name;
        const currentList = this.getAll(key);
        currentList.push(object);
        const value = JSON.stringify(currentList);

        localStorage.setItem(key, value);
    }
}