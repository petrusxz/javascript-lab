import { expect } from 'chai';
import { beforeEach } from 'mocha';
import { JSDOM } from 'jsdom';
import App from './../src/app.js';

describe('App Core', () => {

    /**
     * @type {Document}
     */
    let document;

    beforeEach(async () => {
        const dom = await JSDOM.fromFile('index.html');
        document = dom.window.document;
    });

    it('should contain the navbar element', () => {
        const element = document.getElementById('app-navbar');
        expect(element).not.to.be.null;
    });

    it('should contain the content element', () => {
        const element = document.getElementById('app-content');
        expect(element).not.to.be.null;
    });
});
