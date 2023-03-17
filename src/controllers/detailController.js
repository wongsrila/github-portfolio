import detailView from '../views/detailView';

const detailController = (id) => {
  const app = document.getElementById('app');

  fetch(`https://api.github.com/repos/wongsrila/${id}`)
    .then((res) => res.json())
    .then((data) => getData(data));

  const getData = (data) => {
    app.innerHTML = detailView(data);
  };
};

export default detailController;
