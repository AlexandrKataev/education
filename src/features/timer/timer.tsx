import { Badge } from '@shared/ui';

import { useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';

import { useAppDispatch, useAppSelector } from '@app/store/store';
import { timeout } from '@features/test/model/testSlice';
import { getFormattedTime } from './helpers';

export default function Timer() {
  const dispatch = useAppDispatch();
  const endTime = useAppSelector((state) => state.test.endTime);
  const [currentTime, setCurrentTime] = useState<string>(getFormattedTime(endTime as Dayjs));

  useEffect(() => {
    if (!endTime) {
      return;
    }

    let interval = setInterval(() => {
      const formattedTime = getFormattedTime(endTime);

      if (formattedTime === '00:00') {
        dispatch(timeout());
      }
      setCurrentTime(formattedTime);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <Badge variant="secondary">{currentTime}</Badge>;
}
