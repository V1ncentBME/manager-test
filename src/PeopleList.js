import React from "react";
import { List } from "antd";
import PeopleItem from "./PeopleItem";
import FormLayoutDemo from "./AddPeople";

class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          Code: "1",
          UserName: "张三",
          Gender: "男",
          Status: "在职",
          IDNo: "111",
          Mail: "@22",
          Telephone: "888",
          Address: "bbbbb",
          Remark: "ccccc",
        },
        {
          Code: "2",
          UserName: "李四",
          Gender: "女",
          Status: "离职",
          IDNo: "222",
          Mail: "@11",
          Telephone: "999",
          Address: "aaaaaa",
          Remark: "eee",
        },
      ],
      newPeople: {
        Code: "11",
        UserName: "11",
        Gender: "11",
        Status: "11",
        IDNo: "",
        Mail: "",
        Telephone: "",
        Address: "",
        Remark: "",
      },
    };
  }

  insertPeople(newPeople) {
    const people = this.state.people;
    // console.log("np", newPeople);
    this.setState({
      people: people.concat([newPeople]),
    });
  }

  render() {
    const people = this.state.people;

    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={people}
          renderItem={(item) => (
            <List.Item>
              <PeopleItem content={item} />
            </List.Item>
          )}
        />
        <FormLayoutDemo onClick={(e) => this.insertPeople(e)} />
      </div>
    );
  }
}

export default PeopleList;
