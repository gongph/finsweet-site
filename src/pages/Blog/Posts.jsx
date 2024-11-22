import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Post() {
  const posts = useLoaderData(); // get the data from the loader function
  return (
    <section className="container-fluid mx-auto px-4 md:px-0 py-8 md:py-16">
      <h1 className="text-titleColor font-medium text-3xl md:text-4xl mb-8">
        All posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-8 md:gap-y-8">
        {/* grid item 1 */}
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="rounded-2xl bg-[#EDF7FF] py-8 px-4 md:py-0 md:px-0"
            >
              <Link to={`/blog/${post.id}`}>
                <img src={post.image} className="object-cover rounded-lg" />
              </Link>
              <div className="pt-4 md:pt-6 md:pb-4 px-6 space-y-4">
                <Link
                  to={`/blog/${post.id}`}
                  className="text-titleColor font-medium text-xl hover:underline"
                >
                  {post.title}
                </Link>
                <p className="text-subTitleColor text-sm">{post.content}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="block text-sm text-brandOrange hover:underline group/more"
                >
                  Learn More
                  <span className="group-hover/more:translate-x-0.5 duration-300 inline-block pl-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
