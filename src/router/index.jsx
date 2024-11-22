import { createHashRouter } from "react-router-dom";
// pages
import HomePage from "@/pages/Home/Home.jsx";
import AboutPage from "@/pages/About/About.jsx";
import ServicesPage from "@/pages/Servics/Servics.jsx";
import CareersPage from "@/pages/Careers/Careers.jsx";
import ApplyNow from "@/pages/Careers/ApplyNow";
import BlogPage from "@/pages/Blog/Blog.jsx";
import PostPage from "@/pages/Blog/Post.jsx";
import ContactPage from "@/pages/Contact/Contact.jsx";
import PrivacyPolicy from "@/pages/PrivacyPolicy/PrivacyPolicy.jsx";
// apis
import { getPosts, getPost } from "@/api/post.js";

export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <HomePage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
    errorElement: <HomePage />,
  },
  {
    path: "/careers",
    element: <CareersPage />,
    errorElement: <HomePage />,
  },
  {
    path: "/careers/apply",
    element: <ApplyNow />,
    errorElement: <HomePage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
    errorElement: <HomePage />,
    loader: getPosts,
  },
  {
    path: "/blog/:id",
    element: <PostPage />,
    loader: getPost,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <HomePage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
    errorElement: <HomePage />,
  },
]);
