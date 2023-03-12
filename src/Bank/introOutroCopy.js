import { activitiesEnums } from "./enums";

const SignIn = {
  intro:
    "In this activity, you will learn how to sign in to an online bank account. You will be prompted with a white box with an orange border giving you the how-to steps to sign in.",
  outro:
    "You did it! You now know how to sign in to online banking. If you have any questions or concerns about signing into your online bank account, contact your bank provider for help.",
};

const AccountOverview = {
  intro:
    "In this activity, you will learn how to read all the different pieces of an online bank account. You will be prompted with a white box with an orange border giving you the how-to steps to review your account.",
  outro:
    "That’s it! You’ve now learned about the features of an online bank account.",
};
const MakingPayments = {
  intro:
    "In this activity, you owe Taco Electric $68.00. You're going to pay them using online banking. You've never paid Taco Electric online before, so first you need to set them up as a payee.",
  outro: "You now know how to add a new payee and pay a bill online.",
};

const CreatingAccount = {
  intro:
    "In this activity you will learn how to register for an online banking account. You will be prompted with a white box with an orange border giving you the how-to steps to input information.",
  outro:
    "Now you are registered for online banking and can sign in, to access your account. ",
};

export default {
  [activitiesEnums.CREATINGACCOUNT]: CreatingAccount,
  [activitiesEnums.SIGNIN]: SignIn,
  [activitiesEnums.ACCOUNTOVERVIEW]: AccountOverview,
  [activitiesEnums.MAKINGPAYMENTS]: MakingPayments,
};
