import React, {useState, useEffect} from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setIsLoaded(true);
    })
  }, [])

  if (!isLoaded) return <p>Loading ..</p>;

  return (
    <div className="UserTable">
      <table>
        <thead>
          <tr>
            {Object.keys(users[0]).map(title => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {Object.values((row)).map((data, i) => (
                <td key={i}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable;