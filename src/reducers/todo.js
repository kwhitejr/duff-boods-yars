import { ADD_ITEM, REMOVE_ITEM } from 'actions/todo';

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
    default:
      return state;
  }
}
