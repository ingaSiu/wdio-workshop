const BaseComponent = require('./../common/base.component');

class AddDoctorComponent extends BaseComponent {
  constructor() {
    super('.new-doctor-dialog');
  }

  get saveBtn() {
    return this.rootEl.$('.e-footer-content button.e-primary');
  }

  get closeBtn() {
    return this.rootEl.$('.new-doctor-dialog .e-dlg-closeicon-btn');
  }

  // create a common method, describe all fields in this method and then reuse this one method in the test
  // create a js document and describe all possible parameters

  /**
   *
   * @param  name {'name' | 'phone' | 'email' | 'education' | 'designation' }
   * @returns
   */
  input(name) {
    const selectors = {
      name: '[name="Name"]',
      phone: '#DoctorMobile',
      email: '[name="Email"]',
      education: '[name="Education"]',
      designation: '[name="Designation"]',
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = AddDoctorComponent;
