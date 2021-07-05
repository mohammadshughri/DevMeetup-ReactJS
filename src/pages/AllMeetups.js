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
    image:
      "https://lh3.googleusercontent.com/proxy/VpK2dOoB2SWui-_yHcS3cAXUxyTWjpWPWvJgXSCDMz3nvZMga5kvO4-k7Sc3Rivn3a2A-SuEv47FLS7AmhBlnkfORyGgVBgW2358zbm9JYPsWHbk5fvSHO8dmA",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is the second meetup. It will be located in Tokyo",
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
