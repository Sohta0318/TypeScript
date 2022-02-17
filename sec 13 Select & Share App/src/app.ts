import axios from "axios";

const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCrwWkgcwyRZEhsHGGVMO-N-LIoPCKHfIA";

declare var google: any;

const searchAddressHandler = (e: Event) => {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: "OK" | "ZERO RESULTS";
  };

  // send this to Google API
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinate = response.data.results[0].geometry.location;

      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: coordinate,
          zoom: 8,
        }
      );

      new google.maps.Marker({
        position: coordinate,
        map: map,
      });
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
};

form.addEventListener("submit", searchAddressHandler);
