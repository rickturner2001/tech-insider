const ArticleLayout = ({
  imgSrc,
  title,
  titleNote,
  photoCredits,
  headersList,
  children,
}: {
  imgSrc: string;
  title: string;
  titleNote: string;
  photoCredits: JSX.Element;
  headersList: string[][];
  children?: JSX.Element;
}) => {
  return (
    <section className="prose md:mx-auto py-24 dark:prose-invert md:prose-lg sm:prose prose-sm lg:prose-xl">
      <h1>{title}</h1>
      <p className="text-gray-500 dark:text-gray-400">{(titleNote = "")}</p>
      <img src={imgSrc} className="w-full h-full object-cover" />
      <p className="text-right text-xs text-gray-500 dark:text-gray-300">
        Photo by {photoCredits}
      </p>
      <hr />
      <ol className="prose-ol:list-none">
        {headersList.map((listItem) => {
          const [title, href] = listItem;
          return (
            <li key={href}>
              <a className="text-violet-600 dark:text-violet-400" href={href}>
                {title}
              </a>
            </li>
          );
        })}
      </ol>
      <hr />
      <br />
      {children}
    </section>
  );
};

export default ArticleLayout;
