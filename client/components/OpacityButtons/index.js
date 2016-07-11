import React from 'react'
import { connect } from 'react-redux'
import { incrementOpacity, decrementOpacity } from '../../actions'

import classnames from 'classnames'
import style from './style.css'


let OpacityButtons = ({ dispatch }) => {
  return (
    <div className={style.buttons}>
      <button onClick={e => { 
        dispatch(incrementOpacity()) 
      }} >
        +
      </button>
      <button onClick={e => { 
        dispatch(decrementOpacity()) 
      }} >
        -
      </button>
    </div>
  )
}
OpacityButtons = connect()(OpacityButtons)

export default OpacityButtons