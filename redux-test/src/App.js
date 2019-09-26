import React,{Component} from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import './static/style/index.css';
import { ConfigProvider } from 'antd';
import Todolist from './components/Todolist.js';

export default class App extends Component {
  render(){
    return (
      <ConfigProvider locale={zhCN}>
        <Todolist></Todolist>
      </ConfigProvider>
    )
  }
}