import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import $ from "jquery";
//import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement
);
$("header p, header a").css({
  opacity: "0",
  position: "relative",
  top: "10vh"
});
$("header p, header a").each(function() {
  $(this).animate({ opacity: "1", top: "0" }, 300);
});

$(window).scroll(function() {
  $(".hideme").each(function(i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_object) {
      $(this).animate({ opacity: "1", top: "0" }, 300);
    }
  });
});

// Uncomment the line above that imports the registerServiceWorker function
// and the line below to register the generated service worker.
// By default create-react-app includes a service worker to improve the
// performance of the application by caching static assets. This service
// worker can interfere with the Identity UI, so it is
// disabled by default when Identity is being used.
//
//registerServiceWorker();
