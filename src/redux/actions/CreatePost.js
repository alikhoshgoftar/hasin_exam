export const createPost= postDate=> dispatch=>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(postDate)      
    })
    .then(res=>res.json())
    .then(post=>dispatch({
        type:"NEW_POST",
        payload:post
        }
        ))
};