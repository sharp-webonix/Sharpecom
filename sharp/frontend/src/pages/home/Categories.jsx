
import laptop from '../../assets/laptop.png'
import desktop from '../../assets/desktop.webp'
import printer from '../../assets/printer.webp'
import accessories from '../../assets/headphone.png'

import { Link } from "react-router-dom";

const Categories = () => {
    const categories = [
      { name: "Laptop", path: "laptop", image: laptop },
      { name: "Desktop", path: "desktop", image: desktop },
      { name: "Printer", path: "printer", image: printer },
      { name: "Accessories", path: "accessories", image: accessories },
    ]
    return (
      <>
        <div className="product__grid">
            {
                categories.map((category) => (
                    <Link key={category.name} to={`/categories/${category.path}`} className='categories__card'>
                        <img src={category.image} alt={category.name} />
                        <h4>{category.name}</h4>
                    </Link>
                ))
            }
        </div>
      </>
    ); 
}

export default Categories