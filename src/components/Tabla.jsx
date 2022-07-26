
export const Tabla = ({ datos, deleteVehiculo }) => {

    const eliminar = (vehiculo) =>{
        const confirmacion = window.confirm('Desea eliminar a ' + vehiculo.patente)
        if(confirmacion){
            const nuevoArreglo = datos.filter(d => d.patente !== vehiculo.patente)         
            deleteVehiculo(nuevoArreglo)
        }            
    }

    return (
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>Patente</th>
                    <th>Marca</th>
                    <th>Color</th>
                    <th>Nombre Dueño</th>
                    <th>Telefono</th>
                    <th>Direccion</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {datos.map((vehiculo) => (
                    <tr key={vehiculo.patente}>
                        <td>{vehiculo.patente}</td>
                        <td>{vehiculo.marca}</td>
                        <td>{vehiculo.color}</td>
                        <td>{vehiculo.ndueño}</td>
                        <td>{vehiculo.fono}</td>
                        <td>{vehiculo.direc}</td>
                        <td><button className="btn btn-danger" onClick={()=>eliminar(vehiculo)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
