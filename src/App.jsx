import { useState, useEffect } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "DIGGAAA",
      "Last chance!",
      "Surely not?",
      "Ich werde die bōss dinge antun",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Arschloch, klick Ja",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Das ist das allerletzte!",
      "You might regret this!",
      "Plsss? T-T You're breaking my heart",
      "Imma eat you my FRESSALIEN",
      "WHAT HUH CANT HANDLE MY LOVE OR WHAAT,WEICHEI",
      "Mannomann 😭",
      "Why my GEIL Girl acting like this 😭",
      "Click YES and I can be your Schnucki,Mous,Hase and Barchen👀",
      "Du gehst mir auf den keks😫",
      "Du bist mein Augenstern(CLICK YESSS)",
      "Du bist mein ein und Alles😘",
      "Come on,My Herzblatt💖",
      "You are My only Schatz",
      "Ich Liee Dich bis zum Mond und zuruck💟"
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  useEffect(() => {
    if (yesPressed) {
      // Set a timeout to redirect after 5 seconds
      const timer = setTimeout(() => {
        window.location.href = "/date.html"; // Change this to your target HTML page
      }, 5000); // 5000 milliseconds = 5 seconds

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [yesPressed]);

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-xl md:text-2xl font-bold my-4" style={{ color: "red" }}>
            YIPEEEEEE!!! And CONGRATULATIONSSS🍰Alles Gute Zum Geburtstag🥳🎉 My Lovely Little Princess {"\u2764"}
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will You Be My Girlfriend B'Day Girl?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="#"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️ for My Sylve😉
      </span>
    </a>
  );
};
