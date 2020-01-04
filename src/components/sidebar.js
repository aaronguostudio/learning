// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Menu, Icon, Button } from 'antd'
import logo from '../images/brand/aaronstudio-logo-white.svg'
import * as styles from './styles/Sidebar.module.less'

const { SubMenu } = Menu;

const Sidebar = ({ siteTitle }) => {
  // const { pathname } = useLocation();
  // console.log('>pathname', pathname)
  return (
    <div className={styles.sidebar}>
      <div className="flex-center py-lg">
        <img className={styles.logo} src={logo} />
      </div>
      <Menu
        defaultSelectedKeys={['1']}
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

          <SubMenu key="database" title="Database">
            <Menu.Item key="mysql">
              <Link to="/learn/database/mysql/">MySQL</Link>
            </Menu.Item>
            <Menu.Item key="mongodb">
              <Link to="/learn/database/mongodb/">MongoDB</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="data-struct">
            <Link to="/learn/data-struct/">Data Structure</Link>
          </Menu.Item>

          <Menu.Item key="data-visual">
            <Link to="/learn/data-visual/">Data Visualization</Link>
          </Menu.Item>

          <Menu.Item key="node">
            <Link to="/learn/node/">Node</Link>
          </Menu.Item>

          <Menu.Item key="8">Java</Menu.Item>

          {/*

          <SubMenu key="data-visual" title="Data Visualization">
            <Menu.Item key="d3">
              <Link to="/learn/data-visual/d3/">D3</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu key="node" title="React">
            <Menu.Item key="react-doc">Documentation</Menu.Item>
            <Menu.Item key="react-examples">Examples</Menu.Item>
          </SubMenu>

          <SubMenu key="react" title="React">
            <Menu.Item key="react-doc">Documentation</Menu.Item>
            <Menu.Item key="react-examples">Examples</Menu.Item>
          </SubMenu>

          */}

        </SubMenu>
        {/* <Menu.Item key="2">
          <Icon type="desktop" />
          <span>Computer Science</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="desktop" />
          <span>Books</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="desktop" />
          <span>Videos</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="inbox" />
          <span>Playing Drums</span>
        </Menu.Item> */}
      </Menu>
    </div>
  )
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
