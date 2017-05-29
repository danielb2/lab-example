const Code = require('code');
const Lab = require('lab');
const Foo = require('../lib/foo');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('sub-dir with coverage path', () => {

    it('should give a poor coverage path result if files in subdirs are not tested', (done) => {

        expect(Foo.derp()).to.equal(42);
        done();
    });
});
