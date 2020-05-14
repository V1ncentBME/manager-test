// 弹窗

import React from "react";
import { Descriptions, Form, Input, Modal, Button } from "antd";
import AddPeople from "./AddPeople";
import ViewPeople from "./ViewPeople";
// import EditPeople from "./EditPeople";

class Dialogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      editable: false,
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
    const { content, editable } = this.state;
    const {
      index,

      onEdit,
      onDelete,
      setModalVisible,
      modalVisible,
      addable,
    } = this.props;

    if (addable) {
      return (
        <Modal
          title=""
          centered
          visible={this.props.modalVisible}
          onCancel={() => this.props.cancelAdd()}
          footer={null}
        >
          <AddPeople
            onAdd={(e) => this.props.onAdd(e)}
            cancelAdd={() => this.props.cancelAdd()}
          />
        </Modal>
      );
    } else if (!editable) {
      // console.log(this.props.content);
      // console.log(content);
      return (
        <div>
          <Modal
            title=""
            centered
            visible={modalVisible}
            footer={null}
            onCancel={() => setModalVisible(false)}
          >
            <ViewPeople content={this.props.content} />
            <Button
              type="primary"
              onClick={() => {
                this.setState({ editable: true });
              }}
            >
              编辑
            </Button>
            <Button
              type="primary"
              onClick={() => {
                onDelete(index);
                setModalVisible(false);
              }}
            >
              删除
            </Button>
          </Modal>
        </div>
      );
    } else {
      return (
        <div>
          <Modal
            title=""
            centered
            visible={modalVisible}
            footer={null}
            onCancel={() => setModalVisible(false)}
          >
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
            </Descriptions>
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
                this.setState({ editable: false, content: this.props.content });
              }}
            >
              取消
            </Button>
          </Modal>
        </div>
      );
    }
  }
}

export default Dialogue;
