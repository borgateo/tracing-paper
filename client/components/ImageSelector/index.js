
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import style from './style.css'

import ViewSelector from '../../components/ViewSelector'
import Iframe from '../../components/Iframe'


const {remote} = require('electron')
const mainProcess = remote.require('./electron-init')


class ImageSelector extends Component {
	
	constructor( props, context ) {
    super( props, context )
    this.state = { imageSrc: '' }
  }

	handleClick() {
		let that = this
		mainProcess.selectDirectory(
			function callback( filename ) {
        that.setState({ imageSrc: filename })
  		}
  	)
	}

	renderImage() {
    const { opacity } = this.props
    let divStyle = {
      opacity: opacity / 100
    };

    return (
      <div style={divStyle}> 
        <img src={this.state.imageSrc} />
      </div>
    )
  }

  render() {
    const { opacity, view, iframe } = this.props

    let showImage = view === 'SHOW_IMAGE' ? style.show : ''
    let showIframe = view === 'SHOW_IFRAME' ? style.show : ''
    
    let imgContainerClass = '';
    if ( this.state.imageSrc === '' ) {
      imgContainerClass = style.placeholder;
    }

    return (
      <div>
        <ViewSelector />

        <div 
          className={style.container}
          onDrop={e => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            this.setState({ imageSrc: file.path })
            return false;
          }}
          onDragLeave={e => {
            return false;
          }}
          onDragOver={e => {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
        >

          <section className={showImage}>
            <div className={imgContainerClass}>
            	{this.renderImage()}
            </div>
            <button className={style.btn} onClick={::this.handleClick}>
              DRAG &amp; DROP<br/>your mockups, or Browse
            </button>
          </section>

          <section className={showIframe}>
            <Iframe opacity={opacity} iframe={iframe}/>
          </section>

        </div>
      </div>
    )
  }
}

ImageSelector.propTypes = {
  opacity: PropTypes.number.isRequired,
  view: PropTypes.string.isRequired
}

export default ImageSelector
