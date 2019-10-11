import React,{ Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { searchFocus,searchBlur,getSearchList } from "../../react-redux/actions/header-actions";
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
    componentDidMount (){
        this.props.getSearchList();
    }
    render(){
        const {focused,searchFocus,searchBlur,searchlist} = this.props;
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
                            className={focused?"focused":""} 
                            type="text" 
                            placeholder="搜索" 
                            onFocus = {searchFocus}
                            onBlur = {searchBlur}
                        />
                        <i className={"iconfont icon-chaxun "+(focused?"focused":"")}></i>
                        <div className="search_panel" style={{display:(focused?"block":"none")}}>
                            <h2>热门搜索</h2>
                            <small><i className="iconfont icon-refresh"></i>换一批</small>
                            <div className="search_items">
                                {
                                    searchlist.map((item,index)=>{
                                        return <span key={index} className="search_item">{item.title}</span>
                                    })
                                }
                            </div>
                            <ul>
                                <li><i className="iconfont icon-timer"></i>搜索历史记录<i className="iconfont icon-close"></i></li>
                                <li><i className="iconfont icon-timer"></i>aaa<i className="iconfont icon-close"></i></li>
                            </ul>
                        </div>
                    </SearchItem>
                </HeaderContainer>
                
            </HeaderWrap>
        </Fragment>
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        focused:state.getIn(["headerReducer","focused"]),
        searchlist:state.getIn(["headerReducer","searchlist"])
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        searchFocus(){
            const action = searchFocus();
            dispatch(action)
        },
        searchBlur(){
            const action = searchBlur();
            dispatch(action)
        },
        getSearchList(){
            const action = getSearchList();
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);