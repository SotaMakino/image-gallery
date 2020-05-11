'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");

function Top(Props) {
  var match = React.useState((function () {
          return /* LoadingFilms */0;
        }));
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          fetch("https://negabook-server.herokuapp.com/negas.json").then((function (response) {
                      return response.json();
                    })).then((function (jsonResponse) {
                    Curry._1(setState, (function (_previousState) {
                            return /* LoadedFilms */[jsonResponse];
                          }));
                    return Promise.resolve(undefined);
                  })).catch((function (_err) {
                  Curry._1(setState, (function (_previousState) {
                          return /* ErrorFetchingFilms */1;
                        }));
                  return Promise.resolve(undefined);
                }));
          
        }), ([]));
  return React.createElement("div", undefined, typeof state === "number" ? (
                state !== 0 ? "An error occurred!" : "Loading..."
              ) : Belt_Array.map(state[0], (function (film) {
                      var imageUrl = Caml_array.caml_array_get(film.film_photos, 0).url.replace(/\/\/negabook-server.herokuapp.com/g, "");
                      var imageStyle = {
                        height: "100%",
                        margin: "10px",
                        width: "97%",
                        borderRadius: "10px"
                      };
                      var stringId = film.id.toString();
                      return React.createElement("div", {
                                  key: stringId,
                                  onClick: (function (param) {
                                      return ReasonReactRouter.push("/image/" + stringId);
                                    })
                                }, React.createElement("img", {
                                      style: imageStyle,
                                      src: imageUrl
                                    }));
                    })));
}

var make = Top;

exports.make = make;
/* react Not a pure module */
