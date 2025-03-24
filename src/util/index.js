/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "^_"}]*/
export const UpdateItemInList = (listData, updatedItem, idParam = "id") => {
  return listData.map((item, _index) => {
    if (item[idParam] !== updatedItem[idParam]) return item;
    return {
      ...item,
      ...updatedItem,
    };
  });
};
