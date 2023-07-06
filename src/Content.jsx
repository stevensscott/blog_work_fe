 import axios from "axios";
 import { useState, useEffect } from "react";
 import { ArticlesIndex } from "./ArticlesIndex";

  export function Content() {


const [articles, setArticles] = useState([]);
const handleIndexArticles = () => {
console.log("handleIndexArticles");
    axios.get("http://localhost:3000/articles.json").then((response) => {
      console.log(response.data);
      setArticles(response.data);
    });
 };

 useEffect(handleIndexArticles, []);

return (
<div>
<ArticlesIndex articles={articles} />
</div>
);
}
