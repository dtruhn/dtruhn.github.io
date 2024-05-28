function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <nav id="desktop-nav">
        <div class="logo">
          <a href="index.html">truhn.ai</a>
        </div>
        <div>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="our-research.html">Research</a></li>
            <li><a href="funding.html">Funding</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
      <div class="logo">
      <a href="index.html">truhn.ai</a>
    </div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li>
              <a href="index.html" onclick="toggleMenu()">Home</a>
            </li>
            <li><a href="team.html" onclick="toggleMenu()">Team</a></li>
            <li>
              <a href="our-research.html" onclick="toggleMenu()">Research</a>
            </li>
            <li>
              <a href="funding.html" onclick="toggleMenu()">Funding</a>
            </li>
            <li>
              <a href="contact.html" onclick="toggleMenu()">Contact</a>
            </li>
            <li>
              <a href="impressum.html" onclick="toggleMenu()">Impressum</a>
            </li>
          </div>
        </div>
      </nav>
  `;
  }
}

customElements.define("header-component", Header);

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="footer-content">
      <a href="impressum.html">Impressum</a>
      <a href="https://twitter.com/laim_uka">
        <img src="assets/x-logo.svg" alt="Twitter" />
      </a>
    </div>
  </footer>
  `;
  }
}

customElements.define("footer-component", Footer);