import { useDispatch } from "react-redux";
import { addreaction } from "./state/slice";
import { memo } from "react";
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const RectionButton = ({ post }) => {
  const dispatch = useDispatch();
  const { id, reactions } = post;

  console.log(`ReactionButton render => ${id}`);

  const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        className='reactionButton'
        onClick={() => dispatch(addreaction({ id, name }))}
      >
        {emoji} {reactions[name]}
      </button>
    );
  });

  return (
    <>
      <div>{renderReaction}</div>
    </>
  );
};
export default memo(RectionButton);
