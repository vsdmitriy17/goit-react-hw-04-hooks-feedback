import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

export default function Feedback({ options, onLeaveFeedback })  {
    
        return (
            <ul className={styles.feedback_btnList}>
                {options.map((option) => {
                    return (
                        <li className={styles.feedback_btnList__item} key={option}>
                            <button type="button" className={styles.feedback_btn} onClick={() => onLeaveFeedback(option)}>{option.toUpperCase()}</button>
                        </li>
                    );
                })}
            </ul>
        );
};

Feedback.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}