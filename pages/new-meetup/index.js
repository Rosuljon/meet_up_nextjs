import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUp = () => {
    const addMeetupHandler = (data) =>{
        console.log(data);
    }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default NewMeetUp