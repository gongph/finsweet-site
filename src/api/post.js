import news01 from "@/assets/news-1.png";
import news02 from "@/assets/news-2.png";
import news03 from "@/assets/news-3.png";

/**
 *  Get all posts
 * @returns {Array} posts
 */
export async function getPosts() {
  const posts = [
    {
      id: 1,
      title: "Why you have to digitalize in 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      image: news01,
    },
    {
      id: 2,
      title: "Our internal process and longerm vision",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      image: news02,
    },
    {
      id: 3,
      title: "Helping the next generation of leaders",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      image: news03,
    },
    {
      id: 4,
      title: "Our internal process and longerm vision",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      image: news02,
    },
    {
      id: 5,
      title: "Helping the next generation of leaders",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      image: news03,
    },
    {
      id: 6,
      title: "Why you have to digitalize in 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
      image: news01,
    },
  ];
  return posts;
}

/**
 * Get post by id
 * @param {String} id
 * @returns {String} post
 */
export async function getPost(route) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
  );
  const post = await response.json();
  return post;
}
