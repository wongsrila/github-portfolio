import { workView, workListView } from '../views/workView';

const workController = () => {
  const app = document.getElementById('app');

  app.innerHTML = workView();

  // Fetch the data from the github api
  fetch('https://api.github.com/users/wongsrila/repos')
    .then((res) => res.json())
    .then((data) => getData(data));

  // Store the fetched data into a function
  const ul = document.querySelector('.work__list');

  const getData = (data) => {
    // Loop the data and create a list of items
    data.forEach((item) => {
      let li = document.createElement('li');
      li.innerHTML += workListView(item);
      ul.appendChild(li);
    });
  };
};

export default workController;
