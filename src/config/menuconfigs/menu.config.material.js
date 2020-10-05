import React from 'react';

function Coming() {
    return (<div>材料管理，敬请期待！</div>)
}

export default [{
    id: 'material',
    title: '材料管理',
    subMenu: [
        {
            id: 'material-test1',
            title: '材料1',
            url: '/material/test1',
            component: Coming
        }
    ]
}]