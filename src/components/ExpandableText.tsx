import { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
  const [expand, setExpand] = useState(false);

  if (children.length <= maxChars)
    return (
      <div>
        <p>{children}</p>
      </div>
    );

  return (
    <div>
      <p>
        {expand ? children : children.substring(0, maxChars + 1) + "..."}
        <button onClick={() => setExpand(!expand)}>
          {expand ? "Less" : "More"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableText;
