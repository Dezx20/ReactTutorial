import { Fragment, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555275019/shape/mentalfloss/istock-510692123.jpg",
    address: "Some address 3, 434 ciity",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto sed fuga odio blanditiis voluptate labore in nam totam quasi?",
  },
  {
    id: "m2",
    title: "second meetup",
    image:
      "https://d3d5bpai12ti8.cloudfront.net/wp-content/uploads/20210603193845/mlera-aerial-view-50763560.jpg",
    address: "Some address 12, 2 city",
    discription:
      "labore in nam totam quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto sed fuga odio blanditiis voluptate ?",
  },
];
const HomePage = (props) => {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);

  //   useEffect(() => {
  //     // send a http request & fetch data
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);

  return (
    <Fragment>
      {/* <MeetupList meetups={loadedMeetups} /> */}
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};
export const getStaticProps = async () => {
  // fetch data from an API
  return {
    //@ always returns a object
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 3,
  };
};
export default HomePage;
