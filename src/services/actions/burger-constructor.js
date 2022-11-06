export const GET_CONSTRUCTOR_ITEM = 'GET_CONSTRUCTOR_ITEM';
export const DELETE_CONSTRUCTOR_ITEM = 'DELETE_CONSTRUCTOR_ITEM';
export const GET_CONSTRUCTOR_BUN = 'GET_CONSTRUCTOR_BUN';
export const CLEAR_CONSTRUCTOR_LIST = 'CLEAR_CONSTRUCTOR_LIST';
export const MOVE_CONSTRUCTOR_ITEM = 'CONSTRUCTOR_ITEM';


export const getConstructorBun = (item) => ({
  type: GET_CONSTRUCTOR_BUN,
  item
});

export const getConstructorItem = (item) => ({
  type: GET_CONSTRUCTOR_ITEM,
  item
});

export const deleteConstructorItem = (item) => ({
  type: DELETE_CONSTRUCTOR_ITEM,
  item
});


export const clearConstructorList = () => ({
  type: CLEAR_CONSTRUCTOR_LIST
});

export const moveConstructorItem = (dragIndex, hoverIndex) => ({
  type: MOVE_CONSTRUCTOR_ITEM,
  dragIndex,
  hoverIndex
});