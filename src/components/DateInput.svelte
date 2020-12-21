<script lang="ts">
  let class_name = '';
  export let placeholder: string;
  export let backgroundColor: string;
  export let name: string;
  export { class_name as class };
</script>

<div class="TPInput {class_name}">
  <svg
    style="fill: {backgroundColor};"
    class="TPInput__icon"
    width="15"
    height="17"
    xmlns="http://www.w3.org/2000/svg">
      <path d="M2 7.998s.002 7.25 0 7.002l11.003-.001c-.002 0-.006-7-.006-7L2 7.998zM8 11h4v3H8v-3zm7-5v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6h15zm-3-4V1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1H6V1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1H2a2 2 0 0 0-2 2h15a2 2 0 0 0-2-2h-1z" fill-rule="evenodd"/>
  </svg>
  <input
    class="TPInput__input"
    name="{name}"
    placeholder={placeholder}
  />
</div>

<style global>
  .TPInput {
    position: relative;
  }

  .TPInput__input {
    line-height: 40px;
    box-sizing: border-box;
    border: none;
    padding: 0 35px 0 10px;
    border-radius: 2px;
    width: 100%;
  }

  .TPInput__icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
