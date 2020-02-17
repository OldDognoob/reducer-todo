import React from 'react';


export default function Todo(props){
    const{id,toggle, completed} = props;
    
    return(
        <div className={(completed ? 'todo-completed' : '')}
        onClick={() => toggle(id)}>
        </div>
    );
}