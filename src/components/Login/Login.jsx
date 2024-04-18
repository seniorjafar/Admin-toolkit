import { Button, Form, Input } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPanel = ({ login }) => {
  const navigation = useNavigate();

  const onFinish = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    toast.success("User saved successfully");
    navigation("/");
    login(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login_p">
      <div className="container">
        <div className="login">
          <div className="login_item">
            <p>Login</p>
            <Form 
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 800,
              marginLeft:"130px"
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
                style={{marginRight:"90px"}}
              >
                <Button type="primary" htmlType="submit" >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPanel;
