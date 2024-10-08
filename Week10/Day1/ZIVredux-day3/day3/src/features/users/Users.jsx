import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./usersSlice";

const Users = (props) => {
  const users = useSelector((state) => state.usersReducer.users);
  const status = useSelector((state) => state.usersReducer.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (status === "loading") return <h2>Loading...</h2>;

  if (status === "failed")
    return <h2>Try again in few minutes we are working on it...</h2>;

  return (
    <>
      <div>
        {users.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </>
  );
};
export default Users;
