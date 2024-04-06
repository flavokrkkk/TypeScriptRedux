import { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/UseTypedSelector.ts";

const UserList: FC = () => {

    const {error, loading, users} = useTypedSelector(state => state.users)

    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

   if (loading) {
    return <h1>Loading...</h1>
   }

   if (error) {
    return <h1>{error}</h1>
   }

    return (
        <div>
            {users.map(user => 
                    <h2 key={user.id}>{user.name}</h2>
                )}
        </div>
    );
};

export default UserList;