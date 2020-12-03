import { activitiesEnums } from "./enums";

const SignIn = {
  intro:
    "When you click start from the first screen, a box comes up saying what you’ll do in this exercise. We like how this is set up. We’d like to keep this box the same info minus “and memorable information”. However, for copyright purposes, the wording would have to be changed a little.",
  outro:
    "That’s it! You’ve now signed into online banking. If you have any questions about signing into your bank account online, please contact your bank provider.",
};

const AccountOverview = {
  intro:
    "When you click start for this activity, a box comes up saying what you’ll do in this exercise. We like how this is set up. ‘In this exercise we’ll guide you through viewing an online back account’",
  outro:
    "That’s it! You’ve now learned about the features of an online bank account. Want to learn more?",
};
const MakingPayments = {
  intro:
    "In this activity, you owe Taco Electric $68.00. You're going to pay them using Online Banking. You've never paid Taco Electric online before, so first you need to set them up as a new recipient.",
  outro:
    "You now know how to add a new payee and pay a bill online. Want to learn more?",
};

export default {
  [activitiesEnums.SIGNIN]: SignIn,
  [activitiesEnums.ACCOUNTOVERVIEW]: AccountOverview,
  [activitiesEnums.MAKINGPAYMENTS]: MakingPayments,
};
