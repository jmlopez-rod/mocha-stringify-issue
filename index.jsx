import React from 'react';
import { screen, render } from '@testing-library/react';
import { expect } from 'chai';

var chai = require('chai')
chai.use(require('chai-dom'))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return '[seen]';
      }
      seen.add(value);
    }
    return value;
  };
};

const jsonStringify = JSON.stringify;

// Uncomment so that mocha may use this definition which will avoid the
// infinite loop trying to stringify the react element.

JSON.stringify = (val) => jsonStringify(val, getCircularReplacer, 2);

describe('testing react', () => {
    it('should not be stuck on an infinite loop', async () => {
        render(<div data-testid="some-id">Hello There</div>);
        const ele = await screen.getByTestId('some-id');
        expect(ele).to.have.style('bad', 'value');
    });
});
