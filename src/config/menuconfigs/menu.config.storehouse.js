import React from 'react';

function Coming() {
    return (<div>仓库管理，敬请期待！</div>)
}

export default [{
    id: 'store',
    title: '仓库管理',
    subMenu: [
        {
            id: 'store-test1',
            title: '仓库1',
            url: '/store/test1',
            component: Coming
        }
    ]
}]