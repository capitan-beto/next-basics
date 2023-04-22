import Link from "next/link";
import { LikeButton } from "../components/LIkeButton";

const fetchPost = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());
}

export default async function ListOfPosts() {
    const posts = await fetchPost();

    return posts.slice(0, 5).map(post => (
           <article key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
               <h1 style={{ color:"blue" }}>{ post.title }</h1>
               <p>{post.body}</p>
               <LikeButton id={post.id}/>
            </Link>
           </article>
       )
    )
}