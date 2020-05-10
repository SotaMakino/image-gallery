'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

function Top(Props) {
  var match = React.useState((function () {
          return /* LoadingImages */0;
        }));
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          fetch("https://negabook-server.herokuapp.com/negas.json").then((function (response) {
                      return response.json();
                    })).then((function (jsonResponse) {
                    Curry._1(setState, (function (_previousState) {
                            return /* LoadedImages */[Belt_Array.map(jsonResponse, (function (i) {
                                            return Caml_array.caml_array_get(i.film_photos, 0);
                                          }))];
                          }));
                    return Promise.resolve(undefined);
                  })).catch((function (_err) {
                  Curry._1(setState, (function (_previousState) {
                          return /* ErrorFetchingImages */1;
                        }));
                  return Promise.resolve(undefined);
                }));
          
        }), ([]));
  return React.createElement("div", undefined, typeof state === "number" ? (
                state !== 0 ? "An error occurred!" : "Loading..."
              ) : Belt_Array.map(state[0], (function (image) {
                      var imageUrl = image.url.replace(/\/\/negabook-server.herokuapp.com/g, "");
                      var imageStyle = {
                        height: "100%",
                        margin: "10px",
                        width: "97%",
                        borderRadius: "10px"
                      };
                      return React.createElement("img", {
                                  key: image.id.toString(),
                                  style: imageStyle,
                                  src: imageUrl
                                });
                    })));
}

var make = Top;

exports.make = make;
/* react Not a pure module */
