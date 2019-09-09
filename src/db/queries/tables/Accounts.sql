CREATE TABLE IF NOT EXISTS accounts (
    id VARCHAR(16) PRIMARY KEY,
    email VARCHAR(64) NOT NULL,
    hashpass VARCHAR(64) NOT NULL,
    first_name VARCHAR(64),
    last_name VARCHAR(64),
    dob DATE,
    gender VARCHAR(32),
    create_at TIMESTAMP)