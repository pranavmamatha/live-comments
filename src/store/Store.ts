export type userId = string;


export interface Chat{
    id: string,
    userId: userId,
    name: string,
    message: string,
    upvotes: userId[]; // who has upvoted what
}



export abstract class Store{
    constructor(){

    }

    initRoom(roomId: string){

    }

    getChats(roomId: string, limit: number, offset: number){

    }

    addChat(userId:userId, name: string, message: string, roomId: string){

    }

    upvote(userId: userId, roomId: string, chatId: string){

    }



}