// @ address- our-domain.com/news
import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="news/todo1">Learing NextJS</Link>
        </li>
        <li>
          <Link href="news/todo2">Still learning NextJS</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
