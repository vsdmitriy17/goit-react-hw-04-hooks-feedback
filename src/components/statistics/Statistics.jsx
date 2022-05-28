import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ pervState, total, positive }) {
    const { good, neutral, bad } = pervState;
    return (
        <div>
            <p className={styles.statistics_text}>Good: <span className={styles.statistics_data}>{good}</span></p>
            <p className={styles.statistics_text}>Neutral: <span className={styles.statistics_data}>{neutral}</span></p>
            <p className={styles.statistics_text}>Bad: <span className={styles.statistics_data}>{bad}</span></p>
            <p className={styles.statistics_text}>Total: <span className={styles.statistics_data}>{total}</span></p>
            <p className={styles.statistics_text}>Positive feedback: <span className={styles.statistics_data}>{positive}%</span></p>
        </div>
    );
}

Statistics.propTypes = {
    pervState: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
}