import { useState } from "react";
import { Link } from "react-router-dom";

const MenuCards = ({items, setId}) =>{
    const [isHovered, setIsHovered] = useState(false);
    setId('');

    return (
        <div className="center">
        <div className="container">
        {items.map(item =>  (
            <Link to={`./item/${item.id}`}>
                <div 
                key={item.id}
                className="card radius-8"
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                    className="card-img"
                    style={{
                        height: "300px",
                        backgroundImage: `
                        url(${
                        item.image ||
                        "https://pursuit-pizza-images.s3.amazonaws.com/_4e3da2bb-62e1-4fd8-b402-4607dc851f14.jpeg"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: isHovered === item.id ? "grayscale(0%) contrast(120%)" : "grayscale(100%) contrast(200%)", 
                        transition: "filter 0.3s"}}>
                        {" "}
                    </div>
                <div className="card-body">
                    <h3 className={isHovered === item.id ? 'linkActive' : 'link'}>
                        {item.name || "Loading"}
                    </h3>
                    {item.toppings.map((topping) => (
                        <span key={topping} className="m-8 hotPinkText inline-block">
                            <strong>{topping}</strong>
                        </span>
                    ))}
              <p style={{ margin: "0px" }}>
                {item.shortDescription || "Loading"}
              </p>
              <p style={{ margin: "4px" }}>
                ${item.price.toFixed(2) || "Loading"}
              </p>
            </div>
            <div
              className="hotPink"
              style={{
                borderTop: "2px solid black",
                width: "100%",
                paddingTop: "8px",
                margin: "0px",
                height: "32px",
                fontWeight: '800',
                background: isHovered !== item.id ? 'hotpink' : 'black',
                color: isHovered !== item.id ? 'white' : 'hotpink'
              }}
            >
              {" "}
              <p style={{ margin: "auto", textAlign: "center" }}>
                <strong>More Info</strong>{" "}
              </p>
            </div>
          </div>
          
          </Link>))}
        </div>
        </div>
    )
}

export default MenuCards;