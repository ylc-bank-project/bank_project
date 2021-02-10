import { activitiesEnums } from "./enums";

const SignIn = {
  intro:
    "In this activity, you will learn how to sign-in to an online back account. You will be prompted with a white box with an orange border giving you the how to steps to sign-in. No personal information will be required. The information used is not a real bank account, it is an example for learning purposes.",
  outro:
    "You did it! You now know how to sign-in to online banking. If you have any questions or concerns about signing into your online bank account, contact your bank provider for help.",
};

const AccountOverview = {
  intro:
    "In this activity, you will learn how to read all the different parts to an online bank account. You will be prompt with a white box with an orange border giving you different steps to review your account. No personal information will be required. The information used is not a real bank account, it is an example for learning purposes.",
  outro:
    "That’s it! You’ve now learned about the features of an online bank account.",
};
const MakingPayments = {
  intro:
    "In this activity, you owe Taco Electric $68.00. You're going to pay them using Online Banking. You've never paid Taco Electric online before, so first you need to set them up as a new recipient.",
  outro: "You now know how to add a new payee and pay a bill online.",
};

export default {
  [activitiesEnums.SIGNIN]: SignIn,
  [activitiesEnums.ACCOUNTOVERVIEW]: AccountOverview,
  [activitiesEnums.MAKINGPAYMENTS]: MakingPayments,
};
