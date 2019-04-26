//
// Assert:
// assert.typeOf( foo, 'string', 'foo is a string' );
// assert.equal( foo, 'bar', 'foo equal `bar`' );
// assert.lengthOf( foo, 3, 'foo`s value has a length of 3' );
//
// Expect:
// expect( foo ).to.be.a( 'string' );
// expect( foo ).to.equal( 'bar' );
// expect( foo ).to.have.length( 3 );
//
// Should:
// foo.should.be.a( 'string' );
// foo.should.equal( 'bar' );
// foo.should.have.length( 3 );

// calculator_chai_assert.js
var assert    = require("chai").assert;
var calculator = require("../app/calculator");
describe("Calcultator tests using ASSERT interface from CHAI module: ", function() {
	describe("Check addTested Function: ", function() {
		it("Check the returned value using: assert.equal(value,'value'): ", function() {
			result   = calculator.addTested("text");
			assert.equal(result, "text tested");
		});
		it("Check the returned value using: assert.typeOf(value,'value'): ", function() {
			result   = calculator.addTested("text");
			assert.typeOf(result, "string");
		});
		it("Check the returned value using: assert.lengthOf(value,'value'): ", function() {
			result   = calculator.addTested("text");
			assert.lengthOf(result, 11);
		});
	});
});

// calculator_chai_expect.js
var expect    = require("chai").expect;
var calculator = require("../app/calculator");
describe("Calcultator tests using EXPECT interface from CHAI module: ", function() {
	describe("Check addTested Function: ", function() {
		it("Check the returned value using: expect(value).to.equal('value'): ", function() {
			result   = calculator.addTested("text");
			expect(result).to.equal("text tested");
		});
		it("Check the returned value using: expect(value).to.be.a('value')): ", function() {
			result   = calculator.addTested("text");
			expect(result).to.be.a('string');
		});
		it("Check the returned value using: expect(value).to.have.lengthOf(value): ", function() {
			result   = calculator.addTested("text");
			expect(result).to.have.lengthOf(11);
		});
	});
});

// Calculator_chai_should.js
var should    = require("chai").should();
var calculator = require("../app/calculator");
describe("Calcultator tests using SHOULD interface from CHAI module: ", function() {
	describe("Check addTested Function: ", function() {
		it("Check the returned value using: value.should.equal(value): ", function() {
			result   = calculator.addTested("text");
			result.should.equal("text tested");
		});
		it("Check the returned value using: value.should.be.a('value'): ", function() {
			result   = calculator.addTested("text");
			result.should.be.a('string');
		});
		it("Check the returned value using: expect(value).to.have.lengthOf(value): ", function() {
			result   = calculator.addTested("text");
			result.should.have.lengthOf(11);
		});
	});

});


//Hooks -.only -.skip
// before(function() {
//   // Se ejecuta antes de todas las pruebas del bloque
// });
//
// after(function() {
//   // Se ejecuta después de todas las pruebas del bloque
// });
//
// beforeEach(function() {
//   // Se ejecuta antes de cada prueba del bloque
// });
//
// afterEach(function() {
//   // Se ejecuta después de cada prueba del bloque
// });
