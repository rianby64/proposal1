;(() => {
  'use strict';
  var ownerDocument = document.currentScript.ownerDocument;

  class TagA extends HTMLElement {
    constructor() {
      super();
    }

    createdCallback() {
      var template = ownerDocument.querySelector('template'),
          clone = document.importNode(template.content, true),
          shadow = this.createShadowRoot();

      shadow.appendChild(clone);
    }
  }

  document.registerElement('tag-a', TagA);

})();
