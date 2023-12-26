const { expect } = require('chai');
const { MyLibraryModule } = require('../src/MyLibraryModule');

describe('MyLibraryModule', () => {
    let myModule;

    beforeEach(() => {
        myModule = new MyLibraryModule();
    });

    describe('performAction', () => {
        it('should return the input', () => {
            const input = 'test input';
            const result = myModule.performAction(input);
            expect(result).to.equal(input);
        });
    });

    describe('performAnotherAction', () => {
        it('should return the input', () => {
            const input = 'another test input';
            const result = myModule.performAnotherAction(input);
            expect(result).to.equal(input);
        });
    });
});
