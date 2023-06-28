const Shapes = require('./shapes');
const {Triangle} = require('./shapes');

describe('Shapes', () => {
    test('test shapes', () => {
        const shape = new Triangle();
        shape.addcolor("blue");
        expect(shape.render()).toEqual('<polygon width="100%" height="100%" points="0,200 300,200 200,0" fill="blue" />');
    });
});

