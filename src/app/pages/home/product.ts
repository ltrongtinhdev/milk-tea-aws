export class Product {
    _id: String;
    fullname?: String;
    content?: String;
    optionSugar?: String;
    optionIce?: String;
    optionSize?: String;
    updatedAt: any;
    createdAt: any;
}

export interface IFind {
    dataSource: string
    database: string
    collection: string
    filter: any
}