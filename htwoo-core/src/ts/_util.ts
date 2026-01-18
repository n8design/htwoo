/**
 * Custom select element extension for HTML UL elements
 */
class PnpSelect extends HTMLUListElement {
  constructor() {
    super();
  }
}

// Register the custom element
const customElement = window.customElements.define("pnp-select", PnpSelect, {extends: "li"});

export { PnpSelect };
