import React,{Component} from "react"

function Header(props)
{
    console.log(props.match.params);
    return (
        <div className="someHeader">
            <span>
            {props.match.params.header}
            </span>
        </div>
    )
}

export default Header;