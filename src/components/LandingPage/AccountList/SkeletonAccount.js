import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import React from "react";

export const SkeletonAccount = () => {
  return (
    <SkeletonTheme baseColor="#EEEEEE" highlightColor="#FFFFFF">
      <div className="col">
        <div className="account-list-view">
          <div className="account-detail-view">
            <div className="col-10 no-padding-element text-align-left">
              <Skeleton width={"100%"}></Skeleton>
              <Skeleton width={"50%"}></Skeleton>
            </div>
            <div className="col-2 no-padding-element text-align-right">
            </div>
          </div>
          <div className="account-detail-view font-color-dark">
            <Skeleton width={"50%"}></Skeleton>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

