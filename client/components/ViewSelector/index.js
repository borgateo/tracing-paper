import React from 'react'
import { connect } from 'react-redux'
import { setView } from '../../actions'

// import classnames from 'classnames'
import style from './style.css'


let ViewSelector = ({ dispatch }) => {
  return (
    <div className={style.buttons}>
      <button onClick={e => { 
        dispatch(setView('SHOW_IMAGE')) 
      }} >
        mockup
      </button>
      <button onClick={e => { 
        dispatch(setView('SHOW_IFRAME')) 
      }} >
        inVision
      </button>
    </div>
  )
}
ViewSelector = connect()(ViewSelector)

export default ViewSelector