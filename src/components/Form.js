import Button from './Button';
import Input from './Input';

class Form {
  constructor(props) {
    this.OnSubmit = props.onSubmit;
    this.inputValue = '';
    this.onChange = (e) => this.setInputValue(e.target.value);
    this.clearInput = null;
  }

  setInputValue(value) {
    this.inputValue = value;
  }

  createInput() {
    const input = new Input({
      label: 'Add',
      type: 'text',
      onChange: this.onChange,
     }).render();

     this.clearInput = () => { input.value = ''; };

    return input;
  }

  createButton() {
    const button = new Button({
      label: 'Add',
      type: 'submit',
    }).render();

    return button;
  }

  handleSubmit(e) {
    e.preventDefault();

    this.OnSubmit(this.inputValue);
    this.clearInput();
  }

  createLabel() {
    const label = document.createElement('label');
    label.className = 'form__label';
    label.textContent = 'Add new tag';

    label.append(
      this.createInput(),
    );

    return label;
  }

  render() {
    const component = document.createElement('form');
    component.className = 'header__form form';

    component.append(
      this.createLabel(),
      this.createButton(),
    );

    
    component.addEventListener('submit', this.handleSubmit.bind(this));
    

    return component;
  }
}

export default Form;