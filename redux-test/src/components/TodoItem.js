import React,{ Fragment } from 'react';
import {
    Button,
    Input,
    List
} from "antd";

export default function TodoItem(props){
    return <Fragment>
        <Input 
            placeholder="请输入关键字"
            value={props.inputValue}
            style={{width:"300px",marginRight:"10px"}}
            onChange={props.handleInputChange}
        />
        <Button
            type="primary"
            onClick={props.handleBtnClick}
        >提交</Button>
        <List
            size="small"
            bordered
            dataSource={props.listData}
            style={{width:"300px",marginTop:"10px"}}
            renderItem={(item,index) => <List.Item onClick={()=>{props.handleDelete(index)}}>{item}</List.Item>}
        />
    </Fragment>
}