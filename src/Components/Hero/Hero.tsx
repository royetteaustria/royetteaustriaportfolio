import { IoIosArrowForward } from 'react-icons/io';
import background from '../../assets/img/backgroundhero.jpg'
import yet from '../../assets/img/467486339_3553397041471993_2447553812964779020_n.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Hero = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-8"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
          <div
  className="rounded-full border-8 border-primary shadow-xl overflow-hidden w-48 h-48 sm:w-56 sm:h-56"
  data-aos="fade-right"
  data-aos-duration="1000"
>
  <img
    src={yet}
    className="w-full h-full object-cover"
    alt="author"
  />
</div>

            <div
              className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I'm Royette Austria!
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">
                    Let's connect
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"><IoIosArrowForward /></i>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <a
                    href="https://www.linkedin.com/in/royette-austria/"
                    className="pl-4"
                  >
                    
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"><FaLinkedin /></i>
                  </a>
                  <a href="https://github.com/royetteaustria" className="pl-4">
                    <i className="bx bxl-github text-2xl text-white hover:text-yellow"><FaGithub /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
