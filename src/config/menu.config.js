import DragPage from '../pages/demo/drag'

import MenuMaterial from './menuconfigs/menu.config.material'
import MenuProd from './menuconfigs/menu.config.production'
import MenuStoreHouse from './menuconfigs/menu.config.storehouse'
import MenuFile from './menuconfigs/menu.config.file'

export default [
    ...MenuMaterial,
    ...MenuProd,
    ...MenuStoreHouse,
    ...MenuFile,
    {
        id: 'demo',
        title: '演示示例',
        subMenu: [
            {
                id: 'demo-1',
                title: '拖动',
                url: '/demo/1',
                component: DragPage
            }
        ] 
    }
]