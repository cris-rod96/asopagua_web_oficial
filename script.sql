USE asopagua_db;
CREATE TABLE IF NOT EXISTS roles(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (20) NOT NULL ;
);
INSERT INTO roles VALUES(1,'Administrador'),(2,'Cliente');

CREATE TABLE IF NOT EXISTS usuarios(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL ,
    email VARCHAR(90) NOT NULL UNIQUE,
    dni VARCHAR(90) NOT  NULL UNIQUE,
    celular VARCHAR(20) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(90) NOT NULL,
    image VARCHAR(90) NOT NULL,
    id_rol INT NOT NULL,
    FOREIGN KEY(id_rol) REFERENCES roles(id)
);
-- CREAR USUARIO ADMINISTRADOR INICIAL
INSERT INTO usuarios(1,'Cristhian','Rodriguez','crisrodam1996@gmail.com','0940501596','0981135286','ASO-crodriguez1596','a12b32*','uploads/profiles/default.png',1);
CREATE TABLE IF NOT EXISTS direccion_usuario(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    provincia VARCHAR(40) NOT NULL,
    canton VARCHAR(40) NOT NULL,
    direccion VARCHAR(40) NOT NULL,
    id_cliente INT NOT NULL,
    FOREIGN KEY(id_cliente) REFERENCES usuarios(id)
);
CREATE TABLE IF NOT EXISTS categorias(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL
);
CREATE TABLE IF NOT EXISTS productos(
    id INT NOT NULL PRIMARY  KEY AUTO_INCREMENT,
    codigo VARCHAR(10) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(60) NOT NULL,
    stock INT NOT NULL,
    imagen VARCHAR(90) NOT NULL,
    fecha_elaboracion DATE NOT NULL,
    fecha_caducidad DATE NOT NULL,
    precio_venta DECIMAL(5,2) NOT NULL,
    estado VARCHAR(20) NOT NULL
);
CREATE TABLE IF NOT EXISTS pedidos(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    codigo_pedido VARCHAR(10) NOT NULL,
    total_a_pagar DECIMAL(5,2) NOT NULL,
    id_cliente INT NOT NULL,
    email_cliente VARCHAR(90) NOT NULL,
    fecha_pedido DATE NOT NULL,
    estado VARCHAR(20) NOT NULL,
    FOREIGN KEY(id_cliente) REFERENCES usuarios(id)
);
CREATE TABLE IF NOT EXISTS detalle_pedido(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    subtotal DECIMAL(5,2) NOT NULL,
    FOREIGN KEY(id_pedido) REFERENCES pedidos(id),
    FOREIGN  KEY(id_producto) REFERENCES productos(id)
);
CREATE TABLE IF NOT EXISTS comprobante(
    id INT NOT NULL PRIMARY KEY NOT NULL,
    id_detalle_pedido INT NOT NULL,
    fecha_emision DATE NOT NULL,
    codigo_comprobante VARCHAR(12) NOT NULL,
    detalle VARCHAR(200),
    FOREIGN  KEY(id_detalle_pedido) REFERENCES detalle_pedido(id)
);