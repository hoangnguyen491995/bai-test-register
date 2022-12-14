import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const Register = () => {
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    if ((values.Email !== "" && values.Email.includes("@")) === false) {
      setError1(true);
    } else {
      setError1(false);
    }

    if (values.Email !== "" && values.Email.split("@")[0] === "") {
      setError2(true);
    } else {
      setError2(false);
    }

    if (
      (values.Email !== "" &&
        values.Email.length === values.Email.trim().length) === false ||
      values.Email.trim().includes(" ") === true
    ) {
      setError3(true);
    } else {
      setError3(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    if (
      (errorInfo.values.Email !== "" &&
        errorInfo.values.Email.includes("@")) === false
    ) {
      setError1(true);
    }
    if (errorInfo.values.Email === "" && errorInfo.values.Password !== "") {
      setError1(false);
    } else setError1(false);

    if (
      errorInfo.values.Email !== "" &&
      errorInfo.values.Email.split("@")[0] === ""
    ) {
      setError2(true);
    } else {
      setError2(false);
    }

    if (
      (errorInfo.values.Email !== undefined &&
        errorInfo.values.Email.length ===
          errorInfo.values.Email.trim().length) === false ||
      errorInfo.values.Email.trim().includes(" ") === true
    ) {
      setError3(true);
    } else {
      setError3(false);
    }
  };

  return (
    <Form
      className="border-[1px] bg-[#e4e6eb] pt-6 flex flex-col 
      items-center space-y-6 w-[400px] h-[500px] "
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div>
        <span className=" text-[22px] font-bold"> Register </span>
      </div>
      <div className="w-[300px]">
        <span className="text-[15px] font-medium">Email</span>
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
              message: " Email l?? tr?????ng b???t bu???c !",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <ul className="text-[#ff4d4f] mb-8">
          {error1 && <li>Email kh??ng ch???a k?? t??? @</li>}
          {error2 && <li>Email kh??ng c?? local-part</li>}
          {error3 && <li>C?? kho???ng tr???ng ??? gi???a/?????u/cu???i email</li>}
        </ul>
        <span className="text-[15px] font-medium">Password</span>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Password l?? tr?????ng b???t bu???c !",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </div>
      <Button type="primary" htmlType="submit" style={{ width: "300px" }}>
        <span className="text-yellow-500 font-semibold   "> Register</span>
      </Button>
    </Form>
  );
};

export default Register;
