import IconCloud from "../../components/magicui/icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postman",
  "firebase",
  "mongodb",
  "vercel",
  "docker",
  "redux",
  "git",
  "php",
  "laravel",
  "jira",
  "github",
  "gitlab",
  "mysql",
  "visualstudiocode",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full  w-full mditems-center justify-center overflow-hidden rounded-lg  bg-background pb-20 scroll-py-10">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
