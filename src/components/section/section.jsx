import React from "react"

const Section = ({tittle, children}) => {
    return (
        <>
        <h2>{tittle}</h2>
         {children}
        </>
    )
}


export default Section;