// import homePage from '../controllers/homeController.js';
// import workPage from '../controllers/workController.js';

routie({
  '': () => {
    homePage();
  },
  work: () => {
    workPage();
  },
});

export default routie;
