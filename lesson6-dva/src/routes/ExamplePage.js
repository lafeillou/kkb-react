import React, { Component } from "react";
import { connect } from "dva";
// import { Button , Input} from "antd";
import ProTable from '@ant-design/pro-table';

console.log(ProTable)
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "住址",
    dataIndex: "city",
    key: "city"
  }
];

// @connect(({ example }) => ({ example }), {
@connect(
  state => {
    console.log("state", state); //sy-log
    return { example: state.example };
  },
  {
    getProductData: payload => ({ type: "example/getProductData", payload })
  }
)
class ExamplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  // setKeyword(keyword) {
  //   this.setState({
  //     keyword
  //   }) 
  // }
  dataSearch = () => {
    // 异步获取数据
    this.props.getProductData();
  };
  render() {
    // console.log(" ExamplePage porps", this.props); //sy-log
    // const { data } = this.props.example;
    let { keyword } = this.state
    return (
      <div>
        <h3>react06 作业,暗号：双十一打骨折 </h3>
        {/* <button onClick={this.dataSearch}>search</button> */}
        {/* <Table columns={columns} dataSource={data} rowKey="id" /> */}

        
        <ProTable
          headerTitle="查询表格"
          columns={columns}
          request={this.dataSearch}
        />
      </div>
    );
  }
}
export default ExamplePage;
