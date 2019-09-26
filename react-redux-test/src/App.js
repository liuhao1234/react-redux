import React,{ Component } from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import './static/style/index.css';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './react-redux';
import TodoList from './components/TodoList';

export default class App extends Component {
    render(){
      return (
        <ConfigProvider locale={zhCN}>
          {/*Provider下的所有组件都能获取store中的数据*/}
          <Provider store={store}>
            <TodoList />
          </Provider>
        </ConfigProvider>
      );
    }
}
