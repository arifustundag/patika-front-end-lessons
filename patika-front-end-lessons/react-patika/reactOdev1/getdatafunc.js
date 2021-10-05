
import axios from "axios";

async function getData(num) {
    
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + num);
    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + num);

    const result = { ...users, posts: [posts[0]] }
    //ES 2018 
    //add posts first item as array into users and rename as result
    //or 
    //const result = { ...users}
    //result.posts=[posts[0]]
    console.log(result)

}
export default getData
