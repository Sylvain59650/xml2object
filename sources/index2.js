var sax = require("sax");
var parser = sax.parser(true);

var obj = {};
var currentElement = null;
var index = 1;

var stack = [{}];

parser.onerror = function(e) {
  // an error happened.
  debugger;
};
// parser.ontext = function(t) {
//   debugger;
//   currentElement[t] = t;
// };
parser.onopentag = function(node) {
  debugger;
  if (currentElement === null) {
    currentElement = {};
  }
  console.log("add", node);
  var work = node.attributes;
  work.__name = node.name;
  stack.push(work);
  index++;
};

parser.onclosetag = function(node) {
  debugger;
  console.log("del", node);
  var pop = stack[index - 1];
  var parent = stack[index - 2];
  parent[node] = pop;
  index--;
  stack.length = index;
};

// parser.onattribute = function(attr) {
//   debugger;
//   currentElement[attr.name] = attr.value;
// };
// parser.onend = function() {
//   debugger;
// };

var xml =
  '<?xml version="1.0" encoding="utf-8"?>' +
  '<note importance="high" logged="true">' +
  '    <title><h1>Happy</h1></title>' +
  '    <todo>Work</todo>' +
  '    <todo>Play</todo>' +
  '</note>';
parser.write(xml).close();
//console.log(JSON.stringify(obj));
console.log(JSON.stringify(stack));