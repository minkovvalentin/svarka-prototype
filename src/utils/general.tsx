
const copyObject = (object: any): any => {
  return JSON.parse(JSON.stringify(object));
};

export { copyObject };
