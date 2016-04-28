;(() => {
  'use strict';
  var ownerDocument = document.currentScript.ownerDocument;

  class TagB extends HTMLElement {
    constructor() {
      super();
    }

    createdCallback() {
      var template = ownerDocument.querySelector('template'),
          clone = document.importNode(template.content, true),
          shadow = this.createShadowRoot();

      shadow.appendChild(clone);

      // The button  will fire a custom message 'yes' through an event
      var button = shadow.querySelector('button');
      button.addEventListener('click', (e) => {
        e.target.dispatchEvent(new CustomEvent('yes', {
          detail: {
            message: 'YES'
          }
        }));
      });
    }
  }

  document.registerElement('tag-b', TagB);

})();
