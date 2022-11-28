import MeetupDetail from "../../components/meetups/MeetupDetail";
import mongoose from "mongoose";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      desc={props.meetupData.desc}
    />
  );
}
export async function getStaticPaths() {
  const conn = await mongoose.connect('mongodb+srv://RonnyDev7:RonnyDev7@meetup.zzxbj4g.mongodb.net/meetup?retryWrites=true&w=majority');
  console.log(`connected3: ${conn.connection.host}`);
  const db = mongoose.connection.db;
  const meetupsCollection = db.collection('meetup')
  const meetups = await meetupsCollection.find({},{_id: 1}).toArray();
  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: {meetupId: meetup._id.toString()},
    })),
  };
}

export async function getStaticProps(content) {
  const meetupId = content.params.meetupId;

  const conn = await mongoose.connect('mongodb+srv://RonnyDev7:RonnyDev7@meetup.zzxbj4g.mongodb.net/meetup?retryWrites=true&w=majority');
  console.log(`connected4: ${conn.connection.host}`);
  const db = mongoose.connection.db;
  const meetupsCollection = db.collection('meetup')
  const selectedMeetup = await meetupsCollection.findOne({_id: mongoose.Types.ObjectId(meetupId)})
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      },
    },
  };
}

export default MeetupDetails;
