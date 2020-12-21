import type { IFrameWindow } from './types'

let defaultI18n: TPFormI18nTokens = {
  title: 'Where does it come from? Why do we use it?',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  departPlaceholder: 'Depart date',
  returnPlaceholder: 'Return date',
  button: 'Search'
};
let props = {
  textColor: '#fff',
  buttonColor: '#f5a623',
  backgroundColor: '#4a90e2',
  i18n: defaultI18n
};
let iFrame: HTMLIFrameElement | null = null;

window.TPForm = {
  set (newProps: TPFormInitProps) {
    for (let prop in newProps) {
      // Replace only existing props
      if (props[prop]) {
        typeof props[prop] === 'object'
          ? props[prop] = { ...props[prop], ...newProps[prop] }
          : props[prop] = newProps[prop];
      }
    }

    return this;
  },
  update () {
    if (!iFrame) return;

    (iFrame.contentWindow as IFrameWindow).app.$set(props);
  },
  destroy () {
    if (!iFrame) return;

    (iFrame.contentWindow as IFrameWindow).app.$destroy();
    iFrame.remove();
    iFrame = null;
  },
  render (root = 'body') {
    if (iFrame) return;

    iFrame = document.createElement('iframe');
    iFrame.onload = () => {
      // Reset default styles in iframe
      const styles = document.createElement('style');
      styles.innerHTML = `
        body {
          margin: 0;
        }
      `;
      iFrame.contentDocument.head.appendChild(styles);

      // Add initial props
      const initialPropsScript = document.createElement('script');
      initialPropsScript.type = 'initial-props';
      initialPropsScript.innerHTML = JSON.stringify(props);
      iFrame.contentDocument.body.appendChild(initialPropsScript);

      // Load app script
      const appScript = document.createElement('script');
      appScript.src = 'app.js';
      iFrame.contentDocument.body.appendChild(appScript);
    };
    iFrame.setAttribute('id', 'frame');
    iFrame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-forms');
    const target = document.querySelector(root) || document.body;

    target.append(iFrame);
  }
};
