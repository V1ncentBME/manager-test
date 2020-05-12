import React from "react";
import { Descriptions, Form, Input, Button } from "antd";

class PeopleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      content: this.props.content,
    };
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
    // console.log(e.target.name);
    const content = Object.assign({}, this.state.content, {
      [e.target.name]: e.target.value,
    });

    this.setState({
      content: content,
    });
  }

  render() {
    //console.log("pro", this.props);
    const editable = this.state.editable;
    const content = this.state.content;
    const { index, onEdit, onDelete } = this.props;

    return editable === false ? (
      <Descriptions title="人员信息">
        <Descriptions.Item label="编号">
          {this.props.content.Code}
        </Descriptions.Item>
        <Descriptions.Item label="姓名">
          {this.props.content.UserName}
        </Descriptions.Item>
        <Descriptions.Item label="性别">
          {this.props.content.Gender}
        </Descriptions.Item>
        <Descriptions.Item label="状态">
          {this.props.content.Status}
        </Descriptions.Item>
        <Descriptions.Item label="身份证号">
          {this.props.content.IDNo}
        </Descriptions.Item>
        <Descriptions.Item label="邮箱">
          {this.props.content.Mail}
        </Descriptions.Item>
        <Descriptions.Item label="手机">
          {this.props.content.Telephone}
        </Descriptions.Item>
        <Descriptions.Item label="联系地址">
          {this.props.content.Address}
        </Descriptions.Item>
        <Descriptions.Item label="备注">
          {this.props.content.Remark}
        </Descriptions.Item>
        <Descriptions.Item>
          <Button
            type="primary"
            onClick={() => {
              this.setState({ editable: true });
            }}
          >
            编辑
          </Button>
          <Button type="primary" onClick={() => onDelete(index)}>
            删除
          </Button>
        </Descriptions.Item>
      </Descriptions>
    ) : (
      <Form>
        <Form.Item label="编号">
          <Input
            name="Code"
            value={content.Code || ""}
            onChange={this.inputChange}
          />
        </Form.Item>
        <Form.Item label="姓名">
          <Input
            name="UserName"
            value={content.UserName || ""}
            onChange={this.inputChange}
          />
        </Form.Item>
        <Form.Item label="性别">
          <Input
            name="Gender"
            value={content.Gender || ""}
            onChange={this.inputChange}
          />
        </Form.Item>
        <Form.Item label="状态">
          <Input
            name="Status"
            value={content.Status || ""}
            onChange={this.inputChange}
          />
        </Form.Item>
        <Form.Item label="身份证号">
          <Input
            name="IDNo"
            value={content.IDNo || ""}
            onChange={this.inputChange}
          />
        </Form.Item>
        <Form.Item label="邮箱">
          <Input
            name="Mail"
            value={content.Mail || ""}
            onChange={this.inputChange}
          />
        </Form.Item>
        <Form.Item label="手机">
          <Input
            name="Telephone"
            value={content.Telephone || ""}
            onChange={this.inputChange}
          />
        </Form.Item>
        <Form.Item label="联系地址">
          {" "}
          <Input
            name="Address"
            value={content.Address || ""}
            onChange={this.inputChange}
          />
        </Form.Item>
        <Form.Item label="备注">
          <Input
            name="Remark"
            value={content.Remark || ""}
            onChange={this.inputChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={() => {
              this.setState({ editable: false });
              onEdit(content, index);
            }}
          >
            保存
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.setState({ editable: false });
            }}
          >
            取消
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default PeopleItem;
