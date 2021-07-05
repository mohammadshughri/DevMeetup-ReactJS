import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlfor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlfor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlfor="title">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlfor="title">Description</label>
          <input type="text" required id="description" />
          <textarea id='description' required rows='5'></textarea>
        </div>
        <div className={classes.action}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
