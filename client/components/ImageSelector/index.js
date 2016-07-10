
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import style from './style.css'

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
    var divStyle = {
      opacity: opacity / 100
    };

    return (
      <div style={divStyle}> 
        <img src={this.state.imageSrc} />
      </div>
    )
  }

  render() {
    let imgContainerClass = '';
    if ( this.state.imageSrc === '' ) {
      imgContainerClass = style.placeholder;
    }

    return (
      <section className={style.main}>
        <div className={imgContainerClass}>
        	{this.renderImage()}
        </div>
        <div>
          <button className={style.btn} onClick={::this.handleClick}>
            Select an image...
          </button>
        </div>
      </section>
    )
  }
}

ImageSelector.propTypes = {
  opacity: PropTypes.number.isRequired
}

export default ImageSelector
