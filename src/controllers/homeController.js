import { homeView, workView } from '../views/homeView';

const homeController = () => {
  const app = document.getElementById('app');

  app.innerHTML = homeView();

  // Fetch the data from the github api
  fetch('https://api.github.com/users/wongsrila/repos')
    .then((res) => res.json())
    .then((data) => getData(data));

  // Store the fetched data into a function
  const ul = document.querySelector('.work__list');

  const getData = (data) => {
    // Loop the data and create a list of items
    data.map((item) => {
      let li = document.createElement('li');
      li.innerHTML += workView(item);
      ul.appendChild(li);
    });
  };
};

export default homeController;
