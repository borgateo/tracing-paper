
import { combineReducers } from 'redux'
import opacity from './opacity'
import view from './view'
import iframe from './iframe'

const tracingPaper = combineReducers({
  opacity,
  view,
  iframe
})


export default tracingPaper