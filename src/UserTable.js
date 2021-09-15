import React, {useState} from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) return <p>Loading ..</p>

  return (
    <div className="UserTable">
      <table>
        <thead>
          <tr>
            {Object.keys(users[0]).map(title => (
              <th>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((row, rowIdx) => (
            <tr>
              {Object.values(row).map(data => (
                <td>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable;