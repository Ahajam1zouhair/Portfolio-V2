import Marquee from "../../components/magicui/marquee";
import { cn } from "../../lib/utils";

const reviews = [
  {
    name: "FRONT-END",
  },
  {
    name: "FRONT-END",
  },
  {
    name: "BACK-END",
  },
  {
    name: "FRONT-END",
  },
  {
    name: "UL/UX",
  },
];

const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
}: {
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-84 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-xl font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background py-20 md:shadow-xl">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeDemo;
