const escapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
const hasEscapedHtml = RegExp(escapedHtml.source);

const commonHtmlEntities = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

function decode(string) {
  return string && hasEscapedHtml.test(string)
    ? string.replace(escapedHtml, entity => commonHtmlEntities[entity])
    : string;
}

export { decode }
