import { Counter } from "./Counter"

export default function PostLayout({ children }) {
    return (
        <div>
            {/* <Counter/> */}
            <small>Home &bull; Posts</small>
            {children}
        </div>
    )
}