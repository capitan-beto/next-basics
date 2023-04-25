import Link from "next/link";

const fetchComments = async (id) => {
    await new Promise(res => setTimeout(res, 3000));
    
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json());
}

export default async function Post({ params }){
    const { id } = params;
    const comments = await fetchComments(id);

    return (
        <ul style={{ fontSize: "15px", background: "#444", color: "#fff"}}>
            {comments.map(comment => {
                return <li key={comment.id}>
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                </li>
            })}
        </ul>
    )
}