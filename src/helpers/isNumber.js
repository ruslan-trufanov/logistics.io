const isNumber = (data) => {
  if (typeof data === 'number') {
    return data - data === 0;
  }

  if (typeof data === 'string' && data.trim() !== '') {
    return Number.isFinite(+data);
  }

  return false;
}

export default isNumber;
