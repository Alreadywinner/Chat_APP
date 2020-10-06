const users = [];

module.exports.addUser = ({id,name,room})=>{
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    
 const existingUser = users.find((user)=> user.name === name && user.room === room);

 if(!name) return {error : "Username are required"};
 
 if(existingUser) return { error:'Username is taken.'};
 
 const user = {id,name,room};
 users.push(user);
 return { user };
}

module.exports.removeUser = (id)=>{
    const index = users.findIndex((user)=> user.id === id);
    if(index !== -1){
        return users.splice(index,1)[0];
    }

}
module.exports.getUser = (id) => users.find((user)=> user.id === id)