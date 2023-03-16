import headerView from './partials/headerView.js';
import linesView from './partials/linesView.js';
import footerView from './partials/footerView.js';

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
          <p>JOSEPH [2023]</p>
          <p>AWARD-WINNING STUDIO</br>
            STORYTELLING,</br>
            BRANDING,</br>
            DESIGN & WEBSITES</p>
        </article>
      </section>
    </main>
    ${footerView()}
  `;
};

export default homeView;
