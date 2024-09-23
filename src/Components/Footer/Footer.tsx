import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-2 sm:flex-row">
        <p className="text-center font-body pt-3 text-white md:text-left">
          Built by Royette Austria
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <a
            href="https://www.linkedin.com/in/royette-austria/"
            className="pl-4"
          >
            <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow">
              <FaLinkedin />
            </i>
          </a>
          <a href="https://github.com/royetteaustria" className="pl-4">
            <i className="bx bxl-github text-2xl text-white hover:text-yellow">
              <FaGithub />
            </i>
          </a>
          <p className="p-4 ml-2 text-white">austriaroyette@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
