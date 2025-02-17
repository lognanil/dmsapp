const dbCredentials = () => {
  const encodedUser = "cG9zdGdyZQ=="; //postgre  
  const encodedHost = "ZHBnLWN1bTQ1azU2bDQ3YzczOTRkYWxnLWE="; // dpg-cum45k56l47c7394dalg-a
  const enCodedDatabase = "dGVzdF9xeHRj"; // test_qxtc
  const encodedPassword = "QkV2eE5zbmExZFE4YzllV2w0R29iR0h2ZGRLODhCWW4="; // BEvxNsna1dQ8c9eWl4GobGHvddK88BYn
  const encodedPort = "NTQzMg=="; //  5432
  return {
    encodedUser,
    encodedHost,
    enCodedDatabase,
    encodedPassword,
    encodedPort,
  };
};

exports.dbCredentials = dbCredentials;


// 17 feb 8.50 update