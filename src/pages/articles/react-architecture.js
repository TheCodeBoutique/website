import React from 'react';
import ArticleToolbar from "../../components/articles/article-toolbar";
import connectViewToControllers from "../../framework/alto/data/controller/connect_controller";
import webArticlesController from "../../controllers/web-articles-controller";
import ArticleHeadline from "../../components/articles/article-headline";

const ReactArchitectureArticle = ({
    data
                                  }) =>  (

    <div>
        <ArticleToolbar date={data[0].date} author={data[0].author}/>
        <ArticleHeadline heroFrameClassName="heroCredsFramePeach" title={data[0].title} subTitle={data[0].subTitle} hero={data[0].hero} heroCreds={data[0].heroCreds} />
    </div>
);

export default connectViewToControllers(ReactArchitectureArticle, {data: webArticlesController});