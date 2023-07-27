import { IBill } from "../interfaces/interfaces";
import inquirer from "inquirer";

export const newBillPrompt = async(): Promise<IBill> => {
    return await inquirer.prompt([
        {
            type: "input",
            name: "kind",
            message: "Ingrese tipo de gasto"
        },
        {
            type: "number",
            name: "amount",
            message: "Ingrese el importe (con dos decimales)"
        },
        {
            type: "imput",
            name: "status",
            message: "¿Pago ó impago?"
        },

    ])
}