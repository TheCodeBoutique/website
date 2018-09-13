import React, {Fragment} from 'react';
import webArticlesController from "../../controllers/web-articles-controller";
import connectViewToControllers from "../../framework/alto/data/controller/connect_controller";
import ArticleToolbar from "../../components/articles/article-toolbar";
import ArticleHeadline from "../../components/articles/article-headline";

const GlimmerArticle = ({
                            data
                        }) =>  (

    <div>
        <ArticleToolbar date={data[1].date} author={data[1].author}/>
        <ArticleHeadline heroFrameClassName="heroCredsFramePurple" title={data[1].title} subTitle={data[1].subTitle} hero={data[1].hero} heroCreds={data[1].heroCreds} />
    </div>
);

export default connectViewToControllers(GlimmerArticle, {data: webArticlesController});