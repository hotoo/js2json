
const Transform = require('stream').Transform;

class JS2JSON extends Transform {
  constructor(indent) {
    super();
    this._buffered = '';
    this._indent = indent || 2;
  }
  _transform (chunk, encoding, callback) {
    chunk = chunk.toString();
    if (!chunk) { return; }

    this._buffered = this._buffered + chunk;
    callback();
  }

  _flush(callback) {
    var self = this;
    process.nextTick(function () {
      try {
        const js = eval('(' + self._buffered + ')');
        const json = JSON.stringify(js, null, self._indent);
        self.push(json);
        callback();
      } catch(e) {
        callback(e);
      }
    });
  }
}

module.exports = JS2JSON;
