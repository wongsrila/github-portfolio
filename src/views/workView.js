import headerView from './partials/headerView';
import linesView from './partials/linesView';
import footerView from './partials/footerView';

const workView = () => {
  return /*html*/ `
    ${headerView()}
    ${linesView()}
    <main>
      <section class="section__jumbo">
        <h1>WORK</h1>
        <p class="sub-text">DIGITAL STUDIO MAKING DREAMS COME TRUE. FROM BRANDING TO WEBSITES AND WE DESIGN, BUILD AND GROW BUSINESSES</p>
      </section>
      <section class="section__work">
        <ul class="work__list"></ul>
      </section>
    </main>
    ${footerView()}
  `;
};

const workListView = (item) => {
  return /*html*/ `
    <a href="#work/${item.name}">${item.name}</a>
  `;
};

export { workView, workListView };
