import * as mongodb from "mongodb";

export interface Password {
    _id?: mongodb.ObjectId;
    category: string;
    title: string;
    url: string;
}