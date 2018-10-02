
function getFirstSelector(selector) {
  var test = document.querySelector(selector);
  return test;
}

function nestedTarget() {
  var test = document.getElementById('nested').querySelector('.target')
  return test;
}

function increaseRankBy(n) {
var a = document.querySelectorAll('.ranked-list');

for(var i = 0; i<a.length; i++) {
  var children = a[i].children;
  for(var j = 0; j<children.length;j++) {
    children[j].innerHTML = parseInt(children[j].innerHTML) + n;
  }
}

}

function deepestChild() {
  var a = document.querySelectorAll('grand-node');
  for (var i = 0; i < a.length; i++) {
    var el = a[i] + 1
    if (el + 1 === undefined)
    return a[i].innerHTML;
  }
}