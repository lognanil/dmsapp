const format = require("pg-format");
const pool = require("../config/dbConfig");

exports.addActivityLog = async (
  action,
  attack,
  mode,
  userID,
  ipAddress,
  url,
  deviceType,
  os,
  browser
) => {
  const client = await pool.connect().catch((err) => {
    
  });
  try {
    const query = `insert into "ActivityLog" ("IPAddress", "UserID", "URL", "DeviceType", "OS", "Browser", "DateTime", "Action", "Attack", "Mode") values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
    const values = [
      ipAddress,
      userID,
      url,
      deviceType,
      os,
      browser,
      "now()",
      action,
      attack,
      mode,
    ];
    await client.query(query, values);
  } catch (e) {
    
  } finally {
    client.release();
  }
};

exports.submitDoc = (data, userID) =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    // When the admin enters a user's document, the document's status is null.
    try {
      await client.query("begin");
      const query1 = `INSERT INTO public."Registration"("userId", "userName", "userEmail", "userTypeId", "userDeptId", "userContactNo", "userAltContactNo", "userPanNo", "userPassportNo", "userPassword", "userEmployeeId","DateTime")
	    VALUES ('${userID}', '${data.Name}', '${data.Email}',  '${data.userType}','${data.department}' , '${data.contactNumber}',  '${data.alternateNumber}', '${data.pancard}', '${data.passport}', '${data.password}','${data.employeeId}',NOW());`;
      const response1 = await client.query(query1);
      await client.query("commit");
      resolve(true);
    } catch (e) {
      await client.query("rollback");
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
  });

exports.getUserDetails = () =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `SELECT "userId", "docId", "docName", "docPath", "docStatus", "DateTime", "Remark"
	    FROM public."documentTbl";`;
      const response = await client.query(query);
      resolve(response.rows);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
  });

exports.getDeptDetails = () =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `SELECT "deptId", "deptName" FROM public."Dept";`;
      const response = await client.query(query);
      resolve(response.rows);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
  });

exports.getPermissionDetails = () =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      // const query = `select "userId","userName","DateTime","userTypeId" from "Registration"  where "Status"='0'`;
      const query = `select a."userId",a."userName",a."DateTime",a."userTypeId",b."Status" from "Registration" a 
      inner join "UserLogin" b on a."userId"=b."UserID" where a."Status"='0' `
      const response = await client.query(query);
      resolve(response.rows);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
  });


exports.activeData = ({ data }) =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `UPDATE public."UserLogin" SET  "IsLoggedIn"=true, "Status"=true WHERE "UserID"='${data}';`;
      const response = await client.query(query);
      await client.query("commit");
      resolve(true);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
});

 exports.getViewDetails = () =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `select a."userId",b."userName",b."DateTime",b."userTypeId",a."docName",b."permissionStatus",a."docPath" from "documentTbl" a
     inner join "Registration" b on a."userId"=b."userId" where b."Status"='0' `;
    //  and b."permissionStatus" is null
      const response = await client.query(query);
      resolve(response.rows);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
});

exports.verifiedData = ({ data }) =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `UPDATE "documentTbl" SET "permissionStatus"= '0' WHERE "userId"='${data}';`;
      const response = await client.query(query);
      await client.query("commit");
      resolve(true);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
});

exports.remarkData = ({ data,remarkData,docId }) =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `UPDATE "documentTbl" SET "permissionStatus"= '1',"Remark"='${remarkData}' WHERE "userId"='${data}' and "docId"='${docId}';`;
      const response = await client.query(query);
      await client.query("commit");
      resolve(true);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
});

exports.getReamrkDetails = () =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      // const query = `select a."userId",b."userName",b."DateTime",b."userTypeId",a."docName",b."permissionStatus" from "documentTbl" a
      // left join "Registration" b on a."userId"=b."userId" where b."Status"='0'`;
      const query = `select distinct a."userId",b."userName",b."DateTime",a."docName",a."docId",a."RequestMsg",a."docPath",a."permissionStatus" from "documentTbl" a
      left join "Registration" b on a."userId" = b."userId" 
      where a."RequestStatus"='0';`
      const response = await client.query(query);
      resolve(response.rows);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
});

exports.getRequestDetails = () =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `select distinct a."userId",b."userName",a."docName",a."docPath",a."RequestMsg", a."RequestStatus"
      from "documentTbl" a inner join "Registration" b on a."userId"=b."userId" where a."RequestStatus"='0' and a."RequestMsg" is not null and a."docStatus"='1'`;
      const response = await client.query(query);
      resolve(response.rows);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
});

exports.approveRequest = ({ data}) =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
     
      const query = `update "documentTbl" set "RequestStatus"='1' where "userId"='${data}'`;
      const response = await client.query(query);
      const result = {
        rowCount: response.rowCount
      };
      resolve(result);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
});



exports.totalCount = () =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `SELECT count(a."userId") as total from "Registration" a`;
      const response = await client.query(query);
      resolve(response.rows);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
  });



  
exports.activeDataCount = () =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `SELECT count("UserID")  as active from "UserLogin" where "Status" = true;`;
      const response = await client.query(query);
      resolve(response.rows);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
  });




  
exports.inActiveDataCount = () =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `SELECT count("UserID") as inactive from "UserLogin" where "Status" = false;`;
      const response = await client.query(query);
      resolve(response.rows);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
  });



  
exports.gettotalStaff = () =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `select b."deptName",count(a."userDeptId") as staffData from public."Registration" a
      inner join public."Dept" b on b."deptId" = a."userDeptId" group by b."deptName";`;
      const response = await client.query(query);
      resolve(response.rows);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
  });



  
exports.gettotalDocument = () =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `select "docName",count("documentTbl"."docId") as docid from "documentTbl" group by "docName";`;
      const response = await client.query(query);
      resolve(response.rows);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
  });



  
exports.disableUserData = ({ data }) =>
  new Promise(async (resolve, reject) => {
    const client = await pool.connect().catch((err) => {
      reject(new Error(`Unable to connect to the database: ${err}`));
    });
    try {
      const query = `UPDATE public."UserLogin" SET  "IsLoggedIn"=false, "Status"=false WHERE "UserID"='${data}';`;
      const response = await client.query(query);
      await client.query("commit");
      resolve(true);
    } catch (e) {
      reject(new Error(`Oops! An error occurred: ${e}`));
    } finally {
      client.release();
    }
});
