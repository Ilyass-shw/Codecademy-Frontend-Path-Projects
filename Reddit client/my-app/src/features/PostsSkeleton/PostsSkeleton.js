import React from "react";
import "./PostsSkeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PostsSkeleton = () => {
	return (
		<div>
			<SkeletonTheme color="#262626" highlightColor="#444">
				<div className="post-block">
					<div className="content-image">
						<Skeleton width="240px" height="10rem" />
					</div>

					<div className="post-data">
						<div className="post-data-container">
							<Skeleton width="180px" height="20px" />
							<Skeleton width="140px" height="13px" />
						</div>

						<div className="subreddit">
							<Skeleton className="subreddit-icon" />
							<Skeleton width="80px" height="13px" />
						</div>
					</div>
				</div>
			</SkeletonTheme>
		</div>
	);
};

export default PostsSkeleton;
