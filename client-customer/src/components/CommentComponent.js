import React from "react";
import moment from "moment";
const CommentComponent = ({ customer, content, date }) => {
  return (
    <div className="w-full my-2">
      <div className="flex shadow-xl rounded-lg gap-x-3 px-2 py-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-lg font-bold">{customer.name}</h1>
          <p>@{customer.username}</p>
        </div>
        <div className="flex flex-col justify-start items-start">
          
          <p className="text-lg">{content}</p>
          <p className="text-sm">{moment().fromNow(date)}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
