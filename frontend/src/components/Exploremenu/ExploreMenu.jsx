import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
         <h1>Explore our Menu</h1>
         <p className="menu-category-text">
  Hot drops only 🔥 Salads for the fit fam, cake for the sweet squad, and rolls for the binge sessions. Click it. Eat it. Repeat it.
</p>

         <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name )}   key={index} className={`exlpore-menu-list-item${category===item.menu_name ? " active" : ""}`}>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
            }
         </div>
         <hr />
    </div>
  )
}

export default ExploreMenu