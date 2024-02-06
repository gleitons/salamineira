import controler from "@/app/database/controller/UseControler"

export default function handler(req, resp) {
    console.log(resp)
    resp.status(200).json({name:"Tudo Pronto"})
    // const response = await controler.saveUser(req.body)
    // .then((data) => {
    //     console.log(data)
    // })
    // .catch(err => {
    //     console.log(err)
    // })
    // resp.status(200).json(response)
}