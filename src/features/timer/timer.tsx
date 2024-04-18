import { Badge } from '@shared/ui';

import styles from './timer.module.css';

import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@app/store/store';
import { timeout } from '@features/test/model/testSlice';
import { getFormattedTime, getRemainingSeconds } from './helpers/time';

export default function Timer() {
  const dispatch = useAppDispatch();
  const endTime = useAppSelector((state) => state.test.endTime);
  const [currentTime, setCurrentTime] = useState<string>(getFormattedTime(endTime as string));

  useEffect(() => {
    if (!endTime) {
      return;
    }

    let interval = setInterval(() => {
      const formattedTime = getFormattedTime(endTime);
      const remainingSeconds = getRemainingSeconds(endTime);

      if (remainingSeconds <= 0) {
        dispatch(timeout());
      }
      setCurrentTime(formattedTime);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Badge variant="secondary">
      <div className={styles.time}>{currentTime}</div>
    </Badge>
  );
}
