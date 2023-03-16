import homeController from './src/controllers/homeController.js';
import './style.css';

routie({
  '': () => {
    homeController();
  },
  work: () => {
    console.log('work');
  },
});

export default routie;
