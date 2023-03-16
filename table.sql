CREATE TABLE todo_list(
    name VARCHAR(20),
    id SERIAL,
    status VARCHAR(10),
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP,
    PRIMARY KEY(id)
)