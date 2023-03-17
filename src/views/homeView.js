import headerView from './partials/headerView';
import linesView from './partials/linesView';
import footerView from './partials/footerView';

const homeView = () => {
  return /*html*/ `
    ${headerView()}
    ${linesView()}
    <main>
      <section class="section__jumbo">
        <h1>CREATIVE DEVELOPER</h1>
        <p class="sub-text">DIGITAL STUDIO MAKING DREAMS COME TRUE. FROM BRANDING TO WEBSITES AND WE DESIGN, BUILD AND GROW BUSINESSES</p>
      </section>
      <section class="section__banner">
        <img src="./home_bg.jpg"/>
        <article>
          <p>// OPEN TO WORK</p>
          <p>FIRST [2023]</p>
          <p>AWARD-WINNING STUDIO</br>
            STORYTELLING,</br>
            BRANDING,</br>
            DESIGN & WEBSITES</p>
        </article>
      </section>
      <section class="section__work">
        <h2>WORK</h2>
        <ul class="work__list"></ul>
      </section>
    </main>
    ${footerView()}
  `;
};

const workView = (item) => {
  return /*html*/ `
    <a href="#work/${item.name}">${item.name}</a>
    <p>${item.topics}</p>
  `;
};

export { homeView, workView };
