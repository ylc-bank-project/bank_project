import { activitiesEnums } from "../enums";

import SignIn from "./SignIn";
import AccountOverview from "./AccountOverview";
import MakingPayments from "./MakingPayments";

export default {
  [activitiesEnums.SIGNIN]: SignIn,
  [activitiesEnums.ACCOUNTOVERVIEW]: AccountOverview,
  [activitiesEnums.MAKINGPAYMENTS]: MakingPayments,
};
