// ACTIVITIES
export const activitiesEnums = {
  TRANSFERFUNDS: "TransferFunds",
  ETRANSFER: "ETransfer",
  CREATINGACCOUNT: "CreatingAccount",
  SIGNIN: "SignIn",
  ACCOUNTOVERVIEW: "AccountOverview",
  MAKINGPAYMENTS: "MakingPayments",
};

// PAGES
export const bankPageEnums = {
  BANKHOMEPAGE: "BankHomepage",
  SIGNIN: "SignIn",
  ACCOUNTREGISTRATION: "AccountRegistration",
  PHONEVERIFICATION: "PhoneVerification",
  CREATEEMAIL: "CreateEmail",
};

export const accountPagesEnums = {
  ACCOUNTS: "Accounts",
  ALLACCOUNTS: "AllAccounts",
  CHECKINGHOME: "CheckingHome",
  CHECKINGINFO: "CheckingInfo",
  CHECKINGTRANSACTIONS: "CheckingTransactions",
};

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

// ACCOUNT OVERVIEW
export const overviewEnums = {
  check: "check",
  balance: "balance",
  accountInfo: "accountInfo",
  hold: "hold",
  overdraft: "overdraft",
  available: "available",
  institution: "institution",
  transit: "transit",
  accountNumber: "accountNumber",
  transactions: "transactions",
  wellRead: "wellRead",
  taco: "taco",
  internetDeposit: "internetDeposit",
  preAuth: "preAuth",
  totalDebits: "totalDebits",
  credits: "credits",
  creditsDebits: "creditsDebits",
};

// All steps array for sequence
export const overviewSteps = [
  overviewEnums.check,
  overviewEnums.balance,
  overviewEnums.accountInfo,
  overviewEnums.hold,
  overviewEnums.overdraft,
  overviewEnums.available,
  overviewEnums.institution,
  overviewEnums.transit,
  overviewEnums.accountNumber,
  // TODO: Where does transactions start?
  overviewEnums.transactions,
  overviewEnums.wellRead,
  overviewEnums.taco,
  overviewEnums.internetDeposit,
  overviewEnums.preAuth,
  overviewEnums.totalDebits,
  overviewEnums.credits,
  overviewEnums.creditsDebits,
];
