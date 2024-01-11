import { logger } from "../utils/Logger";
import { api } from "./AxiosService.js";
import { BlogPost } from "../models/BlogPost";
import { AppState } from "../AppState";

class BlogPostsService {
  async getBlogPosts() {
    const response = await api.get("api/blogs");
    logger.log("GOT BLOGS", response.data);
    const newBlogPosts = response.data.map(
      (blogPost) => new BlogPost(blogPost)
    );
    AppState.blogPosts = newBlogPosts;
  }
}

export const blogPostsService = new BlogPostsService();
