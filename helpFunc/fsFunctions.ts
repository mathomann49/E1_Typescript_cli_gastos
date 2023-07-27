import fs from "fs";
import { IBill } from "../interfaces/interfaces";

export const getWithFs = (file: string): Promise<IBill[]> => {
    return new Promise((resolve, reject) => {
        fs.readFile(`./${file}.json`, "utf8", (err, content) => {
            if (err) {
                reject(err);
            }
            resolve( JSON.parse(content))
        })
    })
}

export const saveWithFs = (file: string, content: IBill[]): Promise<void> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./${file}.json`, JSON.stringify(content), (err) => {
            if (err) {
                reject(err)
            }
            resolve(console.log("Se agregó un nuevo gasto"))
        })
    })
}