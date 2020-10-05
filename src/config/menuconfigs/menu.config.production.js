import React from 'react';

function Coming() {
    return (<div>生产管理，敬请期待！</div>)
}

export default [{
    id: 'prod-management',
    title: '生产管理',
    subMenu: [
        {
            id: 'prod-planning-numbers',
            title: '生产计划量',
            url: '/prod/planingNumbers',
            component: Coming
        },
        {
            id: 'prod-yazhu',
            title: '压铸情况登记',
            url: '/prod/yazhu',
            component: Coming
        },
        {
            id: 'prod-chongya',
            title: '冲压情况登记',
            url: '/prod/chongya',
            component: Coming
        },
        {
            id: 'prod-zhuangpei',
            title: '装配工序管理',
            url: '/prod/zhuangpei',
            component: Coming
        },
        {
            id: 'prod-waifa',
            title: '外发抛光工序管理',
            url: '/prod/waifa',
            component: Coming
        },
        {
            id: 'prod-chongyadone',
            title: '冲压完工情况',
            url: '/prod/chongyadone',
            component: Coming
        }
    ]
}]