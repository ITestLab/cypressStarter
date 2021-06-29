
import { it } from "../../../node_modules/mocha";
import { CareerPage } from "../pages/CareerPage";
import { LandingPage } from "../pages/LandingPage";
import { ViewPage } from "../pages/ViewPage";

describe("Apply for Job Opportunity in iodine", () => {

  let careerPage: CareerPage;
  let landingPage: LandingPage;
  let viewPage: ViewPage;

  before(() => {

    careerPage = new CareerPage();
    landingPage = new LandingPage();
    viewPage = new ViewPage();
  })
  beforeEach(function () {

  })

  it('Launch the the iodine url', () => {
    cy.fixture('data/DataProvider.json').then((cd) => {
      cy.visit(cd[0].url);
      landingPage.verifyPage();
    })

  })

  it('Click the Company menu and then click on careers', () => {
    cy.fixture('data/DataProvider.json').then((cd) => {
      landingPage.clickMenu(cd[0].menu);
      landingPage.clickSubMenu(cd[0].subMenu);
      careerPage.verifyPage();
    })

  })
  it('Click the job opportunity to apply', () => {
    cy.fixture('data/DataProvider.json').then((cd) => {
      careerPage.clickOpportunity(cd[0].opportunity);
      viewPage.verifyPage();
    })
  })
  it('Click on Apply button for the oportunity opened', () => {
    cy.fixture('data/DataProvider.json').then((cd) => {
      viewPage.clickApply();
    })

  })
  it('Fill in the details required for position', () => {
    cy.fixture('data/DataProvider.json').then((cd) => {
      viewPage.fillTextBoxFields("firstName", cd[0].firstName);
      viewPage.fillTextBoxFields("lastName", cd[0].lastName);
      viewPage.fillTextBoxFields("phone", cd[0].phone);
      viewPage.fillTextBoxFields("email", cd[0].email);
      viewPage.fillTextBoxFields("streetAddress", cd[0].streetAddress);
      viewPage.fillTextBoxFields("city", cd[0].city);
      viewPage.fillTextBoxFields("zip", cd[0].zip);
      viewPage.fillTextBoxFields("dateAvailable__cpFacade", cd[0].dateAvailable);
      viewPage.fillTextBoxFields("desiredPay", cd[0].desiredPay);
      viewPage.fillTextBoxFields("referredBy", cd[0].referredBy);
      viewPage.selectDropDownField("CandidateField--state", cd[0].state);
      viewPage.selectDropDownField("CandidateField--countryId", cd[0].country);
      viewPage.selectDropDownField("CandidateField--educationLevelId", cd[0].heo);
      viewPage.enterTextArea(0, cd[0].authorize);
      viewPage.enterTextArea(1, cd[0].visa);
      viewPage.enterTextArea(2, cd[0].gpa);
      viewPage.enterTextArea(3, cd[0].oppor);
    })

  })

  it('Click On Cancel button', () => {
    viewPage.clickCancel();
  })
  it('System navigates back to previous page', () => {
    viewPage.verifyPage();
  })


})
