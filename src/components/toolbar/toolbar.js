import React from 'react'

const toolbar = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="">Burger</a>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link active" href="">Burger
                            <span className="sr-only">(current)</span>
                        </a>
                        <a className="nav-item nav-link" href="">Checkout</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default toolbar
