import { WEBSITE_NAME } from "../config";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="m-2 p-3 text-md flex flex-col">
        <div className="flex mx-auto gap-2">
          <p className="">Every meal is a choice.</p>
          <p>Every fast is progress.</p>
          <p>Built to help you stay consistent and healthy.</p>
        </div>
      </div>
      <hr className="w-1/2 mx-auto" />
      <div className="p-10 px-28">
        <p className="text-justify">
          <span className="font-bold">Disclaimer:</span> The information
          provided on this website is intended for general informational and
          educational purposes only and is not a substitute for professional
          medical advice, diagnosis, or treatment. Before making any changes to
          your diet, fasting routine, exercise habits, or lifestyle based on the
          content of this website, you should consult a qualified healthcare
          professional for a personalized health assessment and guidance. Any
          information you find on this website should be reviewed with your
          healthcare provider in light of your individual health conditions and
          circumstances.
        </p>
      </div>
      <div className="bg-gray-400 p-2">
        <p className="text-sm text-white text-center">
          © 2026 {WEBSITE_NAME} created by Mikail Khan with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
