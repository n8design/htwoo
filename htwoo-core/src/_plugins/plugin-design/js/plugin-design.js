'use strict';
/* global PluginUIExtension, pluginDesign */

var PluginUIExtension = {

  /**
   * The function defined as the onready callback within the plugin configuration.
   */
  init: function () {

    console.log(window);
    console.log(window.parent);
    console.log(window.localStorage);

    window.dispatchEvent(new Event('storage'));

    window.addEventListener('storage', () => {
      // When local storage changes, dump the list to
      // the console.
      console.log(JSON.parse(window.localStorage.getItem('app')));
    });



    let logoImg = document.querySelector(".pl-c-logo__img");
    if (logoImg) {
      logoImg.style.height = "auto";
      logoImg.style.width = "100%";
      logoImg.style.maxHeight = "100%";
      logoImg.removeAttribute('height');
      logoImg.removeAttribute('width');
    }

    let logo = document.querySelector(".pl-c-logo");

    if (logo) {
      logo.style.padding = "0";
    }

  }

};