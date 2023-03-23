import { useState } from "react";

function TodoList() {
    const [todo, setTodo] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setTodo(value);
        // console.log("onChange -> ", todo)
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(todo);
    };
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={todo} onChange={onChange} placeholder="Write a todo"/>
                <button>Add</button>
            </form>
        </div>
    );
}
export default TodoList;