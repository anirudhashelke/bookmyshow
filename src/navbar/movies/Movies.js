import React from 'react'
import "./movies.css"
import { Carousel } from 'react-responsive-carousel'
import Filter from '../../component/filter/Filter'
import Appliedfilter from '../../component/filter/Appliedfilter'
import Button from '../../component/Button'
import Headerbaner from '../../component/Headerbaner'
import Mucards from '../../component/Mucards/Mucards'
const moviesImg = [
  "m-1.avif",
  "m-2.avif",
  "m-3.avif",
]

const moviesData = [
  {
      movieName: "Manjummel Boys",
      movieCertificate: "U",
      language: "malayalam",
      src: "movies/cards-1.avif",
  },
  {
      movieName: "Premalu",
      movieCertificate: "U",
      language: "malayalam",
      src: "movies/cards-2.avif",
  },
  {
      movieName: "AnchakkallaKokkan",
      movieCertificate: "UA",
      language: "Marathi",
      src: "movies/cards-3.avif",
  },
  {
      movieName: "Godzila x Kong",
      movieCertificate: "UA",
      language: "English",
      src: "movies/cards-4.avif",
  },
  {
    movieName: "Kung Fu Panda 4",
    movieCertificate: "UA",
    language: "Hindi",
    src: "movies/c-5.avif",
},
{
    movieName: "dune:Part Two",
    movieCertificate: "UA",
    language: "Hindi",
    src: "movies/c-6.avif",
},
{
    movieName: "Yodha",
    movieCertificate: "UA",
    language: "Marathi",
    src: "movies/c-7.avif",
},
{
    movieName: "Shaitaan",
    movieCertificate: "UA",
    language: "Tamil",
    src: "movies/c-8.avif",
},
{
    movieName: "Bramyugam",
    movieCertificate: "UA",
    language: "English",
    src: "movies/c-9.avif",
},
{
    movieName: "Secret Home",
    movieCertificate: "UA",
    language: "Marathi",
    src: "movies/c-10.avif",
},
{
    movieName: "Madgaon Express",
    movieCertificate: "UA",
    language: "Hindi",
    src: "movies/c-11.avif",
},
{
    movieName: "Thakamani",
    movieCertificate: "UA",
    language: "Marathi",
    src: "movies/c-12.avif",
},
];
const Movies = () => {

  const data = [
    {
      title: "Languages",
      buttons: ["Marathi", "Hindi", "English", "Telugu", "Korean", "Tamil", "Malayalam"],
    },
    {
      title: "Genres",
      buttons: ["Drama", "Thiller", "Action", "Horror", "Advanture", "Animation", "Biography", "Historical", "Romantic", "Crime", "Comedy", "Political", "Supernatural", "Sci-Fi"],
    },
    {
      title: "Format",
      buttons: ["2D", "3D", "4DX", "4DX 3DX", "3D SCREEN X", "IMAX 3D", "MX4D 3D", "ICE 3D",],
    },
  ];
  return (
    <>
      <section className='mt-3'>
        <Carousel showThumbs={false} interval={5000} infiniteLoop={true} showStatus={false} autoPlay >
          {moviesImg.map((values) => {
            return <>
              <div>
                <img className='rounded-3 w-100' src={values} alt='#' />
              </div>
            </>
          })}

        </Carousel>

        {/* filter */}
        <div className='container  py-5'>
          <div className="row m-0">
            {/* left  */}
            <div className='col-12 col-md-3   ps-0 '>
              <h4 style={{ fontSize: "24px", fontWeight: "700", color: "rgb(51, 51, 51)" }}>Filters</h4>
              {data.map((value) => {
                return <Filter key={value.title} buttons={value.buttons} title={value.title} />
              })}
              <Button btnType="outline" title={"Browse by Cinemas"} />
            </div>
            {/* right */}
            <div className='col-12 col-md-9'>
              <div>
                <Appliedfilter title={"Movies in Selu"} buttons={["Hindi", "Marathi", "Thriller"]} />
                <div className="my-4">
                                <Headerbaner
                                    title2={"Explore Upcomming Movies"}
                                    title={"Comming Soon"}
                                />
                            </div>

                            <div className="row">
                                {moviesData.map(value => <div key={value.movieName} className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-3">
                                    <Mucards {...value} />
                                </div>)}
                            </div>
              </div> 
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Movies