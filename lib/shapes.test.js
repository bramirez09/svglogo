const Shapes = require('./shapes')

describe('Shapes', () => {
    test('test shapes', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="0,200 300,200 200,0" fill="blue" />');
    });
});

