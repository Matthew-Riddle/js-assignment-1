'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// TODO add comment with problem description
// --Description--\\
/* In this kata you will create a function that takes a list of non-negative integers and
strings and returns a new list with the strings filtered out. */

function filter_list(l) {
  // Return a new array with the strings filtered out

  for (let i = l.length - 1; i >= 0; i--) {
    if (typeof l[i] === 'string') {
      l.splice(i, 1);
    }
  }

  return l;
}
// TODO add solution function and export it

exports.filter_list = filter_list;