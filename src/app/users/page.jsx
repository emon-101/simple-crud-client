import UsersTable from "../components/UsersTable";
import { getUsers } from "../lib/data";


const UsersPage = async() => {
    const users = await getUsers();
    console.log(users);
    return (
        <div>
            <h1>User Management : {users.length}</h1>
            <UsersTable users={users} />
        </div>
    );
};

export default UsersPage;