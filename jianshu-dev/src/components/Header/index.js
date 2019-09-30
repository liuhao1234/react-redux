import React,{ Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { 
    HeaderWrap,
    HeaderContainer,
    HeaderLogo,
    WriteArticle,
    SignUp,
    SignIn,
    BetaApp,
    AaSetting,
    Nav,
    NavItem,
    SearchItem
} from '../../static/style-components/style-header';
import ImgBeta from '../../static/images/icon-download.png';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            focused:false
        }
    }

    componentDidMount(){
        this.props.reduxConnectTest(this.props.data);
    }

    searchFocus = ()=>{
        this.setState(()=>{
            return {
                focused:true
            }
        })
    }

    searchBlur = ()=>{
        this.setState(()=>{
            return {
                focused:false
            }
        })
    }

    render(){
        return <Fragment>
            <HeaderWrap>
                <HeaderLogo></HeaderLogo>
                <WriteArticle>写文章</WriteArticle>
                <SignUp>注册</SignUp>
                <SignIn>登录</SignIn>
                <BetaApp><img src={ImgBeta} alt=""/></BetaApp>
                <AaSetting className="iconfont icon-Aa"></AaSetting>
                <HeaderContainer>
                    <Nav>
                        <NavItem className="active"><i className="iconfont icon-index"></i>首页</NavItem>
                        <NavItem><i className="iconfont icon-phone" style={{marginRight:0}}></i>下载App</NavItem>
                    </Nav>
                    <SearchItem>
                        <input 
                            className={this.state.focused?"focused":""} 
                            type="text" 
                            placeholder="搜索" 
                            onFocus = {this.searchFocus}
                            onBlur = {this.searchBlur}
                        />
                        <i className={"iconfont icon-chaxun "+(this.state.focused?"focused":"")}></i>
                    </SearchItem>
                </HeaderContainer>
                
            </HeaderWrap>
        </Fragment>
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        data:state.headerReducer.data
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        reduxConnectTest(data){
            console.log(data)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);