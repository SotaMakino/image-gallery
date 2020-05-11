'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$ReasonReactApp = require("./App/App.bs.js");
var Header$ReasonReactApp = require("./Header/Header.bs.js");
var NewFilm$ReasonReactApp = require("./NewFilm/NewFilm.bs.js");
var ExampleStyles$ReasonReactApp = require("./ExampleStyles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$ReasonReactApp.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

function headerContainer(param) {
  var container = document.createElement("div");
  document.body.appendChild(container);
  return container;
}

ReactDom.render(React.createElement(Header$ReasonReactApp.make, { }), headerContainer(undefined));

ReactDom.render(React.createElement(NewFilm$ReasonReactApp.make, { }), makeContainer("Add New Image"));

ReactDom.render(React.createElement(App$ReasonReactApp.make, { }), makeContainer(""));

exports.style = style;
exports.makeContainer = makeContainer;
exports.headerContainer = headerContainer;
/* style Not a pure module */
