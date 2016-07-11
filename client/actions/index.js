
export const incrementOpacity = () => {
  return {
    type: 'INCREMENT_OPACITY'
  }
}

export const decrementOpacity = () => {
  return {
    type: 'DECREMENT_OPACITY'
  }
}

export const setView = ( view ) => {
  return {
    type: 'SET_VIEW',
    view
  }
}

export const setIframeURL = ( url ) => {
  return {
    type: 'SET_IFRAME_URL',
    url
  }
}

