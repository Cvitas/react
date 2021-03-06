import React,{ Component } from "react";
import ReactDOM from "react-dom";
import Es6Promise from "es6-promise";
Es6Promise.polyfill()
// this is required when you want react hmr
// if you don't need hmr,you can remove this
import { AppContainer } from "react-hot-loader";
import ROOT from "./router";

// public styles go here
import "static/css/common.scss";
import "static/css/normalize.scss";

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};
render(ROOT);

// this is required when you want react hmr
// if you don't need hmr,you can remove this
if (module.hot) {
	module.hot.accept(ROOT, () => {
		render(ROOT)
	});
}