import { ServerKeys } from "../server-keys";
export type LoginFormSchema = {
  [ServerKeys.USERNAME]: string;
  [ServerKeys.PASSWORD]: string;
};

export type OtpFormSchema = {
  [ServerKeys.OTP]: string;
};

export type UserSchema = {
  [ServerKeys.RESPONSE]: {
    [ServerKeys.STATUS]: string;
    [ServerKeys.MESSAGE]: string;
    [ServerKeys.NAME]: null | string;
    [ServerKeys.TRIGGER_ID]: null | string;
  };
  [ServerKeys.OTP_DETAILS]: {
    [ServerKeys.OTP_SENT_STATUS]: boolean;
    [ServerKeys.OTP_GENERATED_TIME_IN_MS]: number;
    [ServerKeys.OTP_IS]: string;
    [ServerKeys.OTP_TIMEOUT_IN_MS]: number;
  };

  [ServerKeys.LOGGER_ID]: string;
  [ServerKeys.RESULT]: Array<{
    [ServerKeys.ID]: {
      [ServerKeys.DATE]: number;
      [ServerKeys.TIME]: number;
      [ServerKeys.TIMESTAMP]: number;
      [ServerKeys.NEW]: boolean;
      [ServerKeys.TIME_SECOND]: number;
      [ServerKeys.INC]: number;
      [ServerKeys.MACHINE]: number;
    };
    [ServerKeys.MODULE]: unknown[],
    [ServerKeys.DEPARTMENT]: string;
    [ServerKeys.USER_LEVEL]: number,
    [ServerKeys.NAME]: string;
    [ServerKeys.ROLE]: string;
    [ServerKeys.CLUSTER]: string;
    [ServerKeys.EMAIL]: string;
    [ServerKeys.LIST_OF_POS]: string[];
    [ServerKeys.LIST_OF_POS_OD]: Array<{
      [ServerKeys.POS]: string;
      [ServerKeys.ORIGIN]: string;
      [ServerKeys.DESTINATION]: string;
      [ServerKeys.COMPARTMENT]: string;
    }>;
    [ServerKeys.DEFAULT]: string;
    [ServerKeys.SUBSCRIPTION]: string[];
    [ServerKeys.DASHBOARDS]: string[];
    [ServerKeys.ACCEPT]: boolean;
    [ServerKeys.FILE]: boolean;
    [ServerKeys.READ]: boolean;
    [ServerKeys.APPROVE]: boolean;
    [ServerKeys.REF]: string;
    [ServerKeys.PASSWORD]: string;
    [ServerKeys.ACTIVE]: boolean;
    [ServerKeys.TABLE_FLAG]: string;
  }>;
};
