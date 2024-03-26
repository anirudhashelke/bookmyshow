import React from 'react'

const MenuLinks = () => {
     const data=[
        {
        title:"Movies Now Showing in Kochi",
         links:["Joshua","Manjummel Boys","Premalu","Anchakkallakokkan","Kung Fu Panda 4","Yodha","Joshua: Imai Pol Kaakha","Thankamani","Dune: Part Two","Shaitaan","Ithuvare"]
        },
        {
        title:"Upcoming Movies in Kochi",
        links:["Haddhu Ledhuraa ", "Bigul",  "Madgaon Express ", "Love Lies Bleeding ", "Rakshasa Tantra" ,"Imaginary", "Majnoo" , "Swatantra Veer Savarkar" , "Arthur The King" ,"Ananya (2024)"]
        },
        {
        title:"MOVIE UPDATES AND CELEBRITIES",
        links:["Upcoming Movies", " Movies Now Showing" , "Movie Celebrities"]
        },
        {
        title:"MOVIES PER WEEK",
        links:["Movies Playing Today" , "Movies Playing Tomorrow ", "Movies Playing This Weekend"]
        },
        {
        title:"MOVIES BY GENRE",
        links:["Drama Movies" , "Thriller Movies" , "Crime Movies" , "Comedy Movies ","Romantic Movies" , "Action Movies" , "Adventure Movies" , "Historical Movies" ,"Adaptation Movies" , "Mythological Movies"
        ]
        },
        {
        title:"UPCOMING MOVIES BY GENRE",
        links:["Movies in Drama" ," Movies in Thriller ", "Movies in Action ", "Movies in Comedy" , "Movies In Romantic ", "Movies in Crime" , "Movies in Horror" , "Movies in Adventure" , "Movies in Historical" , "Movies in Sch"
        ]
        },
        {
        title:"MOVIES BY LANGUAGE",
        links:["Movies in Malayalam ", "Movies in English" , "Movies in Hindi ", "Movies in Tamil ", "Movies in Chattisgarhi" ," Movies in Khasi" , "Movies in Tulu" , "Movies in Portuguese" , "Movies in Japanese" , "Movies In Ha"
        ]
        },
        {
        title:"MOVIES BY FORMAT",
        links:["Movies in 2D" , "Movies in 4DX ", "Movies in 3D" , "Movies in 2D SCREEN X ", "Movies in IMAX 3D" ," Movies in 3D SCREEN X" ," Movies in 4DX 3D" , "Movies In MX4D 3D" , "Movies in Full Dome ", "Movies in IM"]
        },
        {
        title:"UPCOMING MOVIES BY FORMAT",
        links:["Movies in 20" , "Movies in 3D" , "Movies in 4DX 3D ", "Movies In 4DX" , "Movies in 2D SCREEN X", " Movies in IMAX 3D" , "Movies in 3D SCREEN X" , "Movies in MX4D 3D" , "Movies in Full Dome" , "Movies in IMAX 2D"
        ]
        },
        {
        title:"MOVIES IN TOP CITIES",
        links:["Movies in Mumbai" , "Movies in Delhi-NCR" , "Movies in Chennai" , "Movies in Bengaluru" , "Movies in Hyderabad ", "Movies in Pune" , "Movies in Ahmedabad" , "Movies in Kolkata" , "Movies in Kochi"
        ]
        },
        {
        title:"CINEMAS IN TOP CITIES",
        links:["Cinemas in Mumbai ", "Cinemas in Delhi-NCR" , "Cinemas in Chennai" , "Cinemas in Bengaluru" ," Cinemas in Hyderabad" , "Cinemas in Pune ", "Cinemas in Ahmedabad" , "Cinemas in Kolkata" , "Cinemas in Kochi"
        ]
        },
        {
        title:"COUNTRIES",
        links:["Indonesia" , "Singapore" , "UAE" , "Sri Lanka" , "West Indies"
        ]
        },
        {
        title:"HELP",
        links:["About Us" , "Contact Us" , "Current Opening" ," Press Release" , "Press Coverage ", "Sitemap" , "FAQs" , "Terms and Conditions" , "Privacy Policy"
        ]
        },
        {
        title:"BOOKMYSHOW EXCLUSIVES",
        links:["Lollapalooza India" , "Superstar" , "BookASmile" , "Corporate Vouchers" , "Gift Cards" , "List My Show" , "Offers" , "Stream "," Trailers"]
        }  
     ];
  return (
    <section className='pt-3 pb-5 a-menulinks' style={{background:"#333338"}}>
      <div className='container'>
        {data.map((values,index)=>{  
             return  <div key={index} className='py-2'>
          <h6 style={{color:"rgb(165, 165, 165)",fontWeight:"400",fontSize:"12px"}}>{values.title.toUpperCase()}</h6>
          {values.links.map((ele,index)=>{
             return <span  className={`${index !== 0 ? "border-start border-secondary px-2" :"pe-2"}`} key={index} style={{color:"rgb(127, 127, 127)",fontSize:"11px"}}>
             {ele}
               </span>
             })}
           </div>   
        })}  
      </div>
    </section>
  )
}

export default MenuLinks