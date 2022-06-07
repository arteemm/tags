import { Header, Tag } from '../components';

class App {
  constructor() {
    this.tagList = [];
    this.tagListElem = document.createElement('div');
  }

  createHeader() {
    const header = new Header({
      onClick: this.handleClick,
    }).render();

    return header;
  }

  createTag(value) {
    const tag = new Tag({
      label: value,
    });

    return tag
  }

  handleClick(value) {
    const tag = this.createTag(value);

    this.tagListElem.append(tag);
  }

  render() {
    const main = document.getElementById('root');

    main.append(
      this.createHeader(),
      this.tagListElem,
    );
    
    return main;
  }
}

export default App;