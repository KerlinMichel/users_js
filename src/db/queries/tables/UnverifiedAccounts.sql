CREATE TABLE IF NOT EXISTS unverified_accounts (
    email VARCHAR(64) PRIMARY KEY,
    hashpass VARCHAR(64) NOT NULL,
    first_name VARCHAR(64),
    last_name VARCHAR(64),
    dob DATE,
    gender VARCHAR(32))