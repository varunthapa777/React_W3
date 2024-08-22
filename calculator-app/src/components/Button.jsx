import PropTypes from 'prop-types'
import styles from './Button.module.css'

const Button = ({value, onClick}) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={onClick} >{value}</button>
        </div>
    );
}

Button.propTypes = {
    value : PropTypes.string.isRequired,
    onClick: PropTypes.func

}

export default Button;