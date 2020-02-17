export const initialState = {
    todos: [
        {
            item: 'Todo List',
            completed: false,
            id: 3892987589
          }
    ]
};

const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_TODO = "ADD_TODO";
const MARK_COMPLETED = "MARK_COMPLETED";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export function todoReducer(state, action) {
    switch(action.type) {
        case TOGGLE_TODO: {
            const id = action.payload
            return {
                ...state,
                todos:state.todos.map(todo => (
                    todo.id === action.payload ? {...todo, completed: !todo.completed } : todo
                ))
            };
        }
        case ADD_TODO : {
            return {
                ...state,
               todos: state.todos.concat({item: action.payload, completed:false, id: Date.now()})
            };
        }
        case MARK_COMPLETED : {
            const id = action.payload;
            return{
                ...state,
                todos:state.todos.map(todo => {
                    if(todo.id === id){
                        return{...todo, completed:!todo.completed}
                    }
                    return todo
                })
            }
        }
        case CLEAR_COMPLETED: {
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return !todo.completed;
                })
            }
        }
        default:
            return state;
    }
}
