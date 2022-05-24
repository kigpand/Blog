type ID = string | number;

export interface IPosting {
    title: string,
    content: string,
    hashTag: string[],
    date: Date,
};

export interface IComment {
    id: ID,
    comment: string
};