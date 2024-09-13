import Router from "express";
import { getAdmin, postAdmin } from "../controllers/admin.controller.js";

const Admin = Router();

Admin.route('/')
.get(getAdmin)

.post(postAdmin)

.put((req, res) => {
    res.send("Admin: PUT request IS NOT ALLOWED.");
})

.delete((req, res) => {
        res.send("Admin: DELETE request IS NOT ALLOWED.");
})

.patch((req, res) => {
res.send("Admin: PATCH request IS NOT ALLOWED.");
})

.options((req, res) => {
    res.send("Admin: OPTIONS request IS NOT ALLOWED.");
})

.head((req, res) => {
    res.send("Admin: HEAD request IS NOT ALLOWED.");
});

export default Admin;