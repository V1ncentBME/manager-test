// 查看人员信息详情

import React from "react";
import { Descriptions, Form, Input, Button } from "antd";

class ViewPeople extends React.Component {
  render() {
    return (
      <Descriptions>
        <Descriptions.Item label="编号">
          {this.props.content.Code || ""}
        </Descriptions.Item>
        <Descriptions.Item label="姓名">
          {this.props.content.UserName || ""}
        </Descriptions.Item>
        <Descriptions.Item label="性别">
          {this.props.content.Gender || ""}
        </Descriptions.Item>
        <Descriptions.Item label="状态">
          {this.props.content.Status || ""}
        </Descriptions.Item>
        <Descriptions.Item label="身份证号">
          {this.props.content.IDNo || ""}
        </Descriptions.Item>
        <Descriptions.Item label="邮箱">
          {this.props.content.Mail || ""}
        </Descriptions.Item>
        <Descriptions.Item label="手机">
          {this.props.content.Telephone || ""}
        </Descriptions.Item>
        <Descriptions.Item label="联系地址">
          {this.props.content.Address || ""}
        </Descriptions.Item>
        <Descriptions.Item label="备注">
          {this.props.content.Remark || ""}
        </Descriptions.Item>
      </Descriptions>
    );
  }
}

export default ViewPeople;
