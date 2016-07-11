
import { connect } from 'react-redux'
import ImageSelector from '../../components/ImageSelector'

const mapStateToProps = ( state ) => {
  return {
    opacity: state.opacity,
    view: state.view,
    iframe: state.iframe
  }
}

const ImageSection = connect(
  mapStateToProps
)( ImageSelector )

export default ImageSection