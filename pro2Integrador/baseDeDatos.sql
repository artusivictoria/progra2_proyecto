CREATE SCHEMA mercado;

USE mercado;

CREATE TABLE users (
--  NOMBRE	tipo dato	restriccion
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
	nombreUsuario VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products (
--  NOMBRE	tipo dato	restriccion
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    imagen VARCHAR(100) NOT NULL,
	nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(1000) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    idUsers INT UNSIGNED,
    
    FOREIGN KEY (idUsers) REFERENCES Users(id)
);

INSERT INTO users VALUES(DEFAULT, 'sophia@gmail.com', 'sophia' , 'sophiaContrasenia', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users VALUES(DEFAULT, 'victoria@gmail.com', 'victoria' , 'victoriaContrasenia', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users VALUES(DEFAULT, 'ana@gmail.com', 'ana' , 'anaContrasenia', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users VALUES(DEFAULT, 'belen@gmail.com', 'belen' , 'belenContrasenia', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO users VALUES(DEFAULT, 'catalina@gmail.com', 'catalina' , 'catalinaContrasenia', DEFAULT, DEFAULT, DEFAULT);