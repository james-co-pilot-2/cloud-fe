import CreateUserForm from '@/components/CreateUserForm';
import TableUser from '@/components/TableUser';

export default function Home() {
  const users = [
    { fullname: 'John Doe', age: 30, sex: true, id: '123' },
    { fullname: 'Jane Smith', age: 25, sex: false, id: '456' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ width: '60%', textAlign: 'center' }}>
        <h1>User List</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '20px',
          }}
        >
          <CreateUserForm />
        </div>
        <TableUser users={users} />
      </div>
    </div>
  );
}
