// 编辑人员信息（已弃用）

import React from "react";
import { Descriptions, Form, Input, Button } from "antd";

class EditPeople extends React.Component {
  render() {
    const {
      content,
      index,
      onAdd,
      cancelAdd,
      onEdit,
      onDelete,
      setModalVisible,
      modalVisible,
      addable,
    } = this.props;

    return (
      <Descriptions>
        <Descriptions.Item label="编号">
          <Input
            name="Code"
            value={content.Code || ""}
            onChange={this.inputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="姓名">
          <Input
            name="UserName"
            value={content.UserName || ""}
            onChange={this.inputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="性别">
          <Input
            name="Gender"
            value={content.Gender || ""}
            onChange={this.inputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="状态">
          <Input
            name="Status"
            value={content.Status || ""}
            onChange={this.inputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="身份证号">
          <Input
            name="IDNo"
            value={content.IDNo || ""}
            onChange={this.inputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="邮箱">
          <Input
            name="Mail"
            value={content.Mail || ""}
            onChange={this.inputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="手机">
          <Input
            name="Telephone"
            value={content.Telephone || ""}
            onChange={this.inputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="联系地址">
          <Input
            name="Address"
            value={content.Address || ""}
            onChange={this.inputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="备注">
          <Input
            name="Remark"
            value={content.Remark || ""}
            onChange={this.inputChange}
          />
        </Descriptions.Item>
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
      </Descriptions>
    );
  }
}

export default EditPeople;
