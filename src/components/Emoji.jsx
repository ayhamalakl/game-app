import bullsEye from "../assets/images/bulls-eye.webp";
import meh from "../assets/images/meh.webp";
import thumbsUp from "../assets/images/thumbs-up.webp";

export const Emoji = ({ rating }) => {
    if (rating < 3) return null;

    const emojiMap = {
        3: { src: meh, alt: "meh" },
        4: { src: thumbsUp, alt: "thumbsUp" },
        5: { src: bullsEye, alt: "bullsEye" },
    };

    return <img {...emojiMap[rating]} width={25} />;
};
