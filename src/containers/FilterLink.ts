import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilter, IAction } from '../actions'
import Link from '../components/Link'
import { IAppState } from '../reducers'

const mapStateToProps = (state: IAppState, ownProps: Props) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch<IAction>, ownProps: Props) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

interface Props {
    filter: VisibilityFilter
}

export default FilterLink