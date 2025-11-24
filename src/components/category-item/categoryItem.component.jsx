import "./categories-item.styles.scss"

function CategoryItem(props){
 

   return(
        <div className='category-container' style={{
          backgroundImage: `url(${props.imageURL})`
        }}>
        <div className="category-body-container" >
        <h2>{props.title}</h2>
          <p>Shop Now</p>
        </div>
        </div>
    )
}

export default CategoryItem;