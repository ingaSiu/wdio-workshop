const DashboardPage = require('./../po/pages/dashboard.page');
const dashboardPage = new DashboardPage();

describe('Doctors page', () => {
  beforeEach(async () => {
    await dashboardPage.open();
  });

  it('Check page title', async () => {
    // const title = await browser.getTitle();
    // console.log(title);
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('Open modal for adding a new doctor', async () => {
    // click on doctors item in the side menu
    // click on add new doctor button - locate it by a unique identifier first
    // check that a modal window is displayed

    await dashboardPage.sideMenu.item('doctors').click();

    await $('.specialization-types button.e-control').click();

    await expect($('.new-doctor-dialog .e-dlg-modal')).toBeDisplayed();
  });

  it('Add new doctor', async () => {
    // clcik on doctors menu item
    // click on add new doctor btn
    // wait for visibility of modal window
    // fill in the form -  first find all the selectors from the fields
    // search by attributes (name,id, etc)
    // if item has id attrtibute, always use it
    // click submit btn
    // verify that modal window dissapears
    // verify that new doctor is added to the list

    await dashboardPage.sideMenu.item('doctors').click();

    await $('.specialization-types button.e-control').click();

    await $('.new-doctor-dialog .e-dlg-modal').waitForDisplayed();

    await $('[name="Name"]').setValue('John Doe');
    await $('#DoctorMobile').setValue('1234567890');
    await $('[name="Email"]').setValue('test@test.com');
    await $('[name="Education"]').setValue('Basic');
    await $('[name="Designation"]').setValue('Test');

    await $('.e-footer-content button.e-primary').click();

    await expect($('.new-doctor-dialog .e-dlg-modal')).not.toBeDisplayed();

    await expect($('#Specialist_8').$('.name').toHaveText('Dr. John Doe'));
    await expect($('#Specialist_8').$('.education').toHaveText('Basic', { ignoreCase: true }));
  });

  it('Closes the modal window', async () => {
    await dashboardPage.sideMenu.item('doctors').click();

    await $('.specialization-types button.e-control').click();

    await $('.new-doctor-dialog').waitForDisplayed();

    await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();

    await expect($('.new-doctor-dialog')).not.toBeDisplayed();
  });
});
