import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import React from "react";

export const SkeletonAccount = () => {
  return (
    <SkeletonTheme baseColor="#EEEEEE" highlightColor="#FFFFFF">
      <Skeleton width={"100%"}></Skeleton>
    </SkeletonTheme>
  );
};
