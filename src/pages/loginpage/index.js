import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'

export default function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const login = () => {
        sessionStorage.setItem('isAuthenticated', true)
        history.replace(from);
    }

    return (<div>登录页面，敬请期待 <button onClick={login}>模拟登录</button></div>)
}