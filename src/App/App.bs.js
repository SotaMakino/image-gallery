'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Top$ReasonReactApp = require("../Top/Top.bs.js");
var Detail$ReasonReactApp = require("../Detail/Detail.bs.js");
var NotFound$ReasonReactApp = require("../NotFound/NotFound.bs.js");
var BlinkingGreeting$ReasonReactApp = require("../BlinkingGreeting/BlinkingGreeting.bs.js");

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  var content;
  var exit = 0;
  if (match) {
    switch (match[0]) {
      case "blinking-greeting" :
          if (match[1]) {
            exit = 1;
          } else {
            content = React.createElement(BlinkingGreeting$ReasonReactApp.make, {
                  children: "Hello !"
                });
          }
          break;
      case "image" :
          var match$1 = match[1];
          if (match$1 && !match$1[1]) {
            content = React.createElement(Detail$ReasonReactApp.make, {
                  id: match$1[0]
                });
          } else {
            exit = 1;
          }
          break;
      default:
        exit = 1;
    }
  } else {
    content = React.createElement(Top$ReasonReactApp.make, { });
  }
  if (exit === 1) {
    content = React.createElement(NotFound$ReasonReactApp.make, { });
  }
  return React.createElement(React.Fragment, undefined, content);
}

var make = App;

exports.make = make;
/* react Not a pure module */
