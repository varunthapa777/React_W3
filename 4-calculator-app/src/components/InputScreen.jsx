import PropTypes from 'prop-types'
import styles from './InputScreen.module.css'   

const InputScreen = ({value}) => {
    return ( 
        <input className={styles.input} type="text" value={value} disabled readOnly />
     );
}

InputScreen.propTypes = {
    value: PropTypes.string.isRequired
}
 
export default InputScreen;