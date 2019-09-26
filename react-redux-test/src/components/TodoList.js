import React,{ Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { changeList,changeInputValue } from "../react-redux/actions/todolist-actions";
import {
    Button,
    Input,
    List
} from "antd";

class TodoList extends Component{
    handleBtnClick = ()=>{
        const listData = [...this.props.listData,this.props.inputValue];
        this.props.handleBtnClick(listData)
    }

    handleDelete = (index)=>{
        let listData = [...this.props.listData];
        listData.splice(index,1);
        this.props.handleDelete(listData);
    }
    render(){
        return <Fragment>
                    <Input 
                        placeholder="请输入关键字"
                        value={this.props.inputValue}
                        style={{width:"300px",marginRight:"10px"}}
                        onChange={this.props.handleInputChange}
                    />
                    <Button
                        type="primary"
                        onClick={this.handleBtnClick}
                    >提交</Button>
                    <List
                        size="small"
                        bordered
                        dataSource={this.props.listData}
                        style={{width:"300px",marginTop:"10px"}}
                        renderItem={(item,index) => <List.Item onClick={()=>{this.handleDelete(index)}}>{item}</List.Item>}
                    />
                </Fragment>
    }
}
const mapStateToProps = (state)=>{
    return {
        inputValue:state.todolist.inputValue,
        listData:state.todolist.listData
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputChange(ev){
            let value = ev.target.value;
            dispatch(changeInputValue(value))
        },
        handleBtnClick(value){
            dispatch(changeList(value))
        },
        handleDelete(value){
            dispatch(changeList(value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)