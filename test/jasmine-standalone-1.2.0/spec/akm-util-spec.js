describe("akm-util", function() {


	it("should have properties set by akm.util._handlePageLoaded()", function() {
		expect(akm.util.isPageLoaded).toBe(true);
		expect(akm.util.pageLoadDate).not.toBe(null);
	});
	
	it("akm.util.isSecure should be set", function() {
		//should be true or false
		expect(akm.util.isSecure).not.toBe(null);
		expect(akm.util.isSecure).not.toBe(undefined);
		expect(akm.util.isSecure).toBe((document.location.protocol == 'https:'));
	});

	describe("akm.util.log", function() {
		it("should not throw exceptions when passing 1 param", function() {
			
			var f = function() {
				akm.util.log('testing akm.util.log - 1 param');
				akm.util.log();
				akm.util.log(null);
				akm.util.log('');
				akm.util.log({});
				akm.util.log([]);
			};
			expect(f).not.toThrow();
		});
		
		it("should not throw exceptions when passing 2 params", function() {

			var f = function() {
				akm.util.log('testing akm.util.log - 2 params');

				akm.util.log(null, null);
				akm.util.log('', null);
				akm.util.log({}, null);
				akm.util.log([], null);

				akm.util.log(null, '');
				akm.util.log('', '');
				akm.util.log({}, '');
				akm.util.log([], '');

				akm.util.log(null, {});
				akm.util.log('', {});
				akm.util.log({}, {});
				akm.util.log([], {});

				akm.util.log(null, []);
				akm.util.log('', []);
				akm.util.log({}, []);
				akm.util.log([], []);

				akm.util.log(null, [null, {}, '', 123.456, new Date(), undefined]);
			};
			expect(f).not.toThrow();
		});

	});


	describe("akm.util.loadScript", function() {
		//akm.util.loadScript = function (pUrl, pLoadAsync, pOnLoadCallback)

		var testFile = 'spec/akm-util-spec-testdata.js';
		var propIdLoaded = 'akm-util-spec-testdata-loaded';
		var propIdCallback = 'akm-util-spec-callback';

		var cb = function() {
			window[propIdCallback] = true;
		};


		beforeEach(function() {
			window[propIdLoaded] = false;
			window[propIdCallback] = false;
		});

		afterEach(function() {
			window[propIdLoaded] = false;
			window[propIdCallback] = false;
		});

		it("should load a local file", function() {
			
			//expect(window[propIdLoaded]).toBe(false);
			//expect(window[propIdCallback]).toBe(false);
			expect(akm.util.loadScript(testFile)).toBe(true);
			//expect(window[propIdLoaded]).toBe(true);
			//expect(window[propIdCallback]).toBe(false);

			//expect(window[propIdLoaded]).toBe(false);
			//expect(window[propIdCallback]).toBe(false);
			expect(akm.util.loadScript(testFile, true)).toBe(true);
			//expect(window[propIdLoaded]).toBe(true);
			//expect(window[propIdCallback]).toBe(false);

			//expect(window[propIdLoaded]).toBe(false);
			//expect(window[propIdCallback]).toBe(false);
			expect(akm.util.loadScript(testFile, false)).toBe(true);
			//expect(window[propIdLoaded]).toBe(true);
			//expect(window[propIdCallback]).toBe(false);

			//expect(window[propIdLoaded]).toBe(false);
			//expect(window[propIdCallback]).toBe(false);
			expect(akm.util.loadScript(testFile, true, cb)).toBe(true);
			//expect(window[propIdLoaded]).toBe(true);
			//expect(window[propIdCallback]).toBe(true);

			//expect(window[propIdLoaded]).toBe(false);
			//expect(window[propIdCallback]).toBe(false);
			expect(akm.util.loadScript(testFile, false, cb)).toBe(true);
			//expect(window[propIdLoaded]).toBe(true);
			//expect(window[propIdCallback]).toBe(true);
		});
		
	});
	

});