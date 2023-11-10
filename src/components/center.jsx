
const patty = <img src="src\assets\low-poly-patty.png" alt="burger patty" />;
const cheese = <img src="src\assets\low-poly-cheese.png" alt="cheese" />;
const lettuce = <img src="src\assets\low-poly-lettuce.png" alt="lettuce" />;
const tomato = <img src="src\assets\low-poly-tomato.png" alt="tomato" />;



const ingredients = [patty, cheese, lettuce, tomato] //array of all ingredients

function Center() {
    return (
    <div className="container">
        <div className="orders">
            <img src="src\assets\low-poly-bun-top.png" alt="burger bun top" />
            {/* <RandomIngredient ingredients = {ingredients} /> */}
            <img src="src\assets\low-poly-bun-bottom.png" alt="buger bun bottom" />
        </div>

        <div className="menu">

        </div>
    </div>
    );
}

export default Center;