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

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    password1: string;
}

function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>(
    {
        defaultValues: {
            email: "@naver.com",
        }
    }
  );

  const onValid = (data: any) => {
    console.log("onValid : ", data);
  };
  const onInValid = (data: any) => {
    console.log("onInVal : ", errors);
  };
//   console.log("onInVal : ", errors);

  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid, onInValid)}
      >
        <input {...register("email", { 
            required: "Email is required",
            pattern: {
                value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                message: "Only naver.com emails allowed",
            },
        })} placeholder="Email" />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "Write here" })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "Write here" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("userName", { required: "Write here" })}
          placeholder="User Name"
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register("password", {
            required: "Password is empty!",
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Write here",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </>
  );
}
export default TodoList;
