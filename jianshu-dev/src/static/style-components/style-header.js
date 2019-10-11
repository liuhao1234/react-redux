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
    position:relative;
    div.search_panel{
        display:none;
        position:absolute;
        top:50px;
        left:0;
        border-radius:4px;
        box-shadow:0 0 5px rgba(0,0,0,.2);
        background:#fff;
        width:260px;
        line-height:initial;
        &:before{
            content:"";
            width:16px;
            height:16px;
            position: absolute;
            top: -6px;
            left: 26px;
            box-shadow:0 0 5px rgba(0,0,0,.2);
            transform:rotate(45deg);
            z-index:-1;
        }
        &:after{
            content:"";
            width:0;
            height:0;
            border: 8px solid transparent;
            border-bottom-color: #fff;
            position: absolute;
            top: -16px;
            left: 26px;
        }
        h2{
            float:left;
            font-size:14px;
            font-weight:normal;
            margin:0;
            margin-left:10px;
            margin-top:10px;
        }
        small{
            float:right;
            font-size:13px;
            color:#969696;
            opacity:0.8;
            cursor:pointer;
            margin-right:10px;
            margin-top:10px;
            i{
                margin: -5px;
                font-size: 14px;
            }
        }
        div.search_items{
            clear:both;
            overflow:hidden;
            padding:10px;
            span{
                font-size:12px;
                line-height:18px;
                padding:0px 3px;
                margin:5px 4px;
                color:#787878;
                border:1px solid #ddd;
                border-radius:4px;
                display:block;
                float:left;
                cursor:pointer;
                opacity:.7;
                &:hover{
                    opacity:1;
                }
            }
        }
        ul{
            list-style:none;
            display:none;
            margin:0;
            padding:10px 4px;
            border-top:1px solid #f0f0f0;
        }
        li{
            font-size:14px;
            padding:6px 5px;
            color:#969696;
            cursor:pointer;
            border-radius:4px;
            &:hover{
                background:#f0f0f0;
                i.icon-close{
                    display:block;
                }
            }
            i.icon-close{
                float:right;
                display:none;
            }
            i{
                margin: -5px;
                font-size:14px;
            }
        }
    }
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