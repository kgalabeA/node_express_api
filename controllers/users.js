import { v4 as uuidv4 } from "uuid";

let users = [];
export const createUser=(req, res) => {
    const user = req.body;
    user.id = uuidv4();
    users.push(user);
    res.send(`User with the name ${user.name} added to the database`);
  };
  
  export const getUsers=(req, res) => {
    const result = new UserService.getUsers();
    res.send(result);
  }
  
  export const getUserById=(req, res) => {
    const result = users.find((user) => user.id === req.params.id);
    if (result != null) {
      res.send(result);
    } else {
      res.send("User not found").status(404);
    }
  }
  
  export const deleteUser=(req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} is deleted`);
  }
  
  export const updateUser=(req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === id);
    if (user != null) {
      if (req.body.name) user.name = req.body.name;
      if (req.body.lastname) user.lastname = req.body.lastname;
      if (req.body.age) user.age = req.body.age;
  
      res.send(`user with id: ${id} has been updated`);
    }
    res.send("User not found");
  };