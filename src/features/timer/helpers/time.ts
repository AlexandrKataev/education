import dayjs from 'dayjs';

export const getRemainingSeconds = (endTime: string) => {
  const now = dayjs();
  const remainingTime = dayjs(endTime).diff(now, 'second');
  return remainingTime;
};

export const formatRemainingTime = (seconds: number) => {
  return dayjs().startOf('day').second(seconds).format('mm:ss');
};

export const getFormattedTime = (endTime: string) => {
  const remainingSeconds = getRemainingSeconds(endTime);
  return formatRemainingTime(remainingSeconds);
};
