import axios from "axios";
import { useState, useEffect } from "react";
import { ArticlesIndex } from "./ArticlesIndex";
import { ArticlesNew } from "./ArticlesNew";
export function Content() {
  const [articles, setArticles] = useState([]);
  const handleIndexArticles = () => {
    console.log("handleIndexArticles");
    axios.get("http://localhost:3000/articles.json").then((response) => {
      console.log(response.data);
      setArticles(response.data);
    });
  };

  const handleCreateArticle = (params) => {
    console.log("handleCreateArticle", params);
    axios.post("http://localhost:3000/articles.json", { article: params }).then((response) => {
      setArticles([...articles, response.data]);
      // successCallback();
    });
  };

  useEffect(handleIndexArticles, []);

  return (
    <div>
      <ArticlesNew onCreateArticle={handleCreateArticle} />
      <ArticlesIndex articles={articles} />
    </div>
  );
}
