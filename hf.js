function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
function hideSidebar(){
const sidebar = document.querySelector('.sidebar');
sidebar.style.display = 'none';
}

class StdHeader extends HTMLElement {
    connectedCallback() {
        fetch("/assets/header.html")
  .then((res) => res.text())
  .then((text) => {
    this.innerHTML = text;
   })
  .catch((e) => console.error(e));
    }
}

class TheorieNav extends HTMLElement {
  connectedCallback() {
      fetch("/assets/theorienav.html")
.then((res) => res.text())
.then((text) => {
  this.innerHTML = text;
 })
.catch((e) => console.error(e));
  }
}

class StdFooter extends HTMLElement {
  connectedCallback() {
      fetch("/assets/footer.html")
.then((res) => res.text())
.then((text) => {
  this.innerHTML = text;
 })
.catch((e) => console.error(e));
  }
}


customElements.define('std-head', StdHeader);
customElements.define('theorie-nav', TheorieNav);
customElements.define('std-foot', StdFooter);
