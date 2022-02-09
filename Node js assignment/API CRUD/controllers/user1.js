export const getUsers = (req,res) =>{
    res.send('Hello');
}

export const createUser = (req,res) =>{
    const user = req.body
    users.push(user);
    res.send(users);
}

export const getUser = (req,res) =>{
    const { id } = req.params
    const userById = users.find((user) => user.id == id)
    res.send(userById);
}

export const deleteUser = (req,res) =>{
    const { id } = req.params
    const user = users.filter((user) => user.id != id)
    res.send(`user with id ${id}`);
}

export const updateUser = (req,res) =>{
    const { id } = req.params
    const { name, age } = req.body
    const user = users.find((user) => user.id == id)
    if(name) user.name = name
    
    if(age) user.age = age;

    res.send(`user with id ${id} updated`);
}