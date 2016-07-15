/// <reference path="../typings/index.d.ts" />

import Calulator from "../index";
import { expect } from "chai";


describe('Calulator', () => {
    var subject : Calulator;

    beforeEach(function(){
        subject = new Calulator;
    });

    describe('#add', () => {
        it('should add to numbers together', () =>{
            var result: number = subject.add(2,3);
            expect(result).to.be.eq(5);
        })

    });

});
