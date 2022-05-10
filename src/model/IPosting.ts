type ID = string | number;

export interface IPosting {
    data: { title: string, content: string}
};

export interface IComment {
    id: ID,
    comment: string
};