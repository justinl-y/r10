export const formatTimeStampToHours = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;
  const dayHalf = hours < 13 ? 'AM' : 'PM';

  return `${hours}:${minutes.substr(-2)} ${dayHalf}`;
};
