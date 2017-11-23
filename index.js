import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import { Menu, Icon,Input,Table } from 'antd';
import { Checkbox, Row, Col} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      current: 'this is a inpun',
      checked:"please select",
    };
  }
  handleClick = (e) => {
    console.log('click : ', e.key);
    //alert("data is"+e);
    this.setState({
      current: e.key,
      date: e.key,
    });
  }
  onChange(checkedValues) {
	  console.log('checked = ', checkedValues);
	  this.setState({
	      checked: "selected ；"+checkedValues.join(","),
	      date: checkedValues.join(""),
	    });
	}
  render() {

  	var inputValue=this.state.current;
  	var data=this.state.date;
    var locale = {
          filterTitle: 'filter',
          filterConfirm: 'Confirm',
          filterReset: 'Reset',
          emptyText: 'No Data',
        };
  	const checked=this.state.checked;
  	console.log("Current state data is :",data);
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Old',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }];
    var dataSourceEmpty=[];
    return (

      <div style={{ width: 960, margin: '100px auto' }}>
      	<Checkbox.Group onChange={value => this.onChange(value)}>
    <Row>
      <Col span={8}><Checkbox value="A">A</Checkbox></Col>
      <Col span={8}><Checkbox value="B">B</Checkbox></Col>
      <Col span={8}><Checkbox value="C">C</Checkbox></Col>
      <Col span={8}><Checkbox value="D">D</Checkbox></Col>
      <Col span={8}><Checkbox value="E">E</Checkbox></Col>
    </Row>
  </Checkbox.Group>


        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
      <Input placeholder="default size" defaultValue ="this is a inpun."value={inputValue} />
      <Input placeholder="default size" value={checked} />
	<Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
      <Table bordered locale={locale}
              columns={columns} dataSource={dataSourceEmpty} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
