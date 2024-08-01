/**
 * HTMLX.JS
 * (c) DecOps Decentralized Operations
 */
const HTMLX = {
  init() {
    document.body.addEventListener('click', this.handleClick.bind(this));
    this.processElements(document.body);
  },

  processElements(root) {
    root.querySelectorAll('[lmx-trigger]').forEach((el) => {
      const triggerType = el.getAttribute('lmx-trigger');
      if (triggerType && !el.dataset.lmxProcessed) {
        el.addEventListener(triggerType, this.handleTrigger.bind(this, el));
        el.dataset.lmxProcessed = 'true';
      }
    });
  },

  handleClick(e) {
    const target = e.target.closest('[lmx-trigger="click"]');
    if (target) {
      this.handleTrigger(target, e);
    }
  },

  handleTrigger(el, event) {
    const target = el.getAttribute('lmx-target');
    const swap = el.getAttribute('lmx-swap') || 'innerHTML';
    const templateId = el.getAttribute('lmx-template');

    if (target && templateId) {
      const targetEl = document.querySelector(target);
      const template = document.getElementById(templateId);
      if (targetEl && template) {
        const content = template.content.cloneNode(true);
        this.swapContent(targetEl, content, swap);
        this.processElements(targetEl);
      }
    }
  },

  swapContent(target, content, swapType) {
    switch (swapType) {
      case 'innerHTML':
        target.innerHTML = '';
        target.appendChild(content);
        break;
      case 'outerHTML':
        target.outerHTML = content.firstElementChild.outerHTML;
        break;
      case 'beforebegin':
        target.parentNode.insertBefore(content, target);
        break;
      case 'afterend':
        target.parentNode.insertBefore(content, target.nextSibling);
        break;
      // Add more swap types as needed
    }
  },
};

// Initialize HTMLX when the DOM is ready
document.addEventListener('DOMContentLoaded', () => HTMLX.init());
