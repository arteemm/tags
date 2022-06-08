import './input.css';

class Input {
  constructor(props) {
    this.type = props.type;
    this.onChange = props.onChange;
  }

  render() {
    const input = document.createElement('input');

    input.type = this.type;
    input.className = 'form__input';
    
    if (this.onChange) {
      input.addEventListener('change', this.onChange.bind(this));
    }
    
    return input;
  }
}

export default Input;