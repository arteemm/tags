import './styles/style.css';
import App from './App';


const app = new App();
app.render();

if (app.tagList) {
  app.showTags();
}
