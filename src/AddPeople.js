import React from "react";
import { Form, Input, Button } from "antd";

class FormLayoutDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Code: "",
      UserName: "",
      Gender: "",
      Status: "",
      IDNo: "",
      Mail: "",
      Telephone: "",
      Address: "",
      Remark: "",
    };
  }

  inputChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { newPeople } = { newPeople: this.state };
    const formLayout = "horizontal";

    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: {
              span: 4,
            },
            wrapperCol: {
              span: 14,
            },
          }
        : null;
    const buttonItemLayout =
      formLayout === "horizontal"
        ? {
            wrapperCol: {
              span: 14,
              offset: 4,
            },
          }
        : null;
    return (
      <div>
        <Form
          {...formItemLayout}
          layout={formLayout}
          initialValues={{
            layout: formLayout,
          }}
        >
          <Form.Item label="编号">
            <Input
              name="Code"
              value={newPeople.Code || ""}
              onChange={this.inputChange.bind(this)}
            />
          </Form.Item>
          <Form.Item label="姓名">
            <Input
              name="UserName"
              value={newPeople.UserName || ""}
              onChange={this.inputChange.bind(this)}
            />
          </Form.Item>
          <Form.Item label="性别">
            <Input
              name="Gender"
              value={newPeople.Gender || ""}
              onChange={this.inputChange.bind(this)}
            />
          </Form.Item>
          <Form.Item label="状态">
            <Input
              name="Status"
              value={newPeople.Status || ""}
              onChange={this.inputChange.bind(this)}
            />
          </Form.Item>
          <Form.Item label="身份证号">
            <Input
              name="IDNo"
              value={newPeople.IDNo || ""}
              onChange={this.inputChange.bind(this)}
            />
          </Form.Item>
          <Form.Item label="邮箱">
            <Input
              name="Mail"
              value={newPeople.Mail || ""}
              onChange={this.inputChange.bind(this)}
            />
          </Form.Item>
          <Form.Item label="手机">
            <Input
              name="Telephone"
              value={newPeople.Telephone || ""}
              onChange={this.inputChange.bind(this)}
            />
          </Form.Item>
          <Form.Item label="联系地址">
            <Input
              name="Address"
              value={newPeople.Address || ""}
              onChange={this.inputChange.bind(this)}
            />
          </Form.Item>
          <Form.Item label="备注">
            <Input
              name="Remark"
              value={newPeople.Remark || ""}
              onChange={this.inputChange.bind(this)}
            />
          </Form.Item>

          <Form.Item {...buttonItemLayout}>
            <Button type="primary" onClick={() => onClick(newPeople)}>
              新增
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default FormLayoutDemo;
