
describe('Page turner', function(){
  describe('#nextPage()', function() {
    it('should return the next page', function() {
      expect(Filter.pageNumber).toEqual(10)
    });
  });
});

describe('Page turner', function() {
  describe('#previousPage()', function() {
    it('should return the previous page', function() {
      expect(Filter.pageNumber).toEqual(0)
    });
  });
});

