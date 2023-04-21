import { useEffect, useState } from "react";

export default function PostPage({ params }) {
    const [posts, setPosts] = useState([]);

    useEffect( async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    })

    return (
       <section>
        {posts.map(post => (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </article>
        ))}
       </section>
    )
}