import { expect } from 'chai';

describe('App Core', () => {
    it('should have the navbar markup', () => {
        const markup = document.getElementById('app-content');
        expect(markup).not.to.be.empty;
    });
});
