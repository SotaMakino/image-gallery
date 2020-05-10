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
              ) : Belt_Array.mapWithIndex(state[0], (function (i, image) {
                      var imageUrl = image.url.replace(/\/\/negabook-server.herokuapp.com/g, "");
                      var imageStyle = {
                        backgroundImage: "url(" + (String(imageUrl) + ")"),
                        backgroundPosition: "center",
                        height: "300px",
                        padding: "2px",
                        width: "100%",
                        borderRadius: "8px"
                      };
                      return React.createElement("div", {
                                  key: image.id.toString(),
                                  style: imageStyle
                                }, image.id.toString());
                    })));
}

var make = Top;

exports.make = make;
/* react Not a pure module */
