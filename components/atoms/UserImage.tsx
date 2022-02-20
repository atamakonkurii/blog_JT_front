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
        width= {40}
        height={40}
        className="rounded-full"
      />
    );
  } else if (size === "medium") {
    return (
      <Image
        src={userImageUrl}
        alt={"userImage"}
        width= {80}
        height={80}
        className="rounded-full"
      />
    );
  } else {
    return (
      <Image
        src={userImageUrl}
        alt={"userImage"}
        width= {120}
        height={120}
        className="rounded-full"
      />
    );
  }
};

UserImage.defaultProps = {
  userImageUrl:
    "https://static.nittai-one.com/uploads/user/avatar/1/A2DF3E52-272A-41F5-80C1-12B5B852C4B7.JPG",
  size: "medium",
};
