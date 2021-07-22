import { useReducer } from 'react';
import { User } from '../../../../typings';

const ACTION_TYPES = {
  SET_USER_CHECKED: 'SET_USER_CHECKED',
};

interface State {
  users: User[];
}

interface Action {
  type: string;
  userId: number;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
  case ACTION_TYPES.SET_USER_CHECKED: {
    const users = state.users.map((user) => {
      if (user.id === action.userId) {
        user.checked = !Boolean(user.checked);
      }

      return user;
    });

    return {
      ...state,
      users,
    };
  }
  default:
    throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useController({ users }: { users: User[] }) {
  const [state, dispatch] = useReducer(reducer, {
    users,
  });

  function setChecked(userId: number) {
    dispatch({ type: ACTION_TYPES.SET_USER_CHECKED, userId });
  }


  return {
    setChecked,
    state,
  };
}

export default useController;
