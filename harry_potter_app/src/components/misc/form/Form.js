import { useForm, Controller } from "react-hook-form"
import { useDispatch } from "react-redux";
import { action } from "../../../api/redux/action";
import Button from "../button/Button";

import "./form.scss"
const Form = () => {
    const defaultValues = {
        "NOMBRE": "",
        "CUMPLEAÑOS" :"",
        "COLOR DE OJOS": "",
        "COLOR DE PELO": "",
        "GÉNERO": "Mujer",
        "POSICIÓN": "Estudiante"
    }
    const { control, handleSubmit } = useForm({defaultValues});
    const dispatch = useDispatch()

    const values = [
        {field: "NOMBRE", type: "text", opt: []},
        {field: "CUMPLEAÑOS", type: "text", opt: []},
        {field: "COLOR DE OJOS", type: "text", opt: []},
        {field: "COLOR DE PELO", type: "text", opt: []},
        {field: "GÉNERO", type: "radio", opt: ["Mujer", "Hombre"]},
        {field: "POSICIÓN", type: "radio", opt: ["Estudiante", "Staff"]},
    ]

    const onSubmit = (e) => {
        console.log(e)
        let data = {
            "name": e["NOMBRE"],
            "gender": e["GÉNERO"],
            "dateOfBirth": e["CUMPLEAÑOS"],
            "eyeColour": e["COLOR DE OJOS"],
            "hairColour": e["COLOR DE PELO"],
            "hogwartsStudent": e["POSICIÓN"] === "Estudiante",
            "hogwartsStaff": e["POSCIÓN"] === "Staff",
            "image": e["FOTOGRAFIA"],
        }

        console.log(data)
        dispatch(action.addCharacter(data))
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div>
                    {values.map((e,i) => (
                        <span className={`form-${e.type}`}>
                            <label htmlFor={e.field}>{e.field}</label>
                            <Controller 
                                name={e.field} 
                                control={control} 
                                render={({ field }) => (
                                e.opt.length > 0 ? (
                                            <span>
                                                <input
                                                type={e.type}
                                                value={e.opt[0]}
                                                id={e.field}
                                                name={field.name}
                                                />
                                                <label htmlFor={e.opt[0]}>{e.opt[0]}</label>
                                                <input
                                                type={e.type}
                                                value={e.opt[1]}
                                                id={e.field}
                                                name={field.name}
                                                />
                                                <label htmlFor={e.opt[1]}>{e.opt[1]}</label>
                                            </span>
                                ) : (<input
                                    type={e.type}
                                    id={e.field}
                                    {...field}/>)
                                )}
                            />
                        </span>
                    ))}
                    <span>
                        <label htmlFor={"FOTOGRAFIA"}>{"FOTOGRAFíA"}</label>
                        <Controller 
                            name={"FOTOGRAFIA"} 
                            control={control}
                            render={({ field }) => 
                            <input
                                type={"file"}
                                id={"FOTOGRAFIA"}
                                accept="image/png, image/gif, image/jpeg"
                                {...field}/>
                            }
                        />
                    </span>
                </div>
                <div className="button-submit">
                    <Button type="submit" label="GUARDAR"/>
                </div>
            </form>
        </>
    )
}

export default Form