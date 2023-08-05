import { Request, Response } from "express";
import poststModel from "../models/posts.model";
export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await poststModel.find({})
        res.status(200).send(posts)
        console.log(posts);
    } catch (error: any) {
        res.status(400).send({ message: error.message })}}

export const getPagePosts = async (req: Request, res: Response) => {
    let perPage = 10, page = Math.max(0, req.params.page as any)
    try {
        const posts = await poststModel.find({}).limit(perPage).skip(perPage * page)
        res.status(200).send(posts)
    } catch (error: any) {
        res.status(400).send({ message: error.message })}}

export const getLimitPosts = async (req: Request, res: Response) => {
    const pageOptions = {
        page: req.params.page || 10,
        limit: req.params.limit || 10
    }
    try {
        const posts = await poststModel.find({}).limit(pageOptions.limit as any)
        res.send(posts)
    } catch (error: any) {
        res.status(400).send({ message: error.message })}}

export const getSerchPosts = async (req: Request, res: Response) => {
    const search = req.params.search
    try {
        const posts = await poststModel.find(
            { $or: [
                { title: 
                    { $regex: search, $options: 'az' } 
                }, 
                { body: 
                    { $regex: search, $options: 'az' }
                 }
                ]
             }
             )
        res.send(posts)
    } catch (error: any) {
        res.status(400).send({ message: error.message })}}