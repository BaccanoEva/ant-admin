import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const SiderMenus = ({match}) => (
  <div style={{paddingBottom:'120px'}}>
    <Menu theme="dark" defaultSelectedKeys={[match.url]} selectedKeys={[match.url]} defaultOpenKeys={['sub4']} mode="inline">

      <SubMenu
        key="sub4"
        title={<span><Icon type="area-chart" /><span>图库</span></span>}
      >
        <Menu.Item key="/vertical-bp-chart"><Link to="/vertical-bp-chart">2015下到2016上</Link></Menu.Item>
        <Menu.Item key="/vertical-bp-chart-second"><Link to="/vertical-bp-chart-second">2016上到2016下</Link></Menu.Item>
        <Menu.Item key="/vertical-bp-chart-third"><Link to="/vertical-bp-chart-third">2016下到2017上</Link></Menu.Item>
        <Menu.Item key="/vertical-bp-chart-forth"><Link to="/vertical-bp-chart-forth">2017上到2017下</Link></Menu.Item>
        <Menu.Item key="/vertical-bp-chart-fifth"><Link to="/vertical-bp-chart-fifth">2017下到2018上</Link></Menu.Item>

      </SubMenu>
    </Menu>  
  </div>
)

SiderMenus.propTypes = {
  match: PropTypes.object.isRequired,
}

export default SiderMenus
