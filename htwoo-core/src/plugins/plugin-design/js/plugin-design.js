'use strict';
/* global PluginUIExtension, pluginDesign */

var PluginUIExtension = {

  /**
   * The function defined as the onready callback within the plugin configuration.
   */
  init: function () {

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

    let logoLink = document.querySelector("a.pl-c-logo");

    if(logoLink){
      logoLink.href = "https://lab.n8d.studio/htwoo/";
    }

  }

};