import React,{Component} from 'react';
import store from '../redux';
import { initlist,changelist,changeInputValue } from '../redux/actions/todolist-action';
import TodoItem from './TodoItem';
// 容器组件：处理页面的逻辑
// UI组件：处理页面的UI
// 无状态组件：当组件中只有render函数的时候，组件可以直接写一个函数
export default class Todolist extends Component{
    constructor(props){
        super(props);
        //console.log("constructor",store.getState())
        this.state = store.getState().todolist
        store.subscribe(()=>{
            console.log("subscribe")
            const storeState = store.getState();
            this.setState(()=>{
                return storeState.todolist
            })
        })
    }

    componentDidMount(){
        store.dispatch(initlist());
    }

    handleBtnClick = ()=>{
        const listData = [...this.state.listData,this.state.inputValue];
        store.dispatch(changelist(listData))
    }

    handleInputChange = (ev)=>{
        var value = ev.target.value;
        store.dispatch(changeInputValue(value))
    }

    handleDelete = (index)=>{
        let listData = [...this.state.listData];
        listData.splice(index,1);
        store.dispatch(changelist(listData));
    }

    render(){
        return  <TodoItem
                    inputValue={this.state.inputValue}
                    handleInputChange={this.handleInputChange}
                    handleBtnClick={this.handleBtnClick}
                    listData={this.state.listData}
                    handleDelete={this.handleDelete}
                />
    }
}