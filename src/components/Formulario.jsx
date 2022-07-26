import { useState } from "react"

export const Formulario = ({ addNewVehiculo }) => {
    const initForm = {
        patente: '',
        marca: '',
        color: '',
        ndueño: '',
        fono: '',
        direc: ''
    }
    const [valoresForm, setValoresForm] = useState(initForm)
    const { patente, marca, color, ndueño, fono, direc } = valoresForm
    const inputChange = (event) => {
        setValoresForm({
            ...valoresForm,
            [event.target.name]: event.target.value
        })
    }
    const clickEvent = (e) => {
        e.preventDefault()
        addNewVehiculo(valoresForm)
        setValoresForm({ ...initForm })
    }
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="text-center">Formulario</h2>
            </div>
                <div className="card-body">
                    <label>Patente:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="patente"
                        value={patente}
                        onChange={inputChange}
                    />
                    <label>Marca:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="marca"
                        value={marca}
                        onChange={inputChange}
                    />
                    <label>Color:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="color"
                        value={color}
                        onChange={inputChange}
                    />
                    <label>Nombre Dueño:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="ndueño"
                        value={ndueño}
                        onChange={inputChange}
                    />
                    <label>Telefono:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="fono"
                        value={fono}
                        onChange={inputChange}
                    />
                    <label>Direccion:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="direc"
                        value={direc}
                        onChange={inputChange}
                    />
                </div>
                <div className="card-footer">
                    <input type="submit" onClick={clickEvent} className="btn btn-warning" value="Agregar" />
                </div>
        </div>
    )
}
