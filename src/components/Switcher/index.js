import './switcher.css';
import Input from '../Input';

class Switcher {
  constructor(props) {
    this.onChange = props.onChange;
  }

  createInput() {
    const input = new Input({
      label: '',
      type: 'checkbox',
      onChange: (e) => this.onChange(e),
    }).render();
    input.classList.add('switch__input');

    return input;
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.textContent = 'ReadOnly Mode';
    wrapper.className = 'switch-wrapper';
    const label = document.createElement('label');
    const span = document.createElement('span');

    label.className = 'switch';
    span.className = 'switch__slider round';

    label.append(
      this.createInput(),
      span,
    );

    wrapper.append(
      label,
    );

    return wrapper;
  }
}

export default Switcher;