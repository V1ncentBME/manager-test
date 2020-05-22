// 人员信息列表

import React from "react";
import { List, Button, Descriptions } from "antd";
import PeopleItem from "./PeopleItem";
import AddPeople from "./AddPeople";
import Dialogue from "./Dialogue";
import axios from "axios";

// 人员信息数据
const people = [
  // {
  //   Code: "1",
  //   UserName: "张三",
  //   Gender: "男",
  //   Status: "在职",
  //   IDNo: "",
  //   Mail: "zhangsan@supcon.com",
  //   Telephone: "18888888888",
  //   Address: "浙江省杭州市滨江区六合路",
  //   Remark: "",
  // },
  // {
  //   Code: "2",
  //   UserName: "李四",
  //   Gender: "女",
  //   Status: "离职",
  //   IDNo: "",
  //   Mail: "lisi@supcon.com",
  //   Telephone: "18666666666",
  //   Address: "浙江省杭州市滨江区六合路",
  //   Remark: "",
  // },
];
class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: people,
      addable: false,
    };
  }
  componentDidMount() {
    axios.get("/Get/list2").then((res) => {
      console.log(res.data);
      this.people = res.data.people;
      this.setState({ people: res.data.people });
    });
  }

  // 处理编辑人员信息
  handleEdit(content, index) {
    const people = this.state.people;
    people[index] = content;
    this.setState({
      people: people,
    });
  }
  // 处理删除人员信息
  handleDelete(index) {
    // console.log(index);
    const people = this.state.people;
    this.setState({
      people: people
        .slice(0, index)
        .concat(people.slice(index + 1, people.length)),
    });
  }
  // 处理新增人员信息
  handleAdd(newPeople) {
    const people = this.state.people;
    console.log("np", newPeople);
    this.setState({
      people: people.concat([newPeople]),
      addable: false,
    });
  }
  // 取消新增（消除新增弹框）
  cancelAdd() {
    this.setState({
      addable: false,
    });
  }
  render() {
    const people = this.state.people;
    const addable = this.state.addable;

    return (
      <div>
        <Descriptions title="人员信息"></Descriptions>
        <List
          itemLayout="horizontal"
          dataSource={people}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <PeopleItem
                content={item}
                index={index}
                onEdit={(e, i) => this.handleEdit(e, i)}
                onDelete={(e) => this.handleDelete(e)}
              />
            </List.Item>
          )}
        />
        <Button
          type="primary"
          onClick={() => {
            this.setState({ addable: true });
          }}
        >
          新增
        </Button>
        <Dialogue
          addable={addable}
          modalVisible={addable}
          onAdd={(e) => this.handleAdd(e)}
          cancelAdd={() => this.cancelAdd()}
        />
      </div>
    );
  }
}

export default PeopleList;
