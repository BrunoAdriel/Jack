import React from 'react'

function Spinner() {
    return (
            <div className="d-flex justify-content-center"><p>Cargando Productos...</p>
                <div className="spinner-border text-secondary" role="status"></div>
            </div>
)
}

export default Spinner