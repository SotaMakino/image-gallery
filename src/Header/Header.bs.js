'use strict';

var React = require("react");

function Header(Props) {
  return React.createElement("header", {
              style: {
                fontSize: "25px",
                margin: "10px 0"
              }
            }, "Image Gallery");
}

var make = Header;

exports.make = make;
/* react Not a pure module */
