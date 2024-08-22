import InputScreen from "./InputScreen";
import  PropTypes  from "prop-types";
import styles from './InputScreenWithCopyIcon.module.css'
import { IoCopyOutline } from "react-icons/io5";
const InputScreenWithCopyIcon = ({value, onClick, iconVisible}) => {
    return ( 
        <div className={styles.inputContainer}>
            <InputScreen value={value}/>
            {iconVisible && <button className={styles.copyIcon} onClick={onClick}>
            <IoCopyOutline />
            </button>}
        </div>
     );
}
 
InputScreenWithCopyIcon.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    iconVisible: PropTypes.bool.isRequired
}
export default InputScreenWithCopyIcon;