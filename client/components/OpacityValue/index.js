
import React, { PropTypes } from 'react'
import OpacityButtons from '../OpacityButtons'

import style from './style.css'

const OpacityValue = ({ opacity }) => (
  <div className={style.opacityvalue}>
  	<p>
    	Opacity {opacity}%
  	</p>
  	<OpacityButtons />
  </div>
)

OpacityValue.propTypes = {
	opacity: PropTypes.number.isRequired
}

export default OpacityValue