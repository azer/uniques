module.exports = uniques;

function uniques(arr){
  return arr.filter(function(el, ind){
    return arr.indexOf(el) == ind;
  });
}
