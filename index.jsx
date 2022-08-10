import React from 'react';
import { screen, render } from '@testing-library/react';
import { expect } from 'chai';

var chai = require('chai')
chai.use(require('chai-dom'))

// Uncomment so that mocha may use this definition which will avoid the
// infinite loop trying to stringify the react element.

JSON.stringify = (val) => 'overwrite'

describe('testing react', () => {
    it('should not be stuck on an infinite loop', async () => {
        render(<div data-testid="some-id">Hello There</div>);
        const ele = await screen.getByTestId('some-id');
        expect(ele).to.have.style('bad', 'value');
    });
});
