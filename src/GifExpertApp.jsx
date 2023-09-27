import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Fullmetal Alchemist'] );

    const onAddCategory = ( newCategory ) => {
        if( categories.includes( newCategory ) ) return;
        //console.log( newCategory );
        setCategories([ newCategory,  ...categories ]);
        //setCategories ( cat => [ ...cat, 'Fullmetal Alchemist'] );
    }

    //console.log(categories);

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
            onNewCategory={ (value) => onAddCategory(value) }
            />

            {
                categories.map( (category) =>(
                    <GifGrid
                    key={ category }
                    category={ category }
                    />
                ))
            }
        </>
    )
}
