
const View = ( state = 'SHOW_IMAGE', action ) => {

  switch ( action.type ) {
    case 'SET_VIEW':
      return action.view
    default:
      return state
  }

}

export default View