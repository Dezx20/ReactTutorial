import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <Fragment>
      <MeetupDetail
        image="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555275019/shape/mentalfloss/istock-510692123.jpg"
        title="first meetup"
        address="some random address, houes no 23"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laboriosam
        sed in dolor iusto possimus sint maiores, exercitationem tempore nobis!"
      />
    </Fragment>
  );
};

export default MeetupDetails;
