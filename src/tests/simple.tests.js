describe('Doctors page', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
  });

  it('Check page title', async () => {
    const title = await browser.getTitle();
    console.log(title);

    if (title !== 'Appointment Planner - Syncfusion Angular Components Showcase App') {
      throw new Error('Page title is not correct');
    }
  });
});
