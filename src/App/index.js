import { Header, Button } from '../components';
import ViewTags from '../View/ViewTags';

class App {
  constructor() {
    this.tagArr = this.getLocalStorage() || [];
    this.tagListElem = document.createElement('div');
    this.viewTags = new ViewTags(this.tagListElem);
    this.isReadOnlyMode = false;
  }

  get tagList() {
    return this.tagArr;
  }

  changeMode(e) {
    this.isReadOnlyMode = (e.target.checked);
    document.querySelectorAll('.control').forEach(item => {
      const button = item;
      button.disabled = this.isReadOnlyMode;
    });
  }

  createHeader() {
    const header = new Header({
      onClick: this.handleClick.bind(this),
      changeMode: this.changeMode,
    }).render();

    return header;
  }

  deleteTag(id) {
    this.tagList.splice(id, 1);
    this.showTags();
  }

  setLocalStorage() {
    const tagList = JSON.stringify(this.tagList);
    localStorage.setItem('tagList', tagList);
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('tagList'));
  }

  clearTagList() {
    this.tagList.length = 0;
    this.viewTags.clearTags();
    localStorage.removeItem('tagList');
  }

  createSaveButton() {
    const button = new Button({
      label: 'save',
      type: 'button',
      onClick: this.setLocalStorage.bind(this),
    }).render();

    return button;
  }

  createClearButton() {
    const button = new Button({
      label: 'clear',
      type: 'button',
      onClick: this.clearTagList.bind(this),
    }).render();

    return button;
  }

  showTags() {
    this.viewTags.showTags({
      tagsArr: this.tagList,
      onClick: this.deleteTag.bind(this),
    });
  }

  handleClick(value) {
    this.tagList.push(value);
    this.showTags();
  }

  render() {
    const main = document.getElementById('root');

    main.append(
      this.createHeader(),
      this.tagListElem,
      this.createSaveButton(),
      this.createClearButton(),
    );
    
    return main;
  }
}

export default App;