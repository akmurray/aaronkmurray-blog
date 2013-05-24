describe("akm.math", function() {

	var inputs = [-1.75, -1.5, -1.1, -1, -0.9, -0.51, -0.50, -0.49, -0.1, 0, 
					0.49, 0.50, 0.99, 1, 1.9, Infinity, '1.', '', ' ', '-1', 
					'0', '1', ' 77 ', '010', '0xa', '0xff', '7.890123E+3', '1.23E-2', '$234', '$234.', 
					'$234.56', '$23,456.78', 'foo', '2bar', 'baz3', '123,456', '1,234.56', '1.2.3', '4,5,6', '-1a',
					'- 2', 'true', 'false', true, false, NaN, null, [], {}, new Function(), 
					undefined];

	var expectedOutputsForRound = [-2, -1, -1, -1, -1, -1, 0, 0, 0, 0, 
									0,  1,  1,  1,  2,  0, 1, 0, 0, -1, 
									0, 1, 77, 10, 10, 255, 7890, 0, 234, 234, 
									235, 23457, 0, 0, 0, 123456, 1235, 0, 0, 0, 
									-2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 
									0];
	
	var expectedOutputsForCeil  = [-1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 
									1, 1, 1, 1, 2, 0, 1, 0, 0, -1, 
									0, 1, 77, 10, 10, 255, 7891, 1, 234, 234, 
									235, 23457, 0, 0, 0, 123456, 1235, 0, 0, 0, 
									-2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 
									0];
	
	var expectedOutputsForFloor = [-2, -2, -2, -1, -1, -1, -1, -1, -1, 0, 
									0, 0, 0, 1, 1, 0, 1, 0, 0, -1, 
									0, 1, 77, 10, 10, 255, 7890, 0, 234, 234, 
									234, 23456, 0, 0, 0, 123456, 1234, 0, 0, 0, 
									-2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 
									0];


	describe("akm.math.toInt", function() {
		it("should not throw exceptions when passing 0 param", function() {
			
			var f = function() {
				akm.math.toInt();
			};
			expect(f).not.toThrow();
		});
		
		it("should not throw exceptions when passing undefined params", function() {
			
			var f = function() {
				akm.math.toInt();
				akm.math.toInt(undefined);
				akm.math.toInt(undefined, undefined);
			};
			expect(f).not.toThrow();
		});

			
		it("should return expected values when using 'round' functionality when passing option: {'floor':round}", function() {
			
			for (var i=0;i<inputs.length;i++)
			{
				if (akm.math.toInt(inputs[i], 'round') != expectedOutputsForRound[i])
					console.log('round', i, inputs[i], akm.math.toInt(inputs[i], 'round'), expectedOutputsForRound[i]);
				expect(akm.math.toInt(inputs[i], 'round')).toEqual(expectedOutputsForRound[i]);
			}

		});

		it("should return expected values when using 'round' functionality when passing option: {'round':true}", function() {
			
			for (var i=0;i<inputs.length;i++)
			{
				expect(akm.math.toInt(inputs[i], {'round':true})).toEqual(expectedOutputsForRound[i]);
			}

		});

		it("should return expected values when using 'ceil' functionality when passing option: 'ceil'", function() {
			
			for (var i=0;i<inputs.length;i++)
			{
				if (akm.math.toInt(inputs[i], 'ceil') != expectedOutputsForCeil[i])
					console.log('ceil', i, inputs[i], akm.math.toInt(inputs[i], 'ceil'), expectedOutputsForCeil[i]);
				expect(akm.math.toInt(inputs[i], 'ceil')).toEqual(expectedOutputsForCeil[i]);
			}

		});

		it("should return expected values when using 'ceil' functionality when passing option: {'ceil':true}", function() {
			
			for (var i=0;i<inputs.length;i++)
			{
				expect(akm.math.toInt(inputs[i], {'ceil':true})).toEqual(expectedOutputsForCeil[i]);
			}

		});

		it("should return expected values when using 'floor' functionality when passing option: 'floor'", function() {
			
			for (var i=0;i<inputs.length;i++)
			{
				if (akm.math.toInt(inputs[i], 'floor') != expectedOutputsForFloor[i])
					console.log('floor', i, inputs[i], akm.math.toInt(inputs[i], 'floor'), expectedOutputsForFloor[i]);
				expect(akm.math.toInt(inputs[i], 'floor')).toEqual(expectedOutputsForFloor[i]);
			}

		});

		it("should return expected values when using 'floor' functionality when passing option: {'floor':true}", function() {
			
			for (var i=0;i<inputs.length;i++)
			{
				expect(akm.math.toInt(inputs[i], {'floor':true})).toEqual(expectedOutputsForFloor[i]);
			}

		});


	});	//end describe("akm.math.toInt")


	describe("akm.math.round", function() {
		it("should not throw exceptions when passing 0 param", function() {
			
			var f = function() {
				akm.math.round();
			};
			expect(f).not.toThrow();
		});
		
		it("should not throw exceptions when passing undefined params", function() {
			
			var f = function() {
				akm.math.round();
				akm.math.round(undefined);
				akm.math.round(undefined, undefined);
			};
			expect(f).not.toThrow();
		});

		it("should return expected rounded values", function() {
			
			for (var i=0;i<inputs.length;i++)
			{
				expect(akm.math.round(inputs[i])).toEqual(expectedOutputsForRound[i]);
			}

		});
	});	//end describe("akm.math.round")


	describe("akm.math.ceil", function() {
		it("should not throw exceptions when passing 0 param", function() {
			
			var f = function() {
				akm.math.ceil();
			};
			expect(f).not.toThrow();
		});
		
		it("should not throw exceptions when passing undefined params", function() {
			
			var f = function() {
				akm.math.ceil();
				akm.math.ceil(undefined);
				akm.math.ceil(undefined, undefined);
			};
			expect(f).not.toThrow();
		});

		it("should return expected ceil'd values", function() {
			
			for (var i=0;i<inputs.length;i++)
			{
				expect(akm.math.ceil(inputs[i])).toEqual(expectedOutputsForCeil[i]);
			}

		});
	});	//end describe("akm.math.ceil")


	describe("akm.math.floor", function() {
		it("should not throw exceptions when passing 0 param", function() {
			
			var f = function() {
				akm.math.floor();
			};
			expect(f).not.toThrow();
		});
		
		it("should not throw exceptions when passing undefined params", function() {
			
			var f = function() {
				akm.math.floor();
				akm.math.floor(undefined);
				akm.math.floor(undefined, undefined);
			};
			expect(f).not.toThrow();
		});

		it("should return expected floor'd values", function() {
			
			for (var i=0;i<inputs.length;i++)
			{
				expect(akm.math.floor(inputs[i])).toEqual(expectedOutputsForFloor[i]);
			}

		});
	});	//end describe("akm.math.floor")


});	//end describe("akm.math")