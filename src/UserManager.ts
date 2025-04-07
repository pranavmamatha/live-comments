interface User{
    name: string;
    id: string;
}

interface Room{
    users: User[];
}

export class UserManager{
    private rooms: Map<string, Room>;
    constructor(){
        this.rooms = new Map<string, Room>();
    }

    addUser(roomId:string, userId: string, name: string, socket: WebSocket){
        if (!this.rooms.get(roomId)){
            this.rooms.set(roomId,{
                users: []
            })
        }
        this.rooms.get(roomId)?.users.push({
            id: userId,
            name: name
        })
    }

    removeUser(roomId: string, userId: string){
        const users = this.rooms.get(roomId)?.users;
        if(users){
            users.filter(({id})=>id!== userId); 
            }
    }


}

