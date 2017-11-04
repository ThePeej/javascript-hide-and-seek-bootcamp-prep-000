function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for ( let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML)+n).toString()
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

/*
function deepestChild() {
  var grandnode = document.querySelector('#grand-node')
  console.log(grandnode)
  debugger;
  var childnode = grandnode.children[0]
  console.log(grandnode)
  console.log(childnode)
  debugger;

  while(childnode.children[0]) {
    grandnode = childnode
    childnode = grandnode.children[0]
    console.log(grandnode)
    console.log(childnode)
    debugger;
  }
  console.log(childnode.innerHTML)
  debugger;
  childnode = childnode.innerHTML.toString()
  console.log(childnode)
  debugger;
  return childnode
}
*/
