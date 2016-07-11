
import React from 'react'
import ImageSection from '../../containers/ImageSection'
import OpacitySection from '../../containers/OpacitySection'

import classnames from 'classnames'
import style from './style.css'

let classNames = `${style.container} ${style.draggable}`;

const App = () => (
  <div className={classNames}>
    <OpacitySection />
    <ImageSection />
  </div>
)

export default App
