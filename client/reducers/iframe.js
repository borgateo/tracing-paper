
const Iframe = ( state = '', action ) => {

	console.log('action', action, state)

  switch ( action.type ) {
    case 'SET_IFRAME_URL':
      return action.url
    default:
      return state
  }

}

export default Iframe