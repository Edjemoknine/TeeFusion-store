import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
type ReviewProps = {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  comment: string;
  date: string;
  starts: number;
};
const ReviewCard = ({ review }: { review: ReviewProps }) => {
  return (
    <div
      key={review.id}
      className="flex flex-col xl:flex-row py-3 items-center justify-between gap-4"
    >
      <div className="flex items-center gap-6">
        <div className="">
          {review.user.avatar ? (
            <Image
              src={review.user.avatar}
              alt=""
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full flex text-neutral-500 font-semibold justify-center items-center  bg-neutral-200">
              {review.user.name.slice(0, 2)}
            </div>
          )}
        </div>
        <div>
          <p className="text-sm text-neutral-800 capitalize font-medium">
            {review.user.name}
          </p>
          <p className=" text-neutral-500 text-sm">{review.date}</p>
          <p className="text-sm max-w-sm text-neutral-500 truncate">
            {review.comment}..
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {Array(5)
          .fill(1)
          .map((start, index) => (
            <FaStar
              className={cn("", index < review.starts && "text-orange-300")}
              key={start}
            />
          ))}
      </div>
    </div>
  );
};

export default ReviewCard;
