import React,{useState} from 'react'
import BookItem from './BookItem'
import Panch201 from '../comicIMG/201 Panchtantra.jpg';
import Akbar from '../comicIMG/AkabarBirbal.jpg';
import chachchow from '../comicIMG/chachChow.jpg';
import chandamama from '../comicIMG/chandamama.jpg';
import dhruc from '../comicIMG/dhruv.webp';
import saktiman from '../comicIMG/saktiman.jpg'
import Nanhe from '../comicIMG/nanhe samrat.jpg'

export default function BookList() {
  const bookList1=[

    {id:1,
      Name:"Chacha Chowdhary Tales",
     PublishedDate:"2 Sept 2023",
     Price:"120",
     img:chachchow,
     amount:5
  },
  {id:2,
    Name:"Akbar And Birbal",
   PublishedDate:"22 Jan 2024",
   Price:"150",
   img:Akbar,
   amount:5
},
{id:3,
  Name:"Panchtantra",
 PublishedDate:"15 Feb 2024",
 Price:"99",
 img:Panch201,
 amount:5
},
{id:4,
  Name:"Chandamama Story",
 PublishedDate:"19 Dec 2023",
 Price:"160",
 img:chandamama,
 amount:5
},
{id:5,
  Name:"Dhurva :A SuperHero",
 PublishedDate:"16 Nov 2023",
 Price:"199",
 img:dhruc,
 amount:5
},
{id:6,
  Name:"SaktiMan",
 PublishedDate:"17 March 2023",
 Price:"60",
 img:saktiman,
 amount:5
},
{id:7,
  Name:"NanheSamarat",
 PublishedDate:"10 March 2024",
 Price:"99",
 img:Nanhe,
 amount:5
}
  ]
  const [bookList,setBookList]=useState(bookList1);
  return (
    <div>
      
      <div className="container padding">
        <div className="row">
        {bookList.map((element)=>{
            return <div className="col-md-4" key={element.id}>
                <BookItem  book={element} bookList={bookList} setBookList={setBookList}/></div>
        })}
           
           
        </div>
        </div>
    </div>
  )
}
