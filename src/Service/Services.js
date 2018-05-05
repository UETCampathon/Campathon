
export const register = ({email,password,name}) => {
    const url= "https://uetcc-todo-app.herokuapp.com/register";
    const request = new Request(url,{
        headers: {
            'Content-Type':'application/json'
        },
        method:'POST',
        body:JSON.stringify({
            email,
            password,
            name
        })
    })

    return fetch(request).then(res=>{
      
        return res.json()
    })
}
export const login = ({email,password}) => {
    const url= "https://uetcc-todo-app.herokuapp.com/login";
    const request = new Request(url,{
         headers:{
             'Content-Type' : 'application/json'
         },
         method: 'POST',
         body: JSON.stringify({
             email,
             password
         })
    })
    return fetch(request).then(res=>{
      
        return res.json()
    })
}

export const getList = () => {
    const token=sessionStorage['token']
   
    return fetch("https://uetcc-todo-app.herokuapp.com/todos?token=" + token)
    .then((response) => {
        
        return response.json()
    })
}
export const addToLibrary = (text) => {
    const token=sessionStorage['token']
    const url = 'https://uetcc-todo-app.herokuapp.com/todos';
    const request = new Request(url,{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : token
        },
        method:'POST',
        body: JSON.stringify({
          title:text,
          completed:false
        })
    })
     return fetch(request).then(res =>{
         return res.json()
     })
}

