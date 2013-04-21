var uniques = require("./");

it('removes duplicates', function(){

  var input = [3, 1, 1, 4, 5, 6, 5, 5, 5, 6, 9, 6, 4, 3, 2, 8, 2],
      output= [3, 1, 4, 5, 6, 9, 2, 8];

  expect(uniques(input)).to.deep.equal(output);

});
