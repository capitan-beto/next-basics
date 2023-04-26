export default function PostLayout({ children }) {
    return (
        <div>
            <marquee style={{ background: "red", color: "#fff" }}>Home &bull; Posts</marquee>
            {children}
        </div>
    )
}