import axios from "axios";
import { useState, useEffect } from "react";
import { ArticlesIndex } from "./ArticlesIndex";
import { ArticlesNew } from "./ArticlesNew";
import {Modal} from "./Modal";
import { ArticlesShow } from "./ArticlesShow";


export function Content() {
  const [articles, setArticles] = useState([]);
  const [isArticlesShowVisible, setIsArticlesShowVisible] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({});


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


  const handleShowArticle = (article) => {
    console.log("handleShowArticle", article);
    setIsArticlesShowVisible(true);
    setCurrentArticle(article);
  };

  const handleUpdateArticle = (id, params, successCallback) => {
        console.log("handleUpdateArticle", params);
        axios.patch(`http://localhost:3000/articles/${id}.json`,  { article: params } ).then((response) => {
          setArticles(
            articles.map((article) => {
              if (article.id === response.data.id) {
                return response.data;
             } else {
               return article;
             }
           })
         );
         successCallback();
          handleClose();
         });
       };
    
  const handleClose = () => {
    console.log("handleClose");
    setIsArticlesShowVisible(false);
  };


     const handleDestroyArticle = (article) => {
      console.log("handleDestroyArticle", article);
         axios.delete(`http://localhost:3000/articles/${article.id}.json`).then((response) => {
          setArticles(articles.filter((a) => a.id !== article.id));
        handleClose();
       });
      };

  useEffect(handleIndexArticles, []);

  return (
    <div>
      <ArticlesNew onCreateArticle={handleCreateArticle} />
      <ArticlesIndex articles={articles} onShowArticle={handleShowArticle} />
      <Modal show ={isArticlesShowVisible} onClose={handleClose}>

        <ArticlesShow article={currentArticle} onUpdateArticle={handleUpdateArticle} onDestroyArticle={handleDestroyArticle}/>

      </Modal>
    </div>
  );
}
