import inquirer from "inquirer";
import { createNewBill, getAllBills } from "./helpFunc/listOptions";

const main = async () => {

    let run = true;

    while (run) {
      const action = await inquirer.prompt([
        {
            type: "list",
            name: "chosenItem",
            message: "Selecciona una opción",
            choices: [
                {
                    value: 1,
                    name: "Ver todos los gastos"
                },
                {
                    value: 2,
                    name: "Agregar gastos"
                },
                {
                    value: 99,
                    name: "SALIR"
                },
            ]
        }
    ])

    switch (action.chosenItem) {
        case 1:
            await getAllBills();
            break;
        case 2:
            await createNewBill();
            break;
        case 99:
            run = false;
            break;
        default:
            run = false;
            break;                  
    }  
    }
    
};

main()