import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const RedirectButton = ({ urlToBeNavigated, text }) => (
    <NavLink to={urlToBeNavigated} className="btn btn-primary">
        {text}
    </NavLink>
)

RedirectButton.propTypes = {
    urlToBeNavigated: PropTypes.string,
    text: PropTypes.string,
}
