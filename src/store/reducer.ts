import * as actionTypes from "./actionTypes";

const initialState: ArticlesState = {
    articles : [
        {
            id:1,
            title:"Post 1",
            body:"Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi"
        },{
            id:2,
            title:"Post 2",
            body:"2 Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi"
        },{
            id:3,
            title:"Post 3",
            body:"3 Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi"
        }
    ]
}

const reducer = (
    state : ArticlesState = initialState,
    action : ArticleAction
    ): ArticlesState => {
        switch(action.type) {
            case actionTypes.ADD_ARTICLE : 
                const newArticle: IArticle = {
                    id: Math.random(),
                    title: action.article.title,
                    body: action.article.body
                }
                return {
                    ...state,
                    articles: state.articles.concat(newArticle)
                }
            case actionTypes.REMOVE_ARTICLE : 
                const updatedArticles: IArticle[] = state.articles.filter(
                    article => article.id !== action.article.id && article.title !== action.article.title
                    )
                return {
                    ...state,
                    articles: updatedArticles
                }
        }
        return state;
}

export default reducer;