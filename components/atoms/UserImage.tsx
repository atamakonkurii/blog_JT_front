import React from "react";
import Image from "next/image";

type UserImageProps = {
  userImageUrl: string;
  size: "small" | "medium" | "large";
};

export const UserImage = ({ userImageUrl, size }: UserImageProps) => {
  if (size === "small") {
    return (
      <Image
        src={userImageUrl}
        alt={"userImage"}
        className="rounded-full w-10 h-10"
      />
    );
  } else if (size === "medium") {
    return (
      <Image
        src={userImageUrl}
        alt={"userImage"}
        className="rounded-full w-20 h-20"
      />
    );
  } else {
    return (
      <Image
        src={userImageUrl}
        alt={"userImage"}
        className="rounded-full w-30 h-30"
      />
    );
  }
};

UserImage.defaultProps = {
  userImageUrl:
    "https://static.nittai-one.com/uploads/user/avatar/1/A2DF3E52-272A-41F5-80C1-12B5B852C4B7.JPG",
  size: "medium",
};
