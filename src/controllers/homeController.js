import homeView from '../views/homeView.js';

const homeController = () => {
  const app = document.getElementById('app');

  app.innerHTML = homeView();
};

export default homeController;
