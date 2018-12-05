var convert = require('xml-js');



var xml =
  '<?xml version="1.0" encoding="utf-8"?>' +
  '<note importance="high" logged="true">' +
  '    <title><h1>Happy</h1></title>' +
  '    <todo>Work</todo>' +
  '    <todo>Play</todo>' +
  '</note>';
var result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
console.log(result1);