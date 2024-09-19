import { type Dispatch, type FC, type SetStateAction } from "react";

import { Alert, Button, Form, Input, type FormProps } from "antd";

import buttons from "@/lang/buttons";
import { ValidationMsgs } from "@/lang/validation-msgs";
import { ServerKeys } from "@/services/server-keys";

type OtpFieldType = {
  [ServerKeys.OTP]: string;
};

interface IOtpFormProps {
  setOptForm: Dispatch<SetStateAction<boolean>>
}

const OtpForm: FC<IOtpFormProps> = (props) => {
  const { setOptForm } = props;

  const onFinish: FormProps<OtpFieldType>["onFinish"] = (values: OtpFieldType) => {
    console.log(values);
  };

  const onFinishFailed: FormProps<OtpFieldType>["onFinishFailed"] = (errorInfo: unknown) => {
    console.log(errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name={ServerKeys.OTP}
        rules={[{ required: true, message: ValidationMsgs.inputYourOtp }]}>
        <Input.OTP />
      </Form.Item>
      <Alert
        showIcon
        className="-mt-3 mb-3 text-[10px]"
        type="success"
        message={ValidationMsgs.otpSentToEmail}
      />
      <div className="flex gap-2">
        <Button type="dashed" className="w-1/2" onClick={() => setOptForm(false)}>
          {buttons.goBack}
        </Button>
        <Button htmlType="reset" className="w-1/2">
          {buttons.reset}
        </Button>
        <Button htmlType="submit" type="primary" className="w-1/2">
          {buttons.submit}
        </Button>
      </div>
    </Form>
  );
};

export default OtpForm;
