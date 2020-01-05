// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Menu, Icon, Button } from 'antd'
import logo from '../images/brand/aaronstudio-logo-white.svg'
import * as styles from './styles/Sidebar.module.less'

import { utils } from '../utils'

const { SubMenu } = Menu;

const Sidebar = ({ location }) => {
  const [root, path] = utils.parseUrl(location)
  return (
    <div className={styles.sidebar}>
      <div className="flex-center py-lg">
        <Link to="/">
          <img className={styles.logo} src={logo} />
        </Link>
      </div>
      <Menu
        defaultSelectedKeys={[path]}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="pie-chart" />
              <span>My Learning</span>
            </span>
          }
        >
          {/* <SubMenu key="data-struct" title="Data Structures">
            <Menu.Item key="">
              <Link to="/learn/data-visual/d3/">D3</Link>
            </Menu.Item>
          </SubMenu> */}

          {/* <SubMenu key="database" title="Database">
            <Menu.Item key="mongodb">
              <Link to="/learn/database/mongodb/">MongoDB</Link>
            </Menu.Item>
          </SubMenu> */}

          <Menu.Item key="mysql">
            <Link to="/learn/mysql/">MySQL</Link>
          </Menu.Item>
          <Menu.Item key="data-structures">
            <Link to="/learn/data-structures/">Data Structure</Link>
          </Menu.Item>
          <Menu.Item key="data-visual">
            <Link to="/learn/data-visual/">Data Visualization</Link>
          </Menu.Item>
          <Menu.Item key="node">
            <Link to="/learn/node/">Node</Link>
          </Menu.Item>

        </SubMenu>
      </Menu>
    </div>
  )
}

Sidebar.propTypes = {
  location: PropTypes.object.isRequired,
}

Sidebar.defaultProps = {
  location: {},
}

export default Sidebar
