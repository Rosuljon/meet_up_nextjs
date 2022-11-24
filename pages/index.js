
import MeetupList from "../components/meetups/MeetupList";

const Dummy = [
  {
    id: "m1",
    title: "coding meetups",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    address: "namangan uzbekistan",
    description: 'this is a coding meetups'
  },
  {
    id: "m12",
    title: "coding meetups",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    address: "namangan uzbekistan",
    description: 'this is a coding meetups'
  },
];

const Homepage = () => {
  return (
      <MeetupList meetups={Dummy} />
    
  );
};

export default Homepage;
