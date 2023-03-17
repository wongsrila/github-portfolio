import contactView from '../views/contactView';

const contactController = () => {
  const app = document.getElementById('app');

  app.innerHTML = contactView();
};

export default contactController;
