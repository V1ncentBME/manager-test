import React from "react";
import { List, Button } from "antd";
import PeopleItem from "./PeopleItem";
import AddPeople from "./AddPeople";
// import EditableTable from "./Editable";

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
      addable: false,
    };
  }
  handleEdit(content, index) {
    const people = this.state.people;
    people[index] = content;
    this.setState({
      people: people,
    });
  }
  handleDelete(index) {
    // console.log(index);
    const people = this.state.people;
    this.setState({
      people: people
        .slice(0, index)
        .concat(people.slice(index + 1, people.length)),
    });
  }
  handleAdd(newPeople) {
    const people = this.state.people;
    console.log("np", newPeople);
    this.setState({
      people: people.concat([newPeople]),
      addable: false,
    });
  }
  cancelAdd() {
    this.setState({
      addable: false,
    });
  }
  render() {
    const people = this.state.people;
    let add;
    if (this.state.addable) {
      add = (
        <AddPeople
          onAdd={(e) => this.handleAdd(e)}
          cancelAdd={() => this.cancelAdd()}
        />
      );
    } else {
      add = null;
    }

    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            this.setState({ addable: true });
          }}
        >
          新增
        </Button>
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

        {add}
      </div>
    );
  }
}

export default PeopleList;
