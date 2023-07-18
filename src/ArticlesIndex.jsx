export function ArticlesIndex(props) {
  return (
    <div>
      <h1>All articles</h1>
      {props.articles.map((article) => (
        <div key={article.id}>
          <h1>Article Title: {article.title}</h1>
          <p>Article Body: {article.body}</p>
          <p>Article Status: {article.status}</p>
          <h2>Here are the article comments. Comments are associated with Article in a belongs_to association.</h2>
          {/* <p>Commenter: {article.comments[0]['commenter']}</p>
           <p>Body: {article.comments[0]['body']}</p>
           {console.log(article.comments[0]['body'])}                       */}
          <button onClick={() => props.onShowArticle(article)}>More info</button>
        </div>
      ))}
    </div>
  );
}
