import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2>Total Users : {users.length} </h2>
    </div>
  );
};

export default Users;
