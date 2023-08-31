import { CategoryItem } from "./CategoryItem"
export const Category = () => {
    return (
    <div>
       <div className="d-flex p-5  row">
      
       <CategoryItem />
        </div> 
    </div>
  )
}
export const categorylist=[
    {
     id:1, 
     img:"https://img.freepik.com/free-photo/attractive-stylish-smiling-skinny-woman-with-curly-hair-walking-park-dressed-warm-brown-coat-autumn-trendy-fashion-street-style_285396-6823.jpg?w=900&t=st=1683651281~exp=1683651881~hmac=09c903fe4177734da72f24076f6b6b82802dda411589fc81466ecd31cd170364",
     title:"Women's Fashion",
     Category:"women"
 },
     {
     id:2,
     img:"https://img.freepik.com/free-photo/man-presenting-something_1368-3697.jpg?w=740&t=st=1683649453~exp=1683650053~hmac=88a50e08c4422fe7593fd3b8f3d291c6bb802d8d06e3bc052badb73776e585d4",
     title:"Men's Fashion",
     Category:"men"
 },
 {
     id:3,
     img:"https://img.freepik.com/free-photo/beautiful-brunette-woman-casual-blue-sweater-with-bright-makeup-red-lips-white_158538-10861.jpg?w=740&t=st=1683649052~exp=1683649652~hmac=280f59f7c95ddb785ea486f46ddd05a0696a908c0a14e4e25bcdc1f9702f727d",
     title:"Winter's Fashion",
     Category:"winter"
 }
 ]