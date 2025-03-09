const Header = require('../components/common/header.component');
const SideMenuComponent = require('../components/common/sidemenu.component');
class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.sideMenu = new SideMenuComponent();
  }
  open() {
    return browser.url(this.url);
  }
}

module.exports = BasePage;
