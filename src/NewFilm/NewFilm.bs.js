'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function NewFilm(Props) {
  var match = React.useState((function () {
          return "";
        }));
  var setTitle = match[1];
  var match$1 = React.useState((function () {
          return "";
        }));
  var setDescription = match$1[1];
  React.useState((function () {
          return "";
        }));
  return React.createElement("div", {
              style: {
                padding: "10px"
              }
            }, React.createElement("div", {
                  style: { }
                }, React.createElement("label", undefined, "Title "), React.createElement("input", {
                      type: "text",
                      value: match[0],
                      onChange: (function ($$event) {
                          return Curry._1(setTitle, $$event.target.value);
                        })
                    })), React.createElement("div", {
                  style: {
                    padding: "20px 0"
                  }
                }, React.createElement("label", undefined, "Description "), React.createElement("input", {
                      type: "text",
                      value: match$1[0],
                      onChange: (function ($$event) {
                          return Curry._1(setDescription, $$event.target.value);
                        })
                    })), React.createElement("input", {
                  id: "films",
                  style: {
                    display: "none"
                  },
                  accept: "image",
                  multiple: false,
                  name: "films",
                  type: "file"
                }), React.createElement("label", {
                  style: {
                    border: "1px solid #999",
                    padding: "5px 8px",
                    borderRadius: "3px"
                  },
                  htmlFor: "films"
                }, "Choose a file"));
}

var make = NewFilm;

exports.make = make;
/* react Not a pure module */
