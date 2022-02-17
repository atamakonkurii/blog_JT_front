import React from "react";

import { Button } from "../atoms/Button";
import { UserImage } from "../atoms/UserImage";
import "./header.css";

type User = {
  name: string;
  image: string;
};

interface HeaderProps {
  user?: User;
}

export const Header = ({ user }: HeaderProps) => (
  <header>
    <div className="flex items-center justify-between h-14 bg-nittai_teal shadow text-white">
      <div>
        <span className="ml-2 text-lg md:text-2xl font-bold">日台one!</span>
      </div>
      <div>
        {user ? (
          <div className="flex flex-row items-center">
            <span className="text-xs pr-4">日本語⇄繁體中文</span>
            <div className="pr-2">
              <UserImage size="small" userImageUrl={user.image} />
            </div>
          </div>
        ) : (
          <>
            <span className="text-xs pr-4">日本語⇄繁體中文</span>
          </>
        )}
      </div>
    </div>
  </header>
);
