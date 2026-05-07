import AddUserModal from "../components/AddUserModal";
import UsersTable from "../components/UsersTable";
import { deleteUser } from "../lib/actions";
import { getUsers } from "../lib/data";


const UsersPage = async() => {
    const users = await getUsers();
    return (
        <div className="w-9/10 mx-auto">
            <div className="flex gap-2 my-4 items-center justify-between">
                <h1>User Management : {users.length}</h1>
                <AddUserModal></AddUserModal>
            </div>
            <UsersTable users={users} deleteUserAction={deleteUser} />
        </div>
    );
};

export default UsersPage;