import Form from './Form';

class Header {
  constructor(props) {
    this.onClick = props.onClick;
  }

  createForm() {
    const form = new Form({
      onSubmit: this.onClick,
    }).render();

    return form;
  }

  render() {
    const component = document.createElement('header');
    component.className = 'header';

    component.append(
      this.createForm(),
    );

    return component;
  }
}

export default Header;
