export const formatTimeStampToHours = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();


  const minutes = `0${date.getMinutes()}`;

  const dayHalfHours = hours < 13 ? hours : hours - 12;
  const dayHalfText = hours < 12 ? 'AM' : 'PM';

  return `${dayHalfHours}:${minutes.substr(-2)} ${dayHalfText}`;
};
