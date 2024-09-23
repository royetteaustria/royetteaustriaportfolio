import dental from '../../assets/img/Screenshot 2024-06-05 091717.png'
import lourdes from '../../assets/img/Screenshot 2024-07-31 123658.png'

const Portfolio = () => {
  return (
    <div className="container py-16 md:py-20 px-12" id="portfolio">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Portfolio
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I have done with the past
      </h3>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        <div className='relative p-2'>
        <a
          href="https://our-lady-of-lourdes-parish-church-tagaytay-city.vercel.app/"
          className="mx-auto transform transition-all md:mx-0"
        >
          <img
            src={lourdes}
            className="w-full shadow hover:scale-105"
            alt="portfolio image"
          />
        </a>
        <p className='text-center font-medium text-xl  py-6'>Reservation And Record Management System</p>
        </div>
        <div className='relative p-2'>
        <a
          href="https://github.com/royetteaustria/DentalRecordManagementSystem"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src={dental}
            className="w-full shadow hover:scale-105"
            alt="portfolio image"
          />
        </a>
        <p className='text-center font-medium text-xl  py-6'>Dental Record Management System</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
