'use strict';

var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    fp = require('../../lib/fp');

chai.use(require('sinon-chai'));

describe('fp', function () {

    function verifyFn(fnToTest, argIndex) {

        return function () {

            var spy = sinon.spy(),
                args = ['foo', 'bar', 'baz'];

            fnToTest(spy).apply(null, args);

            expect(spy).to.have.been.calledOnce;
            expect(spy).to.have.been.calledWith(args[argIndex]);
        };

    }


    it('fst calls the function with the first arg passed', verifyFn(fp.fst, 0));

    it('snd calls the function with the second arg passed');
    it('thd calls the function with the third arg passed');
    it('nthArg calls the function with the nth arg passed');

});