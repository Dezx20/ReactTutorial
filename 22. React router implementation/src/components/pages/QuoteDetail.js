import { useParams, Route } from "react-router";
import { Fragment } from "react/cjs/react.production.min";
import Comments from "../../components/comments/Comments";
const QuoteDetail = () => {
  const params = useParams();
  console.log(params.quoteId);
  return (
    <Fragment>
      <h1>Quote Detail Page..</h1>
      <p>{params.quoteId}</p>
      {/* <Route path="/quotes/:quoteId/comment">        */}
      <Route path={`/quotes/${params.quoteId}/comment`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
