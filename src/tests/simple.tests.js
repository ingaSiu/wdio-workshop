const { pages } = require('./../po');

describe('Doctors page', () => {
  beforeEach(async () => {
    await pages('dashboard').open();
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

    await pages('dashboard').sideMenu.item('doctors').click();

    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();

    await expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed();
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

    await pages('dashboard').sideMenu.item('doctors').click();

    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();

    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();

    await pages('doctors').addDoctorModal.input('name').setValue('John Doe');
    await pages('doctors').addDoctorModal.input('phone').setValue('1234567890');
    await pages('doctors').addDoctorModal.input('email').setValue('test@test.com');
    await pages('doctors').addDoctorModal.input('education').setValue('Basic');
    await pages('doctors').addDoctorModal.input('designation').setValue('Test');

    await pages('doctors').addDoctorModal.saveBtn.click();

    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

    pages('doctors').specialistCard(8).name;
    await expect(pages('doctors').specialistCard(8).name.toHaveText('Dr. John Doe'));
    await expect(pages('doctors').specialistCard(8).education.toHaveText('Basic', { ignoreCase: true }));
  });

  it('Closes the modal window', async () => {
    await pages('dashboard').sideMenu.item('doctors').click();

    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();

    await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();

    await pages('doctors').addDoctorModal.closeBtn.click();

    await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
