import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const EditButton = ({ urlToBeNavigated }) => (
    <NavLink to={urlToBeNavigated} className="ms-2" title="Edit">
        <i className="fa fa-pencil" aria-hidden="true"></i>
    </NavLink>
)

EditButton.propTypes = {
    urlToBeNavigated: PropTypes.string,
}
