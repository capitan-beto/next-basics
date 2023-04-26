import Link from "next/link";
import Image from "next/image"

const fetchComments = async (id) => {
    await new Promise(res => setTimeout(res, 500));
    // throw new Error("Error al cargar los comentarios");

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
                    <Image width="50" height="50" src={`https://unavatar.io/${comment.email}.com`} alt="" />
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                </li>
            })}
        </ul>
    )
}