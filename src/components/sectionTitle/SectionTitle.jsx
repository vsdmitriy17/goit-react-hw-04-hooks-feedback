import styles from './SectionTitle.module.css';
import PropTypes from 'prop-types';

export default function SectionTitle({ title, children })  {
    return (
        <div>
            <p className={styles.title}>{title}</p>
            {children}
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
}
