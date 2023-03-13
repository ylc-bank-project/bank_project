import SignIn from "./SignIn";
import AccountOverview from "./AccountOverview";
import MakingPayments from "./MakingPayments";
import CreatingAccount from "./CreatingAccount";
import TransferFunds from "./TransferFunds";
import ETransfer from "./ETransfer";
import { activitiesEnums } from "../enums";

export default {
  [activitiesEnums.CREATINGACCOUNT]: CreatingAccount,
  [activitiesEnums.SIGNIN]: SignIn,
  [activitiesEnums.ACCOUNTOVERVIEW]: AccountOverview,
  [activitiesEnums.MAKINGPAYMENTS]: MakingPayments,
  [activitiesEnums.TRANSFERFUNDS]: TransferFunds,
  [activitiesEnums.ETRANSFER]: ETransfer,
};
