import React from 'react'

interface Props {
    
}

const SideMenu = (props: Props) => {
    return (
        <div>
            <h1 className="my-4">Shop Names</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
        </div>
    )
}

export default SideMenu

