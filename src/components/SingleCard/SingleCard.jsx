import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

const SingleCard = ({ card, onDelete }) => {
  const { id, category, title, authorName, date, imgUrl } = card;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/EditPost", { state: { post: card } });
  };

  return (
    <div>
      <div className="flex flex-col gap-2 border border-[#e7e7e7] w-[250px] h-[300px] p-2 rounded-md relative">
        <Link to={`Details/${id}`}>
          <div className="w-full h-[150px]">
            <img
              src={imgUrl}
              alt=""
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>
          <div className="w-full mt-2">
            <span className="text-[#6267ee] bg-[#f6f8ff] text-base inline-block px-2 rounded-md font-semibold">
              {category}
            </span>
            <h1 className="my-2 font-bold text-[18px] h-[64px] w-full leading-6">
              {title.slice(0, 70)}
            </h1>
            <div className="flex justify-between w-full mt-3 items-center">
              <span className="text-[13px] text-slate-400 font-medium">
                {authorName.slice(0, 25)}
              </span>
              <div className="text-[13px] text-slate-400 font-medium">
                {date}
              </div>
            </div>
          </div>
        </Link>
        <div>
          <button
            className="mt-2 p-1 bg-transparent bg-white text-xl text-black shadow-md hover:shadow-red-600 rounded-md font-semibold absolute top-[152px] right-1"
            onClick={() => onDelete(id)}
          >
            <MdDeleteForever className="hover:text-red-500" />
          </button>
          <button
            className="mt-2 p-1 bg-transparent text-xl text-black shadow-md hover:shadow-green-600 rounded-md font-semibold absolute top-[152px] right-10"
            onClick={handleEdit}
          >
            <BiEdit className="hover:text-green-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
