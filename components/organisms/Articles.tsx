import React from "react";

import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";
import { ArticleSummary } from "../molecules/ArticleSummary";

type User = {
  name: string;
  image: string;
};

interface ArticlesProps {
  user?: User;
}

export const Articles: React.VFC<ArticlesProps> = (props) => {
  return (
    <>
      <Header user={props.user} />
      <div className="flex flex-wrap m-2 max-w-screen-xl mx-auto">
        <ArticleSummary
          user={{
            image:
              "https://static.nittai-one.com/uploads/user/avatar/2/CE1865EF-A2B8-4E83-9701-08EBF1E5E68C.jpeg",
            name: "Mimo",
          }}
        />
        <ArticleSummary
          user={{
            image:
              "https://static.nittai-one.com/uploads/user/avatar/2/CE1865EF-A2B8-4E83-9701-08EBF1E5E68C.jpeg",
            name: "Mimo",
          }}
        />
        <ArticleSummary
          user={{
            image:
              "https://static.nittai-one.com/uploads/user/avatar/2/CE1865EF-A2B8-4E83-9701-08EBF1E5E68C.jpeg",
            name: "Mimo",
          }}
        />
        <ArticleSummary
          user={{
            image:
              "https://static.nittai-one.com/uploads/user/avatar/2/CE1865EF-A2B8-4E83-9701-08EBF1E5E68C.jpeg",
            name: "Mimo",
          }}
        />
      </div>
      <Footer />
    </>
  );
};
