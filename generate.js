var fs = require('fs');
var yaml = require('js-yaml');

// get icons.yml from https://github.com/FortAwesome/Font-Awesome/tree/master/src
var iconFile = fs.readFileSync('icons.yml', 'utf8')
var coreIcons = yaml.safeLoad(iconFile).icons; // the official icon list
var icons = []; // our custom icon list so we can include (and sort) aliases

var output = '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n\n';

// generate our custom list
coreIcons.forEach(function(i) {
  icons.push({id: i.id, unicode: i.unicode});

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
  output += '    <item name="fa_' + name + '" type="fontawesome">&#x' + i.unicode + ';</item>\n';
});

output += '\n</resources>';
fs.writeFileSync('fontawesome.xml', output, 'utf8');
