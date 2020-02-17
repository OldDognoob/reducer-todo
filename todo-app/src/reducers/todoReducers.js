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
            const todoId = action.payload
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
            const newItem=action.payload;
            return {
                ...state,
                todos:state.todos.concat({item:action.payload, id: Date.now(), completed: false})
            };
        }
        case MARK_COMPLETED: {
            const todoId = action.payload;
            return {
                ...state,
                todos: state.todos.map(todo =>{
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
            return state//in case an action is passed in we don't understand
        }
    }
