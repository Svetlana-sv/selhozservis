export type Category = {
    id: number;
    attributes: {
        title: string;
        parent_id: number;
        level: number;
    };
};
