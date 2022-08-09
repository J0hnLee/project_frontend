import {Layout,Button, Menu, AutoComplete,Input} from 'antd';
import Link from 'next/link';
import { UserOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
const items = [
    { label: (
    <Link href="/" target="_blank" rel="noopener noreferrer">
    首頁
    </Link>), key: 'item-1' },

    { label: (
        <Link href="/about" target="_blank" rel="noopener noreferrer">
          關於
        </Link>
      ), key: 'item-2' }, // 菜单项务必填写 key
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
        
        <Layout.Header className="site-layout-background_1" style={{ padding: 0 }}>
        <Row>
     
        <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{ width: 250,  }}>
        <Input.Search size="large" placeholder="input here" />
        </AutoComplete>
     
       
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}

        items={items}
        // onClick={clickHandler}  
        style={{ width: 400 }}
        />
        
     
        {/* <Menu.SubMenu key='SubMenu' title='Resources'>
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
        </Menu.SubMenu> */}

        
</Row>
        </Layout.Header>
    );
}

export default Header;