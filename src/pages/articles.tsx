import Layout from "@/layouts/Layout";

const articles = [
  {
    title: "Maximizing Productivity: Essential Tips for Python Developers",
    body: "From automating repetitive tasks to using the right libraries, we will explore the strategies that can make you more efficient and effective in your work. Whether you're a seasoned veteran or a beginner, this guide will provide you with the knowledge and resources you need to take your Python skills to the next level",
    href: "/articles/python-essentials/one",
    dateCreated: new Date("2023-02-01"),
  },
];

const Articles = () => {
  return (
    <Layout>
      <main className="py-24 space-y-4 flex flex-col items-center h-full">
        {articles.map((article, idx) => (
          <ArticleContainer
            key={idx}
            body={article.body}
            dateCreated={article.dateCreated}
            title={article.title}
            href={article.href}
          />
        ))}
      </main>
    </Layout>
  );
};

const ArticleContainer = ({
  title,
  body,
  href,
  dateCreated,
}: {
  title: string;
  body: string;
  href: string;
  dateCreated: Date;
}) => {
  const formattedDate = dateCreated.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <a
      href={href}
      className="max-w-xl border border-gray-300 bg-gray-50 dark:bg-gray-700 hover:bg-gray-500/10 rounded-lg shadow-sm flex flex-col"
    >
      <span className="inline-block ml-auto p-2 text-xs text-gray-500 dark:text-gray-300">
        {formattedDate}
      </span>
      <div className="flex flex-col py-4 px-2">
        <h2 className="text-gray-800 text-xl  dark:text-gray-100 font-medium">
          {title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 py-4 text-sm">{body}</p>
      </div>
    </a>
  );
};

export default Articles;
