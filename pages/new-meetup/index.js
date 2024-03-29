import {useRouter} from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';

const NewMeetUp = () => {
    const router = useRouter();
    const addMeetupHandler = async (data1) =>{
        const response = await fetch('api/new-meetup',{
          method: 'POST',
          body: JSON.stringify(data1),
          headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        console.log(data);
        router.push('/');
    }
  return (
        <>
        <Head>
        <title>React New MeetUps</title>
        <meta
          name="description"
          content="Add new Meetup Here"
        />
      </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
  )
}

export default NewMeetUp