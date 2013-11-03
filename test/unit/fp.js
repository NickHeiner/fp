'use strict';

var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    fp = require('../../lib/fp');

chai.use(require('sinon-chai'));

describe('fp', function() {

    it('fst calls the function with the first arg passed', function() {

        var spy = sinon.spy(),
            args = ['foo', 'bar', 'baz'];

        fp.fst(spy).apply(null, args);

        expect(spy).to.have.been.calledOnce;
        expect(spy).to.have.been.calledWith(args[0]);
    });

    it('snd calls the function with the second arg passed');
    it('thd calls the function with the third arg passed');
    it('nthArg calls the function with the nth arg passed');

});