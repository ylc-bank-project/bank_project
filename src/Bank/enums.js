export const activitiesEnums = {
  TRANSFERFUNDS: "TransferFunds",
  ETRANSFER: "ETransfer",
  CREATINGACCOUNT: "CreatingAccount",
  SIGNIN: "SignIn",
  ACCOUNTOVERVIEW: "AccountOverview",
  MAKINGPAYMENTS: "MakingPayments",
};

export const bankPageEnums = {
  BANKHOMEPAGE: "BankHomepage",
  SIGNIN: "SignIn",
  ACCOUNTREGISTRATION: "AccountRegistration",
  PHONEVERIFICATION: "PhoneVerification",
  CREATEEMAIL: "CreateEmail",
};

// ACTIVITIES
// SIGNIN
export const signInEnums = {
  CLICKSIGNIN: "ClieckSignIn",
  ENTERCARD: "EnterCard",
  ENTERPW: "EnterPw",
  NEVERSHARE: "NeverShare",
  SAVECARD: "SaveCard",
};

export const signInSteps = [
  signInEnums.CLICKSIGNIN,
  signInEnums.ENTERCARD,
  signInEnums.ENTERPW,
  signInEnums.NEVERSHARE,
  signInEnums.SAVECARD,
];

// CREATE ACCOUNT
export const createEnums = {
  GOTOREGISTER: "GoToRegister",
  ENTERCARD: "EnterCard",
  ENTERPHONE: "EnterPhone",
  CLICKREGISTER: "ClickRegister",
  ENTERVERIFICATIONCODE: "EnterVerificationCode",
  CONFIRMVERIFICATION: "ConfirmVerification",
  ENTEREMAIL: "EnterEmail",
  CREATEPASSWORD: "CreatePassword",
  REENTERPW: "REENTERPW",
};

export const createSteps = [
  createEnums.GOTOREGISTER,
  createEnums.ENTERCARD,
  createEnums.ENTERPHONE,
  createEnums.CLICKREGISTER,
  createEnums.ENTERVERIFICATIONCODE,
  createEnums.CONFIRMVERIFICATION,
  createEnums.ENTEREMAIL,
  createEnums.CREATEPASSWORD,
  createEnums.REENTERPW,
];
