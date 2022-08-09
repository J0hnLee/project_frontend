import {Layout,Button, Menu} from 'antd';
import Link from 'next/link';
const items = [
    { label: (
        <Link href="/about" target="_blank" rel="noopener noreferrer">
          關於
        </Link>
      ), key: 'item-1' }, // 菜单项务必填写 key
    { label: '限時搶購', key: 'item-2' },
    {
      label: '廠商',
      key: 'submenu',
      children: [{ label: '家華', key: 'submenu-item-1' },
      { label: '高一', key: 'submenu-item-2' },
      { label: '坤益', key: 'submenu-item-3' },
      { label: '茂園', key: 'submenu-item-4' },],
    },
]





const Header = () => {


   


    
    return (
        <div>
        <Layout.Header className="site-layout-background_1" style={{ padding: 0 }}>
  
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}

        items={items}
        // onClick={clickHandler}
        
      >
        <Menu.Item key='setting_1'>
            <Link href='/about'>關於</Link>
        </Menu.Item>
        <Menu.SubMenu key='SubMenu' title='Resources'>
            <Menu.Item key='setting:2'>
                <Link href='/blog'>Blog</Link>
            </Menu.Item>
            <Menu.Item key='setting:3'>
                <Link href='/faq'>FAQ</Link>
            </Menu.Item>
            <Menu.Item key='setting:4'>
                <Link href='/events'>
            Events
            </Link>
            </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key='SubMenu_2' title='trans'>
            <Menu.Item key='setting:5'>
                <Link href='/blog'>Blog</Link>
            </Menu.Item>
            <Menu.Item key='setting:6'>
                <Link href='/faq'>FAQ</Link>
            </Menu.Item>
            <Menu.Item key='setting:7'>
                <Link href='/events'>
            Events
            </Link>
            </Menu.Item>
        </Menu.SubMenu>

        </Menu>

        </Layout.Header>
    </div>
    );
}

export default Header;