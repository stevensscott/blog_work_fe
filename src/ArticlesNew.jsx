export function ArticlesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const params = { title: data.get("title"), body: data.get("body"), status: data.get("status") };

    // props.onCreateArticle(params, () => event.target.reset());
    props.onCreateArticle(params);
    event.target.reset();
  };
  return (
    <div>
      <h1>New Article</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <div>
          Status: <input name="status" type="text" />
        </div>

        <button type="submit">Create test Article</button>
      </form>
    </div>
  );
}

// "article"=>{"title"=>"vvvvvvv", "body"=>"vvvvvvvvvvv", "status"=>"public"}, "commit"=>"Create Article"}
