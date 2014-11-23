/* @flow */
'use strict';
module.exports.hello = function(name: string): string {
    return 'Hello, ' + name + '!';
};
if(window && window.console) {
    window.console.log(module.exports.hello('world'));
}