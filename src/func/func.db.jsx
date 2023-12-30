export const func_db = {
  readUsersFromJson: async () => {
    try {
      const response = await fetch("path/to/local/users.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error reading users.json:", error);
      return [];
    }
  },
  writeUsersToJson: async (users) => {
    try {
      await fetch("path/to/local/users.json", {
        method: "POST", // You can use 'PUT' or 'PATCH' based on your API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      });

      console.log("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  },
  UserData: () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ username: "", password: "" });

    useEffect(() => {
      const fetchData = async () => {
        const data = await readUsersFromJson();
        setUsers(data);
      };

      fetchData();
    }, []);
  },
  handleAddUser: () => {
    setUsers([...users, newUser]);
    setNewUser({ username: "", password: "" });
  },
};
