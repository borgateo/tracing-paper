import { connect } from 'react-redux'
import OpacityValue from '../../components/OpacityValue'

const mapStateToProps = ( state ) => {
  return {
    opacity: state
  }
}

const OpacitySection = connect(
  mapStateToProps
)( OpacityValue )

export default OpacitySection