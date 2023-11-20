import React from 'react'

function ItemListContainer() {
return (
    <>
    <h2>Nuesto catálogo</h2>
    <h3>Ultimos ingresos</h3>

        <div id="carouselExampleIndicators" className="container carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://acdn.mitiendanube.com/stores/001/220/451/products/chamarra-adidas-bomber-oversize-vrct-is-fi4688-31-ce5e94652ce39aeea716293459503506-640-0.webp" className="mx-auto d-block imgCarrusel"  alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://acdn.mitiendanube.com/stores/219/431/products/fa94d24f-dc20-41a4-813c-304ca1b734d7-84bc601b1ec0163cfa16935206931981-1024-1024.webp" className="mx-auto d-block imgCarrusel"  alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://nikearprod.vtexassets.com/arquivos/ids/648098-800-800?v=638212463533370000&width=800&height=800&aspect=true" className="mx-auto d-block imgCarrusel"  alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        
    </>
)
}

export default ItemListContainer

