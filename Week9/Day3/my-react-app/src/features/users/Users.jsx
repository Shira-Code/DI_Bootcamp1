import {useSelector} from 'react-redux';

const Users = (props) => {
    const users = useSelector((state) => state.usersReducer.users);

    return (
        <div>
            <div>
                <input placeholder="Name" />
                <input placeholder='Email' />
                <button>Add User</button>
            </div>
            {users.map((item) => {
               return
                <div> key={item.id}
                    {item.name} {item.name} {item.email}
                </div>
            })},
        </div>
    )
};
            
export default Users;