import { useState, useEffect } from "react"
import { Formulario } from "./components/Formulario"
import { Tabla } from "./components/Tabla"

const vehiculos = () => {
    return JSON.parse(localStorage.getItem('vehiculos')) || []
}
export const FormApp = () => {
    const [valor, setValor] = useState(vehiculos)
    const addVehiculo = (nuevoRegistro) => {
        if (valor.filter(item => item.patente === nuevoRegistro.patente).length > 0)
            return alert('el registro ya existe')
        setValor([nuevoRegistro, ...valor])
    }
    //hook useEffect se activa luego de realziar una acción, en este caso cuando se modifique las personas
    useEffect(() => {
        localStorage.setItem('vehiculos', JSON.stringify(valor))
    }, [valor])

    const eliminarValor = (registro) => {
        console.log(registro)
        setValor([...registro])
    }
    return (
        <div className="container">
            <div>
                <h1 className="text-center">Estacionamineto</h1>
            </div>
            <div className="row mt-5">
                <div className="col-9">
                    <h2 className="text-center">Tabla</h2>
                    <Tabla datos={valor} deleteVehiculo={eliminarValor}  />
                </div>
                <div className="col-3">
                    <Formulario addNewVehiculo={addVehiculo} />
                </div>
            </div>
        </div>
    )
}
