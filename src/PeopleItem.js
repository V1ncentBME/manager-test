// 单个人员信息内容

import React from "react";
import { Descriptions, Form, Input, Button } from "antd";
import Dialogue from "./Dialogue";

class PeopleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  render() {
    const modalVisible = this.state.modalVisible;
    const { index, onEdit, onDelete } = this.props;

    return (
      <div>
        <Descriptions column={4}>
          <Descriptions.Item label="编号">
            {this.props.content.Code}
          </Descriptions.Item>
          <Descriptions.Item label="姓名">
            {this.props.content.UserName}
          </Descriptions.Item>
          <Descriptions.Item label="性别">
            {this.props.content.Gender}
          </Descriptions.Item>
          <Descriptions.Item>
            <Button type="primary" onClick={() => this.setModalVisible(true)}>
              查看
            </Button>
          </Descriptions.Item>
        </Descriptions>
        <Dialogue
          index={index}
          modalVisible={modalVisible}
          content={this.props.content}
          onEdit={onEdit}
          onDelete={onDelete}
          setModalVisible={this.setModalVisible}
        />
      </div>
    );
  }
}

export default PeopleItem;
