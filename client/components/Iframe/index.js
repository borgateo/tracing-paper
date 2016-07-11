
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { setIframeURL } from '../../actions'

import style from './style.css'


let Iframe = ({ opacity, iframe, dispatch }) => {
  const iframeURL = "https://projects.invisionapp.com/share/SV5HGOIRM#/163147783_Blurred_Bg"
  
  let input
  let iframeOpacity = {
    opacity: opacity / 100
  }

  return(
    <div>
      <h3>{iframe}</h3>

      <form className={style.iframe_form}onSubmit={e => {
        e.preventDefault()
        if ( !input.value.trim() ) {
          return
        }
        dispatch( setIframeURL( input.value ) )
        input.value = ''
      }}>
        <input
          className={style.input}
          placeholder="invision share link" 
          ref={node => {
            input = node
          }} 
        />
        <button className={style.button_submit} type="submit">
          Submit
        </button>
      </form>

      <iframe 
        style={iframeOpacity}
        className={style.iframe}
        src={iframe}
      ></iframe>
    </div>
  )
}

Iframe = connect()(Iframe)

export default Iframe
