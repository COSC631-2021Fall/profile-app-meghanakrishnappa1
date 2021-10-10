function Navbar(){
    const links = [
        {
        url:"/Profile",
        name :"Profile pic"

        },
        {
            url:"/Words",
            name :"Words to describe myself"
    
        },
    ];

    let menu = links.map(
        (path) => {
        return(
            <span>
                <a href={path.url}>{path.name}</a>&nbsp;
            </span>
        );
    }
    );
    return(
        <div>
            {menu}
        </div>
   
    );
   }
   export default Navbar;