import styled from 'styled-components';

export const HeaderWrap = styled.div`
    height:60px;
    margin-bottom:20px;
    padding:0 15px;
    line-height:60px;
    border-bottom:1px solid #f2f2f2;
    min-width:1200px;
`

export const HeaderContainer = styled.div`
    width:960px;
    height:100%;
    background:none;
    margin:0 auto;
`

export const HeaderLogo = styled.i`
    float:left;
    height:100%;
    width:100px;
    background:url('${require('../images/logo.png')}') no-repeat center center;
    background-size:auto 50px;
    cursor:pointer;
`

export const WriteArticle = styled.button`
    width:100px;
    float:right;
    background:#ea6f5a;
    height:40px;
    border-radius:20px;
    color:#fff;
    border:none;
    font-size:16px;
    margin:10px 5px 0;
    cursor:pointer;
`

export const SignUp = styled(WriteArticle)`
    border:1px solid #ea6f5a;
    color:#ea6f5a;
    background:none;
    cursor:pointer;
    &:hover{
        background:rgba(236,97,73,.05);
    }
`

export const SignIn = styled.span`
    float:right;
    color:#969696;  
    padding:0 15px;
    margin-right:20px;
    cursor:pointer;
`

export const BetaApp = styled.span`
    float:right;
    cursor:pointer;
    img{
        width:60px;
        display: block;
        margin-top: 16px;
    }
`

export const AaSetting = styled.span`
    float:right;
    margin-right:20px;
    font-size:20px;
    cursor:pointer;
`

export const Nav = styled.div`
    float:left;
`

export const NavItem = styled.a`
    margin-right:30px;
    cursor:pointer;
    font-size:18px;
    &.active{
        color:#ea6f5a
    }
    i{
        font-size:20px;
        margin-right:2px;
        vertical-align:middle;
    }
`

export const SearchItem = styled.div`
    margin-right:20px;
    height:36px;
    float:left;
    margin-top:12px;
    border-radius:20px;
    background:#eee;
    padding:0 15px;
    input{
        float:left;
        height:100%;
        width:150px;
        font-size:16px;
        transition:all .5s ease;
        &::placeholder{
            color:#999;
        }
    }
    input.focused{
        width:250px;
        transition:all .5s ease;
    }
    i{
        float:left;
        font-size:20px;
        margin-right:-11px;
        margin-top:3px;
        text-align:center;
        cursor:pointer;
        width:30px;
        height:30px;
        line-height:30px;
        border-radius:15px;
        background:none;
        display:block;
        color:#999;
        transition:all .5s ease;
    }
    i.focused{
        background:#999;
        color:#fff;
        transition:all .5s ease;
    }
`