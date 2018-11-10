export default class Schedule {

    /**
     * @param {Schedule} schedule
     */
    constructor(values = {}) {
        /**
         * @type {string}
         */
        this.date = null;

        /**
         * @type {string}
         */
        this.hour = null;

        /**
         * @type {string}
         */
        this.technology = null;

        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key))
                this[key] = values[key].value;
        });
    }
}
