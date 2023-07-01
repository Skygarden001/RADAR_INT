import PropTypes from 'prop-types';

function Menu({children}) {
    return ( 
        <nav>
            {children}
        </nav>
     );
}

export default Menu;

Menu.propTypes = {
  children: PropTypes.element.isRequired
};
