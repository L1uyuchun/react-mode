import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom'
import '../../style/layout.scss'
import { connect } from 'react-redux'
import { routes } from '../../routes/index'
import { UserOutlined, LaptopOutlined, NotificationOutlined, SettingOutlined } from '@ant-design/icons';
import ContentMain from '../../components/contentMain/index'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;





class LayoutIndex extends Component {
    render () {
        if (this.props.userInfo && this.props.userInfo.roles) {
            console.log(this.props, routes);
            const { location, userInfo } = this.props
            const hasPermission = (route) => {
                if(route.meta && route.meta.roles && route.meta.roles) {
                   return  route.meta.roles.some((role) => userInfo.roles.includes(role))
                } else {
                    return true
                }
            }
            const filterPermissionRoutes = (allRoutes) => {
                const resultRoutes = []
                allRoutes.forEach(item => {
                    const route = { ...item }
                    if(hasPermission(route)) {
                        if(item.children) {
                            route.children = filterPermissionRoutes(item.children)
                        }
                        resultRoutes.push(route)
                    }
                })
                return resultRoutes
            }
            const permissionRoutes = filterPermissionRoutes(routes)
            return (
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={location.pathname}>
                            {
                                permissionRoutes.map(item => {
                                    if(item.children) {
                                        const menu = (
                                            <SubMenu
                                                icon={<SettingOutlined />}
                                                title={item.meta.title}
                                                key={item.meta.title}
                                            >
                                                {
                                                    item.children.map(child => {
                                                        return (
                                                            <Menu.Item
                                                                key={child.path}
                                                                onClick={() => this.goPage(child.path)}
                                                            >{child.meta.title}</Menu.Item>
                                                        )
                                                    })
                                                }
                                            </SubMenu>
                                        )
                                        return menu
                                    } else {
                                        return (
                                            <Menu.Item
                                                key={item.path}
                                                onClick={() => this.goPage(item.path)}
                                            >{item.meta.title}</Menu.Item>
                                        )
                                    }
                                })
                            }
                            {/*<Menu.Item key="1">nav 1</Menu.Item>*/}
                            {/*<Menu.Item key="2">nav 2</Menu.Item>*/}
                            {/*<SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">*/}
                                {/*<Menu.Item key="31">Option 1</Menu.Item>*/}
                            {/*</SubMenu>*/}
                        </Menu>
                    </Header>
                    <Layout>
                        <ContentMain permissionRoutes={permissionRoutes}/>
                    </Layout>
                </Layout>
            )
        } else {
          return  (<div></div>)
        }
    }
    goPage = (path) => {
        console.log(path);
        this.props.history.push(path)
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.user.userInfo
    }
}
const mapDispatchToProps = {

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutIndex))