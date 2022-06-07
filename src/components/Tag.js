import Button from './Button';

class Tag {
  constructor(props) {
    this.label = props.label;
    this.onClick = props.onClick;
  }

  createButton() {
    const button = new Button({
      label: 'x',
      type: 'button',
      onClick: this.onClick,
    });
    button.classList.add = 'icon';

    return button;
  }

  render() {
    const component = document.createElement('div');
    component.className = 'tags__item';
    component.textContent = this.label;

    component.append(
      this.createButton(),
    )

    return component;
  }
}

export default Tag;