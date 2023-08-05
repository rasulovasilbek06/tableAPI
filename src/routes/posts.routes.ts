import express from "express";

import { getPosts } from "../controller/posts.controller"
import { getPagePosts } from "../controller/posts.controller"
import { getLimitPosts } from "../controller/posts.controller";
import { getSerchPosts } from "../controller/posts.controller"

const postsRouter = express.Router()

postsRouter.get("/", getPosts)
postsRouter.get("/page/:page", getPagePosts)
postsRouter.get("/limit/:limit", getLimitPosts)
postsRouter.get("/search/:search", getSerchPosts)

export default postsRouter