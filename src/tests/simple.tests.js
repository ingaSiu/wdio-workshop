describe('Doctors page', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
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

    const myButton = await $('[routerlink="/doctors"]');
    await myButton.click();

    await $('.specialization-types button.e-control').click();

    await expect($('.new-doctor-dialog .e-dlg-modal')).toBeDisplayed();
  });
});
