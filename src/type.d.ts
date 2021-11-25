interface IArticle {
    id: number;
    title: string;
    body: string;
}

type ArticlesState = {
    articles: IArticle[];
}