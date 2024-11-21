import { useEffect, useState } from "react";
import "./style.css";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    const usersFromLocalStorage = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(usersFromLocalStorage);
  }

  function deleteUser(id) {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
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
                  <button onClick={() => deleteUser(user.id)}>Excluir</button>
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
