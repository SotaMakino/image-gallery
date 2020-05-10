'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

function Detail(Props) {
  var id = Props.id;
  var match = React.useState((function () {
          return /* LoadingImage */0;
        }));
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          fetch("https://negabook-server.herokuapp.com/negas.json").then((function (response) {
                      return response.json();
                    })).then((function (jsonResponse) {
                    var images = Belt_Array.map(jsonResponse, (function (i) {
                            return Caml_array.caml_array_get(i.film_photos, 0);
                          }));
                    var image = List.filter((function (item) {
                              return item.id === id;
                            }))(Belt_List.fromArray(images));
                    Curry._1(setState, (function (_previousState) {
                            return /* LoadedImage */[Caml_array.caml_array_get(Belt_List.toArray(image), 0)];
                          }));
                    return Promise.resolve(undefined);
                  })).catch((function (_err) {
                  Curry._1(setState, (function (_previousState) {
                          return /* ErrorFetchingImage */1;
                        }));
                  return Promise.resolve(undefined);
                }));
          
        }), ([]));
  var tmp;
  if (typeof state === "number") {
    tmp = state !== 0 ? "An error occurred!" : "Loading...";
  } else {
    var imageUrl = state[0].url.replace(/\/\/negabook-server.herokuapp.com/g, "");
    var imageStyle = {
      height: "100%",
      margin: "10px",
      width: "97%",
      borderRadius: "10px"
    };
    tmp = React.createElement("div", undefined, React.createElement("div", {
              style: {
                fontSize: "15px"
              }
            }, id.toString()), React.createElement("img", {
              style: imageStyle,
              src: imageUrl
            }));
  }
  return React.createElement("div", undefined, tmp);
}

var make = Detail;

exports.make = make;
/* react Not a pure module */
