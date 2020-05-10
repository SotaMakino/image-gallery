'use strict';

var React = require("react");

function str(prim) {
  return prim;
}

function NotFound(Props) {
  return React.createElement("div", {
              className: "section is-fullheight"
            }, React.createElement("h1", {
                  className: "is-size-1"
                }, "404"), React.createElement("h2", {
                  className: "is-size-2"
                }, "Not Found"), React.createElement("hr", undefined), React.createElement("a", {
                  className: "is-size-4",
                  href: "/login"
                }, "Login"), React.createElement("p", {
                  className: "is-size-5"
                }, "or"), React.createElement("a", {
                  className: "is-size-4",
                  href: "/register"
                }, "Register"), React.createElement("hr", undefined), React.createElement("a", {
                  className: "is-size-4",
                  href: "/"
                }, "⬅️ Back to Homepage"));
}

var make = NotFound;

exports.str = str;
exports.make = make;
/* react Not a pure module */
