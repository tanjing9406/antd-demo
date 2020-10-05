import React from 'react';

function Coming() {
    return (<div>档案管理，敬请期待！</div>)
}

export default [{
    id: 'file',
    title: '档案管理',
    subMenu: [
        {
            id: 'file-test1',
            title: '档案1',
            url: '/file/test1',
            component: Coming
        }
    ]
}]