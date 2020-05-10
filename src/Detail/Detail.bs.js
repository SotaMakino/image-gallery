'use strict';

var React = require("react");

function Detail(Props) {
  var id = Props.id;
  return React.createElement("header", {
              style: {
                fontSize: "25px",
                margin: "10px 0"
              }
            }, id);
}

var make = Detail;

exports.make = make;
/* react Not a pure module */
