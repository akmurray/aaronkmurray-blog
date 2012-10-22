describe("prototype-extensions", function() {

	describe("hasClassName", function() {

		it("should be defined on a newly created element", function() {
			var el = document.createElement('div');
			expect(el.hasClassName).toBeDefined();
		});

		it("should return false when checking a class that is not set", function() {
			var el = document.createElement('div');
			expect(el.hasClassName('foo')).toBe(false);
		});

		it("should return true when checking a class that is set", function() {
			var el = document.createElement('div');

			el.className = 'foo';
			expect(el.hasClassName('foo')).toBe(true);
			expect(el.hasClassName('bar')).toBe(false);

			el.className = 'foo bar billy';
			expect(el.hasClassName('foo')).toBe(true);
			expect(el.hasClassName('bar')).toBe(true);
			expect(el.hasClassName('billy')).toBe(true);
			expect(el.hasClassName('baz')).toBe(false);
		});

	});

	describe("addClassName", function() {

		it("should be defined on a newly created element", function() {
			var el = document.createElement('div');
			expect(el.addClassName).toBeDefined();
		});

		it("should be able to add classes", function() {
			var el = document.createElement('div');
			el.addClassName('foo');
			expect(el.hasClassName('foo')).toBe(true);
			expect(el.hasClassName('bar')).toBe(false);

			el.addClassName('bar');
			el.addClassName('billy');
			expect(el.hasClassName('foo')).toBe(true);
			expect(el.hasClassName('bar')).toBe(true);
			expect(el.hasClassName('billy')).toBe(true);
			expect(el.hasClassName('baz')).toBe(false);		
		});

	});

	describe("removeClassName", function() {

		it("should be defined on a newly created element", function() {
			var el = document.createElement('div');
			expect(el.removeClassName).toBeDefined();
		});

		it("should be able to remove classes", function() {
			var el = document.createElement('div');
			el.addClassName('foo');
			expect(el.hasClassName('foo')).toBe(true);
			expect(el.hasClassName('bar')).toBe(false);

			el.addClassName('bar');
			el.addClassName('billy');
			expect(el.hasClassName('foo')).toBe(true);
			expect(el.hasClassName('bar')).toBe(true);
			expect(el.hasClassName('billy')).toBe(true);
			expect(el.hasClassName('baz')).toBe(false);		

			el.removeClassName('foo');
			expect(el.hasClassName('foo')).toBe(false);

			expect(el.hasClassName('billy')).toBe(true);
			el.removeClassName('billy');
			expect(el.hasClassName('billy')).toBe(false);

		});

	});

	describe("toggleClassName", function() {

		it("should be defined on a newly created element", function() {
			var el = document.createElement('div');
			expect(el.toggleClassName).toBeDefined();
		});

		it("should toggle class names ", function() {
			var el = document.createElement('div');

			expect(el.hasClassName('billy')).toBe(false);
			el.toggleClassName('billy');
			expect(el.hasClassName('billy')).toBe(true);

			expect(el.hasClassName('foo')).toBe(false);
			el.toggleClassName('foo');
			expect(el.hasClassName('foo')).toBe(true);

			expect(el.hasClassName('billy')).toBe(true);
			el.toggleClassName('billy');
			expect(el.hasClassName('billy')).toBe(false);
		});

	});
});