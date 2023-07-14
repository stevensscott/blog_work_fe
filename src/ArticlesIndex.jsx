
   export function ArticlesIndex(props) {
      return (
        <div>
          <h1>All articles</h1>
         {props.articles.map((article) => (
         <div key={article.id}>
           <h2>{article.title}</h2>
           <p>{article.body}</p>
           <p>{article.status}</p>
           <button onClick={() => props.onShowArticle(article)}>More info</button>
         </div>
        ))}
        </div>
      );
    }