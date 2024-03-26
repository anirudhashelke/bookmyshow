import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "./streams.css"
import PromotedBanner from './PromotedBanner';
import Multicarouselcard from '../../component/Multicarouselcard/Multicarouselcard';
const streamdata = [
  {
    description:
      "A clumsy panda bear named Po becomes an unlikely kung fu hero when a treacherous enemy spreads chaos throughout the countryside.",

    language: "English",
    slug: "1h 32m . Adventure, Animation, Comedy . U",
    movieName: "Kung fu panda",
    title: "Brand new release every friday",
    posterPath: "StramsImg/panda.jpg",
    path:
      "url(StramsImg/pand-1.jpg)",
  },
  {
    isPremiere:true,
    description:
      "Set in the underbelly of the Mumbai underworld, the story revolves around the succession battle of mafia don Nawab Khan, who is suffering from blood cancer and has only a few days to live. Who is the Aazam of this battle of defeat and victory?",
    language: "Hindi",
    slug: "2h 8m • Crime, Mystery, Thriller • UA",
    movieName: "Aazam",
    title: "Brand new release every friday",
    posterPath: "StramsImg/azam.jpg",
    path:
      "url(StramsImg/azam-1.jpg)",
  },
  {
    isPremiere:true,
    description:
      "Now that Chris and his girlfriend, Rose have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway in her parent`s home upstate. At first, Chris reads the family`s overly accommodating behavior as nervous attempts to deal with their daughter`s interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he could have never imagined.",
    language: "English",
    slug: "1h 44m • Drama, Horror, Thriller • A",
    movieName: "Get Out",
    title: "Brand new release every friday",
    posterPath: "StramsImg/get.jpg",
    path:
      "url(StramsImg/get-1.jpg)",
  },
  {
    description:
      "Feature adaptation of Frank Herbert`s science fiction novel, Dune revolves around Paul Atreides, who leads nomadic tribes in a battle to control the desert planet Arrakis.",
    language: "English",
    slug: "2h 35m • Action, Adventure, Drama, Sci-Fi • UA",
    movieName: "Dune",
    title: "Brand new release every friday",
    posterPath: "StramsImg/dune.jpg",
    path:
      "url(StramsImg/dune-1.jpg)",
  },
  {

    description:
      "Bookmyshow Stream Runtime: 3h 3 mins The film is based on the Pulitzer Prize-winning book American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer by Kai Bird and the late Martin J. Sherwin.",
    language: "English",
    slug: "3h 10m • Biography, Drama, Historical • UA",
    movieName: "Oppenheimer",
    title: "Brand new release every friday",
    posterPath: "StramsImg/p-1.jpg",
    path:
      "url(StramsImg/p.jpg)",
  },
  {
    isPremiere:true,
    description:
      "In a violence-ridden neighborhood, fate puts a witty and ambitious young man in the crosshairs with a powerful gangster. Will he succumb to violence or find other ways to fight back?",
    language: "English",
    slug: "3h 10m • Biography, Drama, Historical • UA",
    movieName: "Dinosaurs",
    title: "Brand new release every friday",
    posterPath: "StramsImg/d-1.avif",
    path:
      "url(StramsImg/d.avif)",
  },
  {
    isPremiere:true,
    description:
      "In a violence-ridden neighborhood, fate puts a witty and ambitious young man in the crosshairs with a powerful gangster. Will he succumb to violence or find other ways to fight back?",
    language: "English",
    slug: "1h 40m • Biography, Drama, Historical • UA",
    movieName: "Muzzle",
    title: "Brand new release every friday",
    posterPath: "StramsImg/m-1.avif",
    path:
      "url(StramsImg/m.avif)",
  },
]
const Stream = () => {
  const moviesdata=[
    {
      title:"Premiere of the week",
      srcData:[ 
         "streamsmovis/s-1.avif",
          "streamsmovis/s-2.avif",
          "streamsmovis/s-3.avif",
          "streamsmovis/s-4.avif",
          "streamsmovis/s-5.avif",
          "streamsmovis/s-6.avif",
        ]
    },
    {
      title:"New on Stream",
      isShowAll:"true",
      srcData:[ 
         "streamsmovis/l-1.avif",
          "streamsmovis/l-2.avif",
          "streamsmovis/l-3.avif",
          "streamsmovis/l-4.avif",
          "streamsmovis/l-5.avif",
          "streamsmovis/l-6.avif",
          "streamsmovis/l-7.avif",
          "streamsmovis/l-8.avif",
          "streamsmovis/l-9.avif",
          "streamsmovis/l-10.avif",
        ],
        book:"true",
    },
    {
      title:"Top 10 TV Shows",
      isShowAll:"true",
      srcData:[ 
         "streamsmovis/t-1.avif",
          "streamsmovis/t-2.avif",
          "streamsmovis/t-3.avif",
          "streamsmovis/t-4.avif",
          "streamsmovis/t-5.avif",
          "streamsmovis/t-6.avif",
          "streamsmovis/t-7.avif",
          "streamsmovis/t-8.avif",
          "streamsmovis/t-9.avif",
          "streamsmovis/t-10.avif",
        ],   
    },
    {
      title:"Top 10 TV Shows",
      isShowAll:"true",
      srcData:[ 
         "streamsmovis/y-1.avif",
          "streamsmovis/y-2.avif",
          "streamsmovis/y-3.avif",
          "streamsmovis/y-4.avif",
          "streamsmovis/y-5.avif",
          "streamsmovis/y-6.avif",
          "streamsmovis/y-7.avif",
          "streamsmovis/y-8.avif",
          "streamsmovis/y-9.avif",
          "streamsmovis/y-10.avif",
          "streamsmovis/y-11.avif",
          "streamsmovis/y-12.avif",
          "streamsmovis/y-13.avif",
          "streamsmovis/y-14.avif",
          "streamsmovis/y-15.avif",
        ],   
    },
  
  ]
  return (
    <section className="a_promoted_banners">
      <Carousel infiniteLoop autoPlay showStatus={false} className="h-100">
        {streamdata.map((values, index) => {
          return <PromotedBanner key={index}
            {...values}
          />
        })}
      </Carousel>
      <div className="my-5  container">
        {moviesdata.map((movies,index)=>{
        return <Multicarouselcard   key={index}
          {...movies}
        /> 
        })}
        </div>            
    </section>
  )
}

export default Stream