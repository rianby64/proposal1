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

      // The tag-b will fire a custom message 'superyes'
      // through an event
      var tagB = shadow.querySelector('tag-b');
      tagB.addEventListener('yes', (e) => {
        e.stopPropagation(); // stop this because I want to
                             // send another message
        e.target.dispatchEvent(new CustomEvent('superyes', {
          detail: {
            message: `SUPER${e.detail.message}`
          }
        }));
      });
    }
  }

  document.registerElement('tag-a', TagA);

})();
