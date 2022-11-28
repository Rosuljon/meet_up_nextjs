import MeetupList from "../components/meetups/MeetupList";
import mongoose, { connection } from "mongoose";
import Head from "next/head";

const Homepage = (props) => {
  return (
    <>
      <Head>
        <title>React MeetUps</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
};

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: Dummy
//     }
//   }
// }
export async function getStaticProps() {
  //fetch data from an Api
  const conn = await mongoose.connect(
    "mongodb+srv://RonnyDev7:RonnyDev7@meetup.zzxbj4g.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  console.log(`connected1: ${conn.connection.host}`);
  const db = mongoose.connection.db;
  const meetupsCollection = db.collection("meetup");
  const meetups = meetupsCollection.find().toArray();

  return {
    props: {
      meetups: (await meetups).map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        desc: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default Homepage;
