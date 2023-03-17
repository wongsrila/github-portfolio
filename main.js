import homeController from './src/controllers/homeController.js';
import detailController from './src/controllers/detailController.js';
import workController from './src/controllers/workController.js';
import contactController from './src/controllers/contactController.js';
import './style.css';

routie({
  '': () => {
    homeController();
  },
  work: () => {
    workController();
  },
  'work/:id': (id) => {
    detailController(id);
  },
  contact: () => {
    contactController();
  },
});

export default routie;
