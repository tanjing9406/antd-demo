import React from 'react';

function Coming() {
    return (<div>材料管理，敬请期待！</div>)
}

export default [{
    id: 'material-management',
    title: '材料管理',
    subMenu: [
        {
            id: 'mate-test1',
            title: '材料1',
            url: '/material/test1',
            component: Coming
        }
    ]
}]