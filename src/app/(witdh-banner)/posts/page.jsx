import ListOfPosts from "./ListOfPosts";
import { Suspense } from "react";

export default async function PostPage() {
    return (
       <section>
          <Suspense fallback={ <p>Cargando Posts....</p> }>
            <ListOfPosts/>
          </Suspense>
       </section>
    )
}