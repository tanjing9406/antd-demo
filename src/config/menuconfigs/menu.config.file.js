import ProdFile from '../../pages/filemanagement/prodfile'
import MaterialFile from '../../pages/filemanagement/materialfile'

export default [{
    id: 'file',
    title: '档案管理',
    subMenu: [
        {
            id: 'file-prod',
            title: '产品档案',
            url: '/file/prod',
            component: ProdFile
        },
        {
            id: 'file-material',
            title: '材料档案',
            url: '/file/material',
            component: MaterialFile
        }
    ]
}]