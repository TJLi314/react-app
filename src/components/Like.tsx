import { useState } from "react";
import { FaHeart, FaRegHandPeace } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  if (liked) {
    return (
      <FaHeart
        color="red"
        size={20}
        onClick={() => {
          onClick();
          setLiked(false);
        }}
      />
    );
  } else {
    return (
      <FaRegHeart
        size={20}
        onClick={() => {
          onClick();
          setLiked(true);
        }}
      />
    );
  }
};

export default Like;
