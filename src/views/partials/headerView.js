const headerView = () => {
  return /*html*/ `
    <header>
      <span class='nav__logo'><a href="#">FIRST WONGSRILA</a></span>
      <nav> 
        <ul>
          <li><input type="checkbox" name="menu" id="menu" /><label for="menu">MENU</label></li>
        </ul>
        <section class="nav__menu">
          <ul>
            <li><a href="/#">HOME</a></li>
            <li><a href="/#work">WORK</a></li>
            <li><a href="/#services">SERVICES</a></li>
            <li><a href="/#blog">BLOG</a></li>
            <li><a href="/#contact">CONTACT</a></li>
          </ul>
        </section>
      </nav>
    </header>
  `;
};

export default headerView;
