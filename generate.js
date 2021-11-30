var fs = require('fs');
var yaml = require('js-yaml');
var _ = require('lodash');

var icons = []; // our custom icon list so we can include (and sort) aliases

try {
  var iconFile = fs.readFileSync('icons.yml', 'utf8')
  var coreIcons = yaml.safeLoad(iconFile);
} catch (e) {
  console.log(e);
}


var output = '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n\n';

// generate our custom list
_.forEach(coreIcons, function(i) {
  icons.push({id: _.findKey(coreIcons, i), unicode: i.unicode});

  if (i.aliases) {
    i.aliases.forEach(function(alias) {
      icons.push({id: alias, unicode: i.unicode});
    });
  }
});

// sort our custom list
icons.sort(function(a, b) {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

icons.forEach(function(i) {
  var name = i.id.replace(/-/gi, '_');
  output += '    <string name="fa_' + name + '" translatable="false">&#x' + i.unicode + ';</string>\n';
});

output += '\n</resources>';
fs.writeFileSync('fontawesome.xml', output, 'utf8');
