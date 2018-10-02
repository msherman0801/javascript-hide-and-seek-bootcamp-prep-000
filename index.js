
function getFirstSelector(selector) {
  var test = document.querySelector(selector);
  return test;
}

function nestedTarget() {
  var test = document.getElementById('nested').querySelector('.target')
  return test;
}

function increaseRankBy(n) {
  var div = 'div';
  var newDiv = ' div';
  var b = parseInt(document.getElementById('test').querySelector(div).innerHTML)
  
  while(b === isNaN) {
    div += newDiv
  }

  return b + n;
}

function deepestChild() {
  var a = document.getElementById('grand-node').querySelector('div div div div div');
  return a;
}