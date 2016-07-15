/// <reference path="../typings/index.d.ts" />
"use strict";
const index_1 = require("../index");
const chai_1 = require("chai");
describe('Calulator', () => {
    var subject;
    beforeEach(function () {
        subject = new index_1.default;
    });
    describe('#add', () => {
        it('should add to numbers together', () => {
            var result = subject.add(2, 3);
            chai_1.expect(result).to.be.eq(5);
        });
    });
});
//# sourceMappingURL=CalulatorTest.js.map