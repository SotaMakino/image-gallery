'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

function Detail(Props) {
  var id = Props.id;
  var match = React.useState((function () {
          return /* LoadingFilm */0;
        }));
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          fetch("https://negabook-server.herokuapp.com/negas/" + id).then((function (response) {
                      return response.json();
                    })).then((function (jsonResponse) {
                    Curry._1(setState, (function (_previousState) {
                            return /* LoadedFilm */[jsonResponse];
                          }));
                    return Promise.resolve(undefined);
                  })).catch((function (_err) {
                  Curry._1(setState, (function (_previousState) {
                          return /* ErrorFetchingFilm */1;
                        }));
                  return Promise.resolve(undefined);
                }));
          
        }), ([]));
  var tmp;
  if (typeof state === "number") {
    tmp = state !== 0 ? "An error occurred!" : "Loading...";
  } else {
    var film = state[0];
    var imageUrl = Caml_array.caml_array_get(film.film_photos, 0).url.replace(/\/\/negabook-server.herokuapp.com/g, "");
    var imageStyle = {
      height: "100%",
      margin: "10px",
      width: "97%",
      borderRadius: "10px"
    };
    tmp = React.createElement("div", undefined, React.createElement("div", {
              style: {
                fontSize: "14px",
                padding: "0 18px"
              }
            }, React.createElement("h4", undefined, Caml_array.caml_array_get(film.film_photos, 0).id.toString()), React.createElement("h4", undefined, film.title), React.createElement("h4", undefined, film.description)), React.createElement("img", {
              style: imageStyle,
              src: imageUrl
            }));
  }
  return React.createElement("div", undefined, tmp);
}

var make = Detail;

exports.make = make;
/* react Not a pure module */
