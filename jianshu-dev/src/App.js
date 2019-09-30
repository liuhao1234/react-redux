import React,{ Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import 'normalize.css';
import './static/iconfont/iconfont.css';
import './static/style/index.css';
import GlobalStyle from './static/style-components/global';
import store from './react-redux';
import Header from './components/Header';

class App extends Component{
  render(){
    return (
      <Fragment>
        <GlobalStyle/>
        <Provider store={store}>
          <Header />
        </Provider>  
      </Fragment>
    );
  }
}

export default App;
