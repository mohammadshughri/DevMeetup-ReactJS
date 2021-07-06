import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "First meetup: Silicon Valley",
    image:
      "https://blog.youthall.com/wp-content/uploads/2020/11/silicon-780x450.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is the first meetup, located in silicon valley, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "Second meetup: Tokyo",
    image: "https://www.hisglobal.com.tr/assets/images/uploads/1583759608.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is the second meetup. It will be located in Tokyo",
  },
];

function AllMeetups() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetups;
