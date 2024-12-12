
import { useEffect, useState } from "react";
import Button from "../../components/Button/button";
import { getUsers, deleteUser } from "../../services/api";
import "./style.css";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async function handleDeleteUser(id) {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  return (
    <div className="container">
      <h1>Lista de Cadastros</h1>
      {users.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data de Nascimento</th>
              <th>Sexo</th>
              <th>Documento</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.birthdate}</td>
                <td>{user.gender}</td>
                <td>{user.document}</td>
                <td>{user.address}</td>
                <td>
                  <Button onClick={() => handleDeleteUser(user.id)} text="Excluir" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListUsers;
