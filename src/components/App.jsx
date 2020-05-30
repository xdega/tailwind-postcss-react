import React from "react";

const App = () => {
  const article = [
    "Welcome to this simple starter template for React + TailwindCSS.",
    `This template comprises of a minimal React setup (no redux, no cra cli) 
    to serve as a starting point for a diverse array of projects`,
    `Tooling includes Tailwind CSS library and Webpack for processing a 
    Distribution that strips out all unused CSS.`,
  ];

  return (
    <div className="p-5 flex flex-col min-h-screen">
      <Heading content="React + TailwindCSS = &hearts;" />
      <Article content={article} />
      <Footer content="Made with &hearts; by Liam Hockley" />
    </div>
  );
};

const Heading = ({ content }) => {
  /* 
    Tailwind CSS classes can often get quite lengthy. 
    By defining an array, we can eliminatine long lines.
  */
  const css = [
    "text-gray-800",
    "text-xl",
    "font-bold",
    "uppercase",
    "text-center",
    "mb-3",
  ];

  return <h1 className={css.join(" ")}>{content}</h1>;
};

const Article = ({ content }) => {
  const paragraphs = content.map((item) => {
    return <p className="mt-2">{item}</p>;
  });

  const css = [
    "text-gray-800",
    "bg-gray-100",
    "p-3",
    "pt-0",
    "border-2",
    "border-gray-300",
    "max-w-xl",
    "mx-auto",
    "mb-auto",
  ];

  return (
    <div className="flex-grow">
      <article className={css.join(" ")}>{paragraphs}</article>
    </div>
  );
};

const Footer = ({ content }) => {
  const css = ["text-gray-500", "text-center"];

  return <footer className={css.join(" ")}>{content}</footer>;
};

export default App;
