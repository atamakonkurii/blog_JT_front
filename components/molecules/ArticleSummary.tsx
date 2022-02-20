import React from "react";
import Image from "next/image";

import { UserImage } from "../atoms/UserImage";

type User = {
  name: string;
  image?: string;
};

interface ArticleSummaryProps {
  user: User;
}

export const ArticleSummary = ({ user }: ArticleSummaryProps) => (
  <div className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div>
        <Image
          src="https://dummyimage.com/720x400"
          width={720}
          height={400}
          alt="blog"
        />
      </div>

      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          TITLE
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          タイトルです
        </h1>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        <div className="flex items-center flex-wrap">
          <p className="text-sm md:text-base font-normal text-gray-400">
            日本 愛知
          </p>
        </div>
        <div className="flex items-center flex-wrap my-1 ">
          <p className="m-0.5 bg-gray-100 hover:bg-gray-200 rounded-md px-2 text-xs leading-loose cursor-pointer">
            tag
          </p>
        </div>
        <span className="flex pt-1">
          <UserImage size="small" userImageUrl={user.image} />
          <div className="text-xs md:text-sm font-normal text-gray-400 pl-1 my-auto">
            <p>{user.name}</p>
            1年前
          </div>
        </span>
      </div>
    </div>
  </div>
);
