/**
 * @author FE개발팀 김성호 sungho-kim@nhnent.com
 */
'use strict';

var MarkdownCommand = require('../markdownCommand');

/**
 * AddLink
 * Add link markdown syntax to markdown editor
 * @exports AddLink
 * @extends {MarkdownCommand}
 * @constructor
 * @class
 */
var AddLink = MarkdownCommand.extend(/** @lends AddLink.prototype */{
    init: function AddLink() {
        MarkdownCommand.call(this, 'AddLink');
    },
    /**
     *  커맨드 핸들러
     *  @param {CodeMirror} cm CodeMirror instance
     *  @param {object} data data for link
     *  @return {CodeMirror} 코드미러 상수
     */
    exec: function(cm, data) {
        var replaceText,
        range,
        from,
        to;

        if (!this.isAvailable()) {
            return this.getPass();
        }

        range = this.getCurrentRange();

        from = {
            line: range.from.line,
            ch: range.from.ch
        };

        to = {
            line: range.to.line,
            ch: range.to.ch
        };

        replaceText = '[' + data.linkText + '](' + data.url + ')';

        this.doc.replaceRange(replaceText, from, to);

        this.cm.focus();
    }
});

module.exports = new AddLink();