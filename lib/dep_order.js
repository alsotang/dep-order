exports.parse = function (str) {
  return str.split(/\s+/).map(function (tuple) {
    return tuple.split('&');
  });
};
