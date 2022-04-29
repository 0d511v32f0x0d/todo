import type { RequestHandler } from "@sveltejs/kit";

let todo:Todo[] = []
export const get:RequestHandler = () => {

    return {
        status: 200,
        body: todo
    };
}

export async function post({ request }) {
    let data = await request.text(); // or .json(), or .text(), etc
    data=data.substring(5)
    todo.push({
        created_at: new Date,
        text: data,
        done: false
    })        
    if (data){
        return{
            status:302,
            headers:{
                location:"/"
            }
        };
    }
    return {
        status: 404
    };
  }