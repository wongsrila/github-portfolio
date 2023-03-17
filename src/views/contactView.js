import headerView from './partials/headerView';
import linesView from './partials/linesView';
import footerView from './partials/footerView';

const contactView = () => {
  return /*html*/ `
    ${headerView()}
    ${linesView()}
    <main>
      <section class="section__jumbo">
        <h1>CONTACT</h1>
        <p class="sub-text">Mijn naam is First Wongsrila en woon in Amsterdam. Ik ben 22 jaar oud en ben een vierdejaars student Communicatie & Multimedia Design aan de Hoge School van Amsterdam. Ik ben een creatief, ondernemend persoon die een oog voor detail heeft. Leergierig is hoe je mij als persoon kan noemen.</p>
      </section>
      <section class="section__work">
        <ul class="work__list"></ul>
      </section>
    </main>
    ${footerView()}
  `;
};

export default contactView;
