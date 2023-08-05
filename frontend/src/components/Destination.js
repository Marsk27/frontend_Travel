import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppurtunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Manali"
        text="Nestled in the lush greenery of the Himalayas, Manali is a serene and picturesque hill station that is known for its snow-capped mountains, tranquil rivers, and stunning natural beauty. It is a popular destination for adventure seekers, nature lovers, and honeymooners alike, offering a plethora of activities like skiing, trekking, camping, and paragliding. From exploring the ancient temples and historical sites to relishing the local cuisine and shopping for handicrafts, there is something for everyone in Manali."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="GOA"
        text="Welcome to the land of sun, sea, and sand! Goa, the smallest state of India, is a tropical paradise that is known for its pristine beaches, vibrant nightlife, and rich cultural heritage. From the bustling streets of Panaji to the laid-back vibe of Palolem, Goa offers a unique blend of Indian and Portuguese cultures that is evident in its architecture, cuisine, and music. Visitors can indulge in a range of water sports, enjoy a relaxing massage on the beach, or explore the ancient churches and temples that dot the state. With its warm and welcoming people, vibrant culture, and endless entertainment options, Goa is the ultimate holiday destination for all those seeking a sun-kissed break"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
