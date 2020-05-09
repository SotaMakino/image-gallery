'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Greeting(Props) {
  var name = Props.name;
  var match = React.useState((function () {
          return 0;
        }));
  var setCount = match[1];
  var count = match[0];
  return React.createElement(React.Fragment, undefined, React.createElement("p", undefined, name + ("clicked" + String(count))), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setCount, (function (param) {
                                    return count + 1 | 0;
                                  }));
                    })
                }, "ClickMe"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setCount, (function (param) {
                                    return 0;
                                  }));
                    })
                }, "Reset"));
}

var make = Greeting;

exports.make = make;
/* react Not a pure module */
