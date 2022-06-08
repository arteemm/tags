import './header.css';
import Form from '../Form';
import Switcher from '../Switcher';

class Header {
  constructor(props) {
    this.onClick = props.onClick;
    this.onChange = props.changeMode;
  }

  createForm() {
    const form = new Form({
      onSubmit: this.onClick,
    }).render();

    return form;
  }

  createSwitcher() {
    const switcher = new Switcher({
      onChange: this.onChange,
    }).render();

    return switcher;
  }

  render() {
    const component = document.createElement('header');
    component.className = 'header';

    component.append(
      this.createForm(),
      this.createSwitcher(),
    );

    return component;
  }
}

export default Header;
