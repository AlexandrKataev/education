import dayjs, { Dayjs } from 'dayjs';

export const getRemainingSeconds = (endTime: Dayjs) => {
  const now = dayjs();
  const remainingTime = endTime.diff(now, 'second');
  return remainingTime;
};

export const formatRemainingTime = (seconds: number) => {
  return dayjs().startOf('day').second(seconds).format('mm:ss');
};

export const getFormattedTime = (endTime: Dayjs) => {
  const remainingSeconds = getRemainingSeconds(endTime);
  return formatRemainingTime(remainingSeconds);
};
