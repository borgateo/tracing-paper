import { connect } from 'react-redux'
import OpacityValue from '../../components/OpacityValue'

const mapStateToProps = ( state ) => {
  return {
    opacity: state.opacity
  }
}

const OpacitySection = connect(
  mapStateToProps
)( OpacityValue )

export default OpacitySection