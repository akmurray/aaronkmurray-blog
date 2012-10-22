describe("akm-gist", function() {

	var knownGoodGistId = 3811888;
	var knownBadGistId = 123;
	var knownGoodElementId = 'akm-gist-spec-element-id-1';
	var knownBadElementId = 'this-element-id-does-not-exist';

	it("should have gists in akm.gist.gists", function() {
		expect(akm.gist.gists[knownGoodGistId]).not.toBeFalsy();
	});


	describe("akm.gist.renderGist", function() {

		it("should return false when given an invalid gist id and an invalid element id", function() {
			expect(akm.gist.renderGist(knownBadGistId)).toEqual(false);
			expect(akm.gist.renderGist(knownBadGistId, null)).toEqual(false);
			expect(akm.gist.renderGist(knownBadGistId, knownBadElementId)).toEqual(false);
		});

		it("should return false when given an invalid gist id and a valid element id", function() {
			expect(akm.gist.renderGist(knownBadGistId, knownGoodElementId)).toEqual(false);
		});

		it("should return false when given a valid gist id and an invalid element id", function() {
			expect(akm.gist.renderGist(knownGoodGistId)).toEqual(false);
			expect(akm.gist.renderGist(knownGoodGistId, null)).toEqual(false);
			expect(akm.gist.renderGist(knownGoodGistId, '')).toEqual(false);
			expect(akm.gist.renderGist(knownGoodGistId, knownBadElementId)).toEqual(false);
		});

		it("should return true when given a valid gist id and a valid element id", function() {
			var div = document.getElementById(knownGoodElementId);
			div.innerHTML = '';
			expect(div.innerHTML).toEqual('');
			
			expect(akm.gist.renderGist(knownGoodGistId, knownGoodElementId)).toEqual(true);

			div = document.getElementById(knownGoodElementId);
			expect(div.innerHTML).not.toEqual('');
		});
	});

	describe("akm.gist.renderGistToElement", function() {
		var div = document.createElement('div'); //innerHTML
		var textNode = document.createTextNode('');  //innerText

		it("newly created divs should have empty innerHTML", function() {
			expect(div.innerHTML).toEqual('');
		});
		
		it("newly created textNode should have empty innerText/textContent", function() {
			var tc = textNode.innerText || textNode.textContent;
			expect(tc).toEqual('');
		});

		it("should return false when given an invalid gist id and an invalid element", function() {
			expect(akm.gist.renderGistToElement(knownBadGistId)).toEqual(false);
			expect(akm.gist.renderGistToElement(knownBadGistId, null)).toEqual(false);
		});

		it("should return false when given an invalid gist id and a valid div element", function() {
			expect(akm.gist.renderGistToElement(knownBadGistId, div)).toEqual(false);
			expect(div.innerHTML).toEqual(''); //should not modify the element
		});

		it("should return false when given an invalid gist id and a valid textNode element", function() {
			expect(akm.gist.renderGistToElement(knownBadGistId, textNode)).toEqual(false);
			var tc = textNode.innerText || textNode.textContent;
			expect(tc).toEqual('');//should not modify the element
		});

		it("should return false when given a valid gist id and an invalid element", function() {
			expect(akm.gist.renderGistToElement(knownGoodGistId)).toEqual(false);
			expect(akm.gist.renderGistToElement(knownGoodGistId, null)).toEqual(false);
		});

		it("should return true when given a valid gist id and a valid div element", function() {
			div.innerHTML = '';
			expect(div.innerHTML).toEqual('');
			expect(akm.gist.renderGistToElement(knownGoodGistId, div)).toEqual(true);
			expect(div.innerHTML).not.toEqual('');
		});


		it("should return true when given a valid gist id and a valid textNode element", function() {
			var tc = textNode.innerText || textNode.textContent;
			expect(tc).toEqual('');
			expect(akm.gist.renderGistToElement(knownGoodGistId, textNode)).toEqual(true);
			tc = textNode.innerText || textNode.textContent;
			expect(tc).not.toEqual('');
		});

	});

});