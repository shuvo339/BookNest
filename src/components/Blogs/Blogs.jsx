import { useLoaderData } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className="flex flex-col items-center mt-12">
            <h2 className="text-3xl font-semibold">Popular Blogs</h2>
            <div className="grid lg:grid-cols-2 gap-6 my-6">
                {
                    blogs?.map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
            
        </div>
    );
};

export default Blogs;