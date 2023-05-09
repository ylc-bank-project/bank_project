//OTHER
export const TACOTITLE = "Taco Electric";
export const ACCOUNTNUMBER = "1234567";
export const CHEQUINGACCOUNT = "Chequing";
export const SAVINGSACCOUNT = "Savings";
export const BILLAMOUNT = "68.00";

// ETRANSFER SPECIFIC
export const LANDLORDNAME = "Landlord John";
export const LANDLORDEMAIL = "mylandlordjohn@email.com";
export const LANDLORDAMT = "$500";
export const SECRETQ = "what is my dogs name";
export const SECRETA = "Buster";
export const EXTRAMESSAGE = "April Rent";

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
  CHECKINGHOME: "CheckingHome",
  CHECKINGINFO: "CheckingInfo",
  CHECKINGTRANSACTIONS: "CheckingTransactions",
  SAVINGSHOME: "SavingsHome",
  SAVINGSINFO: "SavingsInfo",
  SAVINGSTRANSACTIONS: "SavingsTransactions",
  TRANSFERFUNDS: "Transfer",
};

export const paymentPagesEnums = {
  PAYMENTSHOME: "PaymentsHome",
  LISTOFPAYEES: "ListOfPayees",
  VERIFYPAYEE: "VerifyPayee",
  ADDPAYEE: "AddPayee",
  VERIFYBILL: "VerifyBill",
  ADDBILL: "AddBill",
};

export const eTransferPagesEnums = {
  ETHOME: "eTransferHome",
  ETCONTACTS: "eTransferContacts",
  ETADDCONTACT: "eTAddContact",
  SENDETRANSFER: "sendETransfer",
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
  overviewEnums.transactions,
  overviewEnums.wellRead,
  overviewEnums.taco,
  overviewEnums.internetDeposit,
  overviewEnums.preAuth,
  overviewEnums.totalDebits,
  overviewEnums.credits,
  overviewEnums.creditsDebits,
];

// MAKING PAYMENTS
export const makingPaymentsEnums = {
  clickPayments: "clickPayments",
  billPaymentsStep: "billPaymentsStep",
  addEditPayee: "addEditPayee",
  addCompanyName: "addCompanyName",
  addBillNumber: "addBillNumber",
  goToVerify: "goToVerify",
  confirmPayee: "confirmPayee",
  //  payBillNow : "payBillNow",
  chooseTaco: "chooseTaco",
  chooseDebitAccount: "chooseDebitAccount",
  enterAmount: "enterAmount",
  enterDate: "enterDate",
  reviewBillPayment: "reviewBillPayment",
  confirmBillPayment: "confirmBillPayment",
};

export const makingPaymentsSteps = [
  makingPaymentsEnums.clickPayments,
  makingPaymentsEnums.billPaymentsStep,
  makingPaymentsEnums.addEditPayee,
  makingPaymentsEnums.addCompanyName,
  makingPaymentsEnums.addBillNumber,
  makingPaymentsEnums.goToVerify,
  makingPaymentsEnums.confirmPayee,
  // NOTE: TacoAdded after confirmPayee
  makingPaymentsEnums.chooseTaco,
  makingPaymentsEnums.chooseDebitAccount,
  makingPaymentsEnums.enterAmount,
  makingPaymentsEnums.enterDate,
  makingPaymentsEnums.reviewBillPayment,
  makingPaymentsEnums.confirmBillPayment,
];

// TRANSFER FUNDS
export const transferFundsEnums = {
  clickPayTransfer: "clickPayTransfer",
  clickTransfer: "clickTransfer",
  selectChequing: "selectChequing",
  selectSavings: "selectSavings",
  enterAmount: "enterAmount",
  transferType: "transferType",
  confirmTransfer: "confirmTransfer",
  goToSavings: "goToSavings",
  goToSavingsTransactions: "goToSavingsTransactions",
  confirmSavingsIncrease: "confirmSavingsIncrease",
  goHomeToCheckChequing: "goHomeToCheckChequing",
  toChequingForFinalReview: "toChequingForFinalReview",
  toChequingTransactionsFinalReview: "toChequingTransactionsFinalReview",
  finalReview: "finalReview",
};

export const transferFundsSteps = [
  transferFundsEnums.clickPayTransfer,
  transferFundsEnums.clickTransfer,
  transferFundsEnums.selectChequing,
  transferFundsEnums.selectSavings,
  transferFundsEnums.enterAmount,
  transferFundsEnums.transferType,
  transferFundsEnums.confirmTransfer,
  transferFundsEnums.goToSavings,
  transferFundsEnums.goToSavingsTransactions,
  transferFundsEnums.confirmSavingsIncrease,
  transferFundsEnums.goHomeToCheckChequing,
  transferFundsEnums.toChequingForFinalReview,
  transferFundsEnums.toChequingTransactionsFinalReview,
  transferFundsEnums.finalReview,
];

// ETRANSFER ACTIVITY
export const eTransferEnums = {
  clickPayTransfer: "clickPayTransfer",
  chooseETransfer: "chooseETransfer",
  addNewContact: "addNewContact",
  enterName: "enterName",
  enterEmail: "enterEmail",
  addContact: "addContact",
  chooseNewContact: "chooseNewContact",
  enterAmount: "enterAmount",
  chooseAccount: "chooseAccount",
  chooseSecurityQuestion: "chooseSecurityQuestion",
  enterQuestionAnswer: "enterQuestionAnswer",
  reEnterAnswer: "reEnterAnswer",
  addMessage: "addMessage",
  addPersonalInfo: "addPersonalInfo",
  goToSummary: "goToSummary",
  reviewSummary: "reviewSummary",
  clickSend: "clickSend",
};

export const eTransferSteps = [
  eTransferEnums.clickPayTransfer,
  eTransferEnums.chooseETransfer,
  eTransferEnums.addNewContact,
  eTransferEnums.enterName,
  eTransferEnums.enterEmail,
  eTransferEnums.addContact,
  eTransferEnums.chooseNewContact,
  eTransferEnums.enterAmount,
  eTransferEnums.chooseAccount,
  eTransferEnums.chooseSecurityQuestion,
  eTransferEnums.enterQuestionAnswer,
  eTransferEnums.reEnterAnswer,
  eTransferEnums.addMessage,
  eTransferEnums.addPersonalInfo,
  eTransferEnums.goToSummary,
  eTransferEnums.reviewSummary,
  eTransferEnums.clickSend,
];
