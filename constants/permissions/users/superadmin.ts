/*    Imports    */
import CActionPermission from "../../../types/classes/permission/CActionPermission";
import EUsertype from "../../../types/enum/_common/EUsertype";

// Set create permissions for the 'users' collection for the 'SuperAdmin' role
const createPermission = new CActionPermission("create");
createPermission.allowed = true;
createPermission.immutableprops = ["_id", "owner", "draft", "deleted", "authid"]; // Define the properties that can't be updated by 'SuperAdmin' role
createPermission.hiddenprops = ["__v", "deleted", "authid"]; // Define the properties dont't need send  to the client

// Set read permissions for the 'users' collection for the 'SuperAdmin' role
const readPermission = new CActionPermission("read");
readPermission.allowed = true;
readPermission.hiddenprops = ["__v", "deleted", "authid"]; // Define the properties dont't need send  to the client
readPermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to read the collection
    return { ...query, status: { $lte: EUsertype.superadmin }, deleted: false };
};

// Set update permissions for the 'users' collection for the 'SuperAdmin' role
const updatePermission = new CActionPermission("update");
updatePermission.allowed = true;
updatePermission.immutableprops = ["_id", "owner", "draft", "deleted", "authid"]; // Define the properties that can't be updated by 'SuperAdmin' role
updatePermission.hiddenprops = ["__v", "deleted", "authid"]; // Define the properties dont't need send to the client
updatePermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to update the collection
    return { ...query, $or: [{ status: { $lt: EUsertype.superadmin } }, { _id: query.invokerid }], deleted: false };
};

// Set delete permissions for the 'users' collection for the 'SuperAdmin' role
const deletePermission = new CActionPermission("delete");
deletePermission.allowed = true;
deletePermission.resolve = (query: any): { [key: string]: any } => {
    // Check if the user has the permission to delete the collection
    return { _id: { $in: query.ids }, status: { $lt: EUsertype.superadmin } };
};

export default { createPermission, readPermission, updatePermission, deletePermission };
