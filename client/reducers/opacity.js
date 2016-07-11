
const Opacity = ( state = 100, action ) => {

  switch ( action.type ) {
    case 'INCREMENT_OPACITY':
    	if ( state >= 100 ) { return state }
      return state + 5
    case 'DECREMENT_OPACITY':
    	if ( state <= 0 ) { return state }
      return state - 5
    default:
      return state
  }

}


export default Opacity