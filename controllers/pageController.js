/* router.get("/status", statusController) */

export const statusController = (req, res) => {
    res.json({ status : "ok" })
}
 
export const principal = (req, res) => {
    res.send("<h1>Sistema de gestión de usuarios</h1>")
}
