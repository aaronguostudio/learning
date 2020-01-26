import PropTypes from 'prop-types'
import React from 'react'
import { Breadcrumb, Icon } from 'antd'

const Bread = ({ location }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Icon type="home" />
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
    </Breadcrumb>
  )
}

export default Bread
