export const cloneObject = (data) => {
    return JSON.parse(JSON.stringify(data));
};

export const copyObject = (target, source) => {
    return Object.assign(target, source);
};

export const updateObjectInArrayByProp = (arr, update, prop) => {
    return arr.map((item) => (item[prop] === update[prop] ? update : item));
};
