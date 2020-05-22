import Mock from "mockjs";

// const people = [];

const people = Mock.mock({
  "people|4": [
    {
      "Code|+1": 1,
      UserName: "@cname()",
      Gender: "@cword('男女')",
      Status: '@pick(["在职", "离职", "新增"])',
      IDNo: "@ID",
      Mail: "@email",
      Telephone: /^1[385][1-9]\d{8}/,
      Address: "@province" + "@city" + "@county",
      Remark: "@csentence",
    },
  ],
});
Mock.mock("/Get/list2", "get", people);
