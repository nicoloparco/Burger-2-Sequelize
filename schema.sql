USE heroku_4affa8582a960a4;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(35),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);