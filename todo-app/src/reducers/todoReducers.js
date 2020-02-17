export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
          }
    ]
};

const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_TODO = "ADD_TODO";
const MARK_COMPLETED = "MARK_COMPLETED";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export function todoReducer(state, action){
    switch(action.type) {
        case TOGGLE_TODO: {
           return {
               ...state,
               todos:state.todos.map(todo => {
                   if(todo.id !== todoId){
                       return todo
                   }
               })
           }
            }
        case ADD_TODO:{
            const newTodo=action.payload;
            return {
                ...state,
                todos:state.todos.concat(newTodo)
            };
        }
        case MARK_COMPLETED: {
            return {
                ...state,
                todos: state.todos.map(todo =>{
                    const todoId = action.payload
                    if(todo.id === todoId){
                        return{...todo, completed: !todo.completed}
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
            return state
        }
    }
