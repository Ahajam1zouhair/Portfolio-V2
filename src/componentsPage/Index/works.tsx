import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { cn } from "../../lib/utils";
import Marquee from "../../components/magicui/marquee";

const reviews = [
  { name: "BACK-END" },
  { name: "FRONT-END" },
  { name: "DEVELOPMENT" },
  { name: "UI/UX" },
  { name: "MAINTENANCE" },
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({
  name,
}: {
  name: string;
}) => {
  const value = useSelector((state: RootState) => state.mode.value);
  return (
    <figure
      className={cn(
        "relative w-60 cursor-pointer overflow-hidden rounded-xl border  border-text p-4"
      )}
    >
      <div className="flex flex-row gap-2">
        <div className="flex flex-col">
          <figcaption
            className={`text-xl font-extrabold text-center ml-10 ${
              value ? `colwhite` : `coldarck`
            } `}
          >
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function Works() {
  return (
    <div className="relative flex mb-5 w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} name={review.name} />
        ))}
      </Marquee>
    </div>
  );
}
