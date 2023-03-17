import headerView from './partials/headerView';
import linesView from './partials/linesView';
import footerView from './partials/footerView';

const detailView = (data) => {
  return /*html*/ `
    ${headerView()}
    ${linesView()}
    <main class="detail__main">
      <section class="section__jumbo">
        <h1>${data.name}</h1>
        <span class="topics">${data.topics}</span>
        <p class="sub-text">${data.description}</p>
        <a href=${
          data.html_url
        } class="btn" target=”_blank”>See project<span> ></span></a>
      </section>
    </main>
    ${footerView()}

  `;
};

export default detailView;
