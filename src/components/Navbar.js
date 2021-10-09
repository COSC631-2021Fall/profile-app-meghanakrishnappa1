function Navbar(){
    const links = [
        {
        url:"/Module1",
        name :"Module 1"

        },
        {
            url:"/Module2",
            name :"Module 2"
    
        },
    ];

    let menu = links.map(
        (path) => {
        return(
            <span>
                <a href={path.url}>{path.name}</a>&nbsp;
            </span>
        );
    });
    return(
        <div>
            {menu}
        </div>
   
    );
   }
   export default Navbar;