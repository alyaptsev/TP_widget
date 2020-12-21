<script lang="ts">
  import DateInput from './DateInput.svelte';

  export let textColor: string;
  export let buttonColor: string;
  export let backgroundColor: string;
  export let i18n: TPFormI18nTokens;

  function onSubmit (event: Event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(Object.fromEntries(data));
	}
</script>

<div
  class="TPForm"
  style="background: {backgroundColor}; color: {textColor};"
>
  <h1 class="TPForm__title">{i18n.title}</h1>
  <div class="TPForm__form-wrapper">
    <p class="TPForm__description">{i18n.description}</p>
    <form class="TPForm__form" on:submit={onSubmit}>
      <div class="TPForm__inputs">
        <DateInput
          class="TPForm__input"
          backgroundColor={backgroundColor}
          name="departDate"
          placeholder="{i18n.departPlaceholder}"
        />
        <DateInput
          class="TPForm__input"
          backgroundColor={backgroundColor}
          name="returnDate"
          placeholder="{i18n.returnPlaceholder}"
        />
      </div>
      <button
        class="TPForm__submit"
        style="background: {buttonColor}; color: {textColor};"
      >
        {i18n.button}
      </button>
    </form>
  </div>
</div>

<style global>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  .TPForm {
    max-width: 1024px;
    min-width: 200px;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    padding: 2px 20px 15px 20px;
  }

  .TPForm__title {
    margin: 10px;
    font-weight: 400;
    font-size: 22px;
    margin: 0;
    margin-bottom: 20px;
  }

  .TPForm__description {
    font-size: 8px;
    line-height: 12px;
    margin: 0;
    flex-shrink: 1;
    flex-grow: 1;
    max-width: 280px;
  }

  .TPForm__form-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .TPForm__form {
    display: flex;
    justify-content: space-between;
    margin: 0;
    margin-left: 25px;
    flex-grow: 1;
  }

  .TPForm__inputs {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }

  .TPForm__input {
    min-width: 150px;
    max-width: 200px;
    width: 100%;
    flex-grow: 1;
  }

  .TPForm__input + .TPForm__input {
    margin-left: 15px;
  }

  .TPForm__submit {
    height: 40px;
    box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, .1);
    border: none;
    border-radius: 2px;
    text-transform: uppercase;
    min-width: 150px;
    max-width: 240px;
    width: 100%;
    font-size: 20px;
    margin-left: 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .TPForm__form-wrapper {
      flex-wrap: wrap;
    }

    .TPForm__form {
      margin-left: 0;
      margin-top: 20px;
    }

    .TPForm__description {
      max-width: 100%;
    }

    .TPForm__input {
      max-width: 220px;
      min-width: 150px;
    }
  }

  @media (max-width: 540px) {
    .TPForm {
      padding-top: 10px;
    }

    .TPForm__title {
      font-size: 16px;
    }

    .TPForm__form {
      flex-wrap: wrap;
    }

    .TPForm__input {
      min-width: 150px;
    }

    .TPForm__submit {
      margin-left: 0;
      margin-top: 20px;
      max-width: 100%;
      min-width: 150px;
    }
  }

  @media (max-width: 400px) {
    .TPForm__title {
      margin: 0;
    }

    .TPForm__form-wrapper {
      flex-direction: column-reverse;
    }

    .TPForm__description {
      margin: 15px 0 20px 0;
    }

    .TPForm__inputs {
      flex-wrap: wrap;
    }

    .TPForm__input {
      max-width: 100%;
    }

    .TPForm__input + .TPForm__input {
      margin: 0;
      margin-top: 15px;
    }

    .TPForm__submit {
      margin-top: 15px;
    }
  }
</style>
