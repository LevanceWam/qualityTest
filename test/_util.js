const util = require('../src/util');
const expect = require('chai').expect;

describe('Time For a Taste Test', () => {
  it('You have to taste test the food before the client eats it.', (done) => {
    expect(util.output).to.not.equal(null);
    done();
  });
});

describe('bumper', () => {
  it('should return bumped version', () => {
    log.bump('10.5.13', 'minor');
  });
});
