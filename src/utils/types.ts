import {  Comment, Product, User } from "@prisma/client";

export type JWTPayload = {
    id: number;
    isAdmin: boolean;
    username: string;
}

export type CommentWithUser = Comment & { user: User };

export type SingleProduct = Product & { comments: CommentWithUser[] };