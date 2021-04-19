/* global PluginUIExtension */
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

  }
};