'use strict';

var rExcerpt = /(<|&lt;)!-{2,}\s*more\s*-{2,}(>|&gt;)/;

function excerptFilter(data) {
  var content = data.content;

  if (rExcerpt.test(content)) {
    data.content = content.replace(rExcerpt, function() {
      var index = arguments[arguments.length-2];
      data.excerpt = content.substring(0, index).trim();
      data.more = content.substring(index + arguments[0].length).trim();

      return '<a id="more"></a>';
    });
  } else {
    data.excerpt = '';
    data.more = content;
  }
}

module.exports = excerptFilter;
