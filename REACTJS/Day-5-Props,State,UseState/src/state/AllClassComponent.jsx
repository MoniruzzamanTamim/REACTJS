import React, { Component } from 'react'
import ClassComponent from './basic/ClassComponent'
import ClassCAssignment from './Assignment/parent'

export default class AllClassComponent extends Component {
  render() {
    return (
      <div>
        <ClassComponent/>
        <ClassCAssignment/>
      </div>
    )
  }
}
