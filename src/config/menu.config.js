import MenuMaterial from './menuconfigs/menu.config.material'
import MenuProd from './menuconfigs/menu.config.production'
import MenuStoreHouse from './menuconfigs/menu.config.storehouse'
import MenuFile from './menuconfigs/menu.config.file'

export default [
    ...MenuMaterial,
    ...MenuProd,
    ...MenuStoreHouse,
    ...MenuFile
]