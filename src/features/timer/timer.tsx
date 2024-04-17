import React, { FC, useLayoutEffect } from 'react';
import styles from './timer.module.css';
import { Badge } from '@shared/ui';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useAppDispatch } from '@app/store/store';
import { timeout } from '@features/test/model/testSlice';

dayjs.extend(relativeTime);

type TimerProps = {
  minutes: number;
};

const getTime = (minutes: number) => {
  const endTime = dayjs().add(minutes, 'minutes');
  const now = dayjs();
  const elapsedTime = endTime.diff(now, 'second');
  const formattedTime = dayjs().startOf('day').second(elapsedTime).format('mm:ss');
  return formattedTime;
};

export default function Timer({ minutes }: TimerProps) {
  const dispatch = useAppDispatch();
  const [currentTime, setCurrentTime] = useState<any>(getTime(minutes));

  useEffect(() => {
    const endTime = dayjs().add(minutes, 'minutes').add(1, 'second');
    let interval = setInterval(() => {
      const now = dayjs();
      const elapsedTime = endTime.diff(now, 'second');
      const formattedTime = dayjs().startOf('day').second(elapsedTime).format('mm:ss');

      if (formattedTime === '00:00') {
        dispatch(timeout());
      }
      setCurrentTime(formattedTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <Badge variant="secondary">{currentTime}</Badge>;
}
