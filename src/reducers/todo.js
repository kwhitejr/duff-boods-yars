import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from 'actions/todo';

const initialState = {
  items: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [
          ...state.items,
          {
            id: state.items.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
            item: action.item,
          },
        ],
      };
    case REMOVE_ITEM:
      return {
        items: state.items.filter(item => item.id !== action.item.id),
      };
    case EDIT_ITEM:
      return {
        items: state.items.map(item => {
          return item.id === action.item.id
            ? { ...item, item: action.item.item }
            : item;
        }),
      };
    default:
      return state;
  }
}
