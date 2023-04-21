const fetchPost = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());
}

export default async function ListOfPosts() {
    const posts = await fetchPost();

    const handleClick = () => {
        alert("ME GUSTA ESTE POST");
    }

    return posts.slice(0, 5).map(post => (
           <article key={post.id}>
               <h1 style={{ color:"blue" }}>{ post.title }</h1>
               <p>{post.body}</p>
               <button onClick={handleClick}>Me Gusta</button>
           </article>
       )
    )
}