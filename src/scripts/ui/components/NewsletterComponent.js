export default class NewsLetterComponent {
  constructor({ selector, emailValidator }) {
    this.element = document.querySelector(selector);
    this.emailValidator = new emailValidator();
  }

  _handleInvalidField(email, element) {
    if(!this.emailValidator.handle(email)) {
      this._changeInputState(element, 'invalid', 'O E-mail fornecido tem um formato inválido');
    }
    else {
      this._changeInputState(element, 'valid', 'Email Válido');
    }
  }

  _changeInputState(element, state, message) {
    if(state === 'valid') {
      element.classList.remove('form__control--invalid');
      element.classList.add('form__control--valid');
      element.nextElementSibling.classList.remove('form__message--invalid');
      element.nextElementSibling.classList.add('form__message--valid');
      element.nextElementSibling.innerHTML = message;
    }
    else {
      element.classList.remove('form__control--valid');
      element.classList.add('form__control--invalid');
      element.nextElementSibling.classList.remove('form__message--valid');
      element.nextElementSibling.classList.add('form__message--invalid');
      element.nextElementSibling.innerHTML = message;
    }
  }

  template() {
    return (`
      <form class="form">
        <div class="form__group">
          <label class="form__label" for="name">Nome do seu amigo:</label>
          <input type="text" class="form__control" id="name" />
        </div>
        <div class="form__group">
          <label class="form__label" for="email">E-mail:</label>
          <input type="text" class="form__control" id="email" data-js="validateEmail" />
          <span class="form__message"></span>
        </div>
        <div class="form__submit">
          <button class="button button--primary button--xl">
            Enviar Agora
          </button>
        </div>
      </form>
    `);
  }

  render() {
    this.element.innerHTML = this.template();
    this.element
      .querySelector('[data-js="validateEmail"]')
      .addEventListener('change', (event) => {
        const email = event.target.value;

        this._handleInvalidField(email, event.target);
      });
  }
}
