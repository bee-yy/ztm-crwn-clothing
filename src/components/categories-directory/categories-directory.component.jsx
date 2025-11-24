import CategoryItem from '../category-item/categoryItem.component'

import './categories-directory.styles.scss'



function CategoriesDirectory({categories}){
  
return (
      <div className='categories-container'>  
      {categories.map((item) =>{
        return <CategoryItem key={item.id} title={item.title} imageURL = {item.imageUrl}/>
      })}
      </div>
  )
}



export default CategoriesDirectory;