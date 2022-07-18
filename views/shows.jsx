const React = require('react')
const Default = require('./layouts/default')

function Show ({bread}) {
    return (
        <Default>
            <body>
                <div className="wrapper">
                    <header>
                        <h1><a href="/breads">BreadCRUD</a></h1>
                    </header>
                    <div className="container">
                        {html.children}
                    </div>
                </div>
            </body>

            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten 
                    ?<span>does</span>
                    :<span>does NOT</span>
                }
                have gluten.
            </p>
            <img src={bread.img} alt={bread.name} />
            <li><a href="/breads">Go home</a></li>
        </Default>
    )
}

module.exports = Show