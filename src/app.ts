import Form from './components/Form.svelte';

// If something wrong with parsing, throw
const props = JSON.parse(
  Array.prototype.find.call(document.querySelectorAll('script'), script => script.type === 'initial-props').innerHTML
);

(window as any).app = new Form({
  target: document.body,
  props
});
