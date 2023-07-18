export function ArticlesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // props.onUpdateArticle(props.article.id, params, () => event.target.reset());
    props.onUpdateArticle(
      props.article.id,
      { title: params.get("title"), body: params.get("body"), status: params.get("status") },
      () => event.target.reset()
    );
  };

  const handleClick = () => {
    props.onDestroyArticle(props.article);
  };

  return (
    <div>
      <h1>Article Info</h1>
      <p>Title: {props.article.title}</p>
      <p>Body: {props.article.body}</p>
      <p>Status: {props.article.status}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.article.title} name="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.article.body} name="body" type="text" />
        </div>
        <div>
          Status: <input defaultValue={props.article.status} name="status" type="text" />
        </div>

        <button type="submit">Update Article</button>
      </form>
      <button onClick={handleClick}>Delete Article</button>
    </div>
  );
}
