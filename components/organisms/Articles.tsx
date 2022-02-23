import React from "react";

import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";
import { ArticleSummary } from "../molecules/ArticleSummary";

type User = {
  name: string;
  image: string;
};

type Article = {
  attributes: {
    title_ja: string;
    content_ja: string;
    title_image: { url: string };
    created_at: string;
  };
};

interface ArticlesProps {
  loginUser?: User;
  articles?: any;
}

export const Articles: React.VFC<ArticlesProps> = (props) => {
  return (
    <>
      <Header user={props.loginUser} />
      <div className="flex flex-wrap m-2 max-w-screen-xl mx-auto">
        {props.articles.map((article: Article) => {
          const title_image = article.attributes.title_image.url;
          const title = article.attributes.title_ja;
          const content = article.attributes.content_ja;
          const created_at = article.attributes.created_at;
          return (
            // eslint-disable-next-line react/jsx-key
            <ArticleSummary
              article={{
                title_image: title_image,
                title: title,
                content: content,
                created_at: created_at,
              }}
              user={{
                image:
                  "https://static.nittai-one.com/uploads/user/avatar/2/CE1865EF-A2B8-4E83-9701-08EBF1E5E68C.jpeg",
                name: "MIMO",
              }}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};
