import { useState } from 'react';
import styles from './App.module.css';
import SectionTitle from './sectionTitle/SectionTitle.jsx';
import Feedback from './feedback/Feedback.jsx';
import Statistics from './statistics/Statistics.jsx';
import Notification from './notification/Notification.jsx';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedBackIncrement = option => {
    switch(option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    }
  };

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100 / (good + neutral + bad)));
  };

  const stateKeys = ['good', 'neutral', 'bad'];

  return (
    <div className={styles.container}>
        <SectionTitle title="Please leave feedback">
            <Feedback
                options={stateKeys}
                onLeaveFeedback={feedBackIncrement}
            />
        </SectionTitle>
        <SectionTitle title="Statistics">
            {(good || neutral || bad) ? (
            <Statistics
              pervState={{ good, neutral, bad }}
              total={countTotalFeedback()}
              positive={countPositiveFeedbackPercentage()}
            />
            ) : <Notification message="No feedback given"/>}
        </SectionTitle>
    </div>
  );
}
