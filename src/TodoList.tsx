import { useState } from "react";
import { useForm } from "react-hook-form";

// * React Hook Form 추가로 폐기
// function TodoList() {
//     const [todo, setTodo] = useState("");
//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: { value },
//         } = event;
//         setTodo(value);
//         // console.log("onChange -> ", todo)
//     };
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         // console.log(todo);
//     };
    
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input value={todo} onChange={onChange} placeholder="Write a todo"/>
//                 <button>Add</button>
//             </form>
//         </div>
//     );
// }

function TodoList() {
    const { register, handleSubmit, formState } = useForm();
    const onValid = (data: any) => {
        console.log("onValid : ", data);
    };
    console.log("Err : ", formState.errors);

    return (
        <>
            <form
                style={{display:"flex", flexDirection: "column"}}
                onSubmit={handleSubmit(onValid)}
            >
                <input {...register("email", {required: true})} placeholder="Email"/>
                <input {...register("firstName", {required: true})} placeholder="First Name"/>
                <input {...register("lastName", {required: true})} placeholder="Last Name"/>
                <input {...register("userName", {required: true})} placeholder="User Name"/>
                <input {...register("password", {
                    required: "Password is empty!",
                    })} placeholder="Password"/>
                <input {...register("password1", {
                    required: true,
                    minLength: {
                        value: 5,
                        message: "Your password is too short."
                    }
                    })} placeholder="Password1"/>
                <button>Add</button>
            </form>
        </>
    );
}
export default TodoList;