import { newBillPrompt } from "./billPrompt";
import { getWithFs, saveWithFs } from "./fsFunctions"

export const getAllBills = async () => {
    const currentBills = await getWithFs("bills");
    console.table(currentBills);
};

export const createNewBill = async() => {
    const newBillData = await newBillPrompt();

    const currentBills = await getWithFs("bills");

    currentBills.push(newBillData);

    await saveWithFs("bills", currentBills)
}