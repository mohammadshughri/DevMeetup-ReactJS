import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();

  function addMeetupHandler(meetupDate) {
    //connecting firebase database with the local database
    fetch(
      "https://reactjs-meetup-3c8ed-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupDate),
        //headers is used to identify that this request carries JSON data
        headers: {
          "Content-Type": "application/json",
        },
      }
      //Navigating away to the main page once the form is filled
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
