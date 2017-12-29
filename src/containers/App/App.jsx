import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

import Dashboard from '../../containers/Dashboard/Dashboard';
import Home from '../../containers/Home/Home';
import Login from '../../containers/Login/Login';
import Register from '../../containers/Register/Register';
import SearchResult from '../../containers/SearchResult/SearchResult';
import { Provider } from 'mobx-react';
import {style} from "../../variables/Variables.jsx";
import userStore from "../../models/User/UserModel.js";
import appStore from "../../models/App/AppModel.js";


const stores = {appStore, userStore};

class App extends Component {
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.toast = this.toast.bind(this);
        this.state = {
            _notificationSystem: null
        };
    }

    toast(message){
        this.setState({_notificationSystem: this.refs.notificationSystem});
        var _notificationSystem = this.refs.notificationSystem;
        var color = Math.floor((Math.random() * 4) + 1);
        var level;
        switch (color) {
            case 1:
                level = 'success';
                break;
            case 2:
                level = 'warning';
                break;
            case 3:
                level = 'error';
                break;
            case 4:
                level = 'info';
                break;
            default:
                break;
        }
        _notificationSystem.addNotification({
            title: (<span data-notify="icon" className="pe-7s-gift"></span>),
            message: (
                <div>
                    {message}
                </div>
            ),
            level: level,
            position: "tr",
            autoDismiss: 5,
        });
    }

    componentDidMount(){
        //this.toast("Welcome to Tera Dashboard. You look swell today!.")
    }

    componentDidUpdate(e){
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }

    isAuthenticated() {
        return (userStore.isAuthed == true || userStore.foundInStorage() == true);
    }

    requiredRemoteOptions() {
        return (userStore.isAuthed == true || userStore.foundInStorage() == true) && appStore.populateAppOptions(userStore.tok)
    }

    render() {
        return (
            <Provider {...stores}>
                <div className="wrapper">
                    <NotificationSystem ref="notificationSystem" style={style}/>
                    <Switch {...this.props}>
                        <Route toast={this.toast} path="/home" component={Home} />
                        <PrivateRoute toast={this.toast} authed={this.isAuthenticated} path="/dashboard" component={Dashboard} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/search_result" component={SearchResult} />
                        <Redirect from="/" to="/home"/>
                    </Switch>
                </div>
            </Provider>
        );
    }
}


function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed() === true
                ? <Component {...props} {...rest} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}
export default App;
