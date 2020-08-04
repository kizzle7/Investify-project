import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Register } from './pages/auth';
import { Profile, Dashboard, Transaction, Referral, Support } from './pages/dashboard';
import { Home } from './pages/home/home';
import { Layout } from './components/layout';
import { connect } from 'react-redux';
import { Errror } from './pages/errror';
import { Dash } from './pages/guider/dash';
import { TandC } from './pages/others/tandc';

const check = localStorage.getItem('_scheme')
const role = localStorage.getItem('role')

const LayoutWrapper = props => {
    return (
        <Layout>
            <props.Component {...props} />
        </Layout>
    )
}

const PrivateRoute = ({ Component, path, exact, ...rest }) => {
    return (
        <Route
            exact={exact || true}
            path={path}
            render={props => {
                return check && role === 'user' ? <LayoutWrapper {...props} {...rest} Component={Component} /> : <Redirect to='/login' />
            }}
        />
    )
}

const Guider = props => {
    return (
        <div>
            <props.Component {...props} />
        </div>
    )
}

const GuiderRoute = ({ Component, path, exact, ...rest }) => {
    return (
        <Route
            exact={exact || true}
            path={path}
            render={props => {
                return check && role === 'guider' ? <Guider {...props} {...rest} Component={Component} /> : <Redirect to='/login' />
            }}
        />
    )
}


const Routes = (props) => {
    return (
        <BrowserRouter>
            {check && role === 'user' ? <Redirect to='/dashboard' /> : check && role === 'guider' ? <Redirect to='/guider' /> : null }
            <Switch>
                <Route path='/' component={Home} exact {...props} />
                <Route path='/login' component={Login} exact {...props} />
                <Route path='/register' component={Register} exact {...props} />
                <Route path='/terms' component={TandC} exact {...props} />
                <PrivateRoute path='/dashboard' Component={Dashboard} exact {...props} />
                <PrivateRoute path='/profile' Component={Profile} exact {...props} />
                <PrivateRoute path='/transaction' Component={Transaction} exact {...props} />
                <PrivateRoute path='/referral' Component={Referral} exact {...props} />
                <PrivateRoute path='/support' Component={Support} exact {...props} />

                {/* Guider */}
                <GuiderRoute path='/guider' Component={Dash} exact {...props} />
                <Route path='*' exact strict component={Errror} />
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(Routes);