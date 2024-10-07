import { useSelector, useDispatch } from "react-redux";
import { addUserPrepare, adduser } from "./usersSlice";
import { useRef } from "react";
const Users = (props) => {
  const users = useSelector((state) => state.usersReducer.users);
  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();

  return (
    <div>
      <div>
        <input ref={nameRef} placeholder='Name' />
        <input ref={emailRef} placeholder='Email' />
        <button
          onClick={() =>
            dispatch(
              adduser({
                name: nameRef.current?.value,
                email: emailRef.current?.value,
              })
            )
          }
        >
          {" "}
          Add User
        </button>

        <button
          onClick={() =>
            dispatch(
              addUserPrepare(nameRef.current?.value, emailRef.current?.value)
            )
          }
        >
          {" "}
          Add wit Prepare
        </button>
      </div>
      {users.map((item) => {
        return (
          <div key={item.id}>
            {item.id} {item.name} {item.email}
          </div>
        );
      })}
    </div>
  );
};
export default Users;
