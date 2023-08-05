import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Discover your unique Destinations</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Italy"
          text="The Italian city of Venice (Venezia) is located on the Adriatic Sea in the northeast of the country. The city in Italy is divided into six districts and some of the most famous islands are Lido di Venezia, Murano and Burano. The special thing about your visit of Venice city is that there are no normal roads in the city. There is one long bridge between the mainland and Venice, with only one road and a railway."
        />

        <TripData
          image={Trip2}
          heading="Maldives Travel Guide"
          text="The Maldives Islands are the pride and pearls of the Indian Ocean and are spread over approximately 90,000 square km. The islands have become synonymous with white sandy beaches, turquoise lagoons, a romantic, peaceful atmosphere amidst tropical bliss and a water sport enthusiast’s paradise.
         From getting around Male and the islands, to everyday activities, visas and vaccinations, and travel tips, get all the essential details from our experts in this Maldives travel guide."
        />

        <TripData
          image={Trip3}
          heading="Sightseeing in Athens Greece"
          text="What to visit in Athens city? The capital of Greece is full of ancient monuments, temples, ruins and churches. For lovers of ancient Greece, this city is a paradise. You really have to see the Acropolis. This hill in the middle of Athens has some of the most important archaeological monuments. Throughout the city, however, you will find remains of temples and other monuments. Many of these are dedicated to the ancient Greek gods.
         Athens also has plenty of museums. The Acropolis museum and the National Archaeological Museum are perhaps the best known. The National Archaeological Museum, for example, has the largest collection of ancient Greek art in the entire country."
        />
      </div>
    </div>
  );
}

export default Trip;