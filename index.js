
function getFirstSelector(selector) {
  var test = document.querySelector(selector);
  return test;
}

function nestedTarget() {
  var test = document.getElementById('nested').querySelector('.target')
  return test;
}

function increaseRankBy(n) {
  var rankedLists = document.querySelector('.ranked-list');
}

function deepestChild() {
  var a = document.getElementById('grand-node').querySelector('div div div div div');
  return a;
}