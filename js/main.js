const usarYpassok = ["prueba@gmail.com", "987"];
class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}
const producto1 = new Producto("Ensalada Cesar", 999, 99);
const producto2 = new Producto("Ensalada Runch", 890, 99);
const producto3 = new Producto("Ensalada Primavera", 799, 99);
const producto4 = new Producto("Ensalada Vegana", 850, 99);
const producto5 = new Producto("Ensalada Power", 999, 99);
const producto6 = new Producto("Ensalada de Quesos", 980, 99);
const producto7 = new Producto("Ensalada Mediterranea", 890, 99);
const producto8 = new Producto("Ensalada Griega", 820, 99);
const producto9 = new Producto("Ensalada Oriental", 789, 99);
const listaProductos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
];
let carrito = 0;
let okpass = false;
let menup;
function menuPrincipal() {
  menup = prompt(
    "Selecciona una opción del menu \n1-Comprar " +
      producto1.nombre +
      " por $ " +
      producto1.precio +
      "\n2-Comprar " +
      producto2.nombre +
      " por $ " +
      producto2.precio +
      "\n3-Comprar " +
      producto3.nombre +
      " por $ " +
      producto3.precio +
      "\n4-Comprar " +
      producto4.nombre +
      " por $ " +
      producto4.precio +
      "\n5-Comprar " +
      producto5.nombre +
      " por $ " +
      producto5.precio +
      "\n6-Comprar " +
      producto6.nombre +
      " por $ " +
      producto6.precio +
      "\n7-Comprar " +
      producto7.nombre +
      " por $ " +
      producto7.precio +
      "\n8-Comprar " +
      producto8.nombre +
      " por $ " +
      producto8.precio +
      "\n9-Comprar " +
      producto9.nombre +
      " por $ " +
      producto9.precio +
      "\n10-Anular compra \n11-Ver total \n12-Actualizar dirección de envio \n13-Pagar \n14-Salir"
  );
}
function actualizacionCarrito(prod) {
  carrito = carrito + prod;
}

let user = prompt(
  "Bienvenido !!!!!!!!!!!!!!!!!!!\n\nPor favor para iniciar sesión en la tienda on line ingresa tu mail registrado:\n"
);

let pass = prompt("Ingresa tu contraseña\n");

if (user == usarYpassok[0] && pass == usarYpassok[1]) {
  alert(
    "Sesión Iniciada correctamente! \nSe procede a acceder al carrito de compras"
  );
  okpass = true;
} else {
  alert("Error, el usuario o la contraseña son invalidos");
}

const listaProductosConAumento = listaProductos.map((el) => {
  return {
    nombre: el.nombre,
    precio: el.precio * 1.3,
    stock: el.stock,
  };
});
console.log(listaProductosConAumento);

if (okpass) {
  menuPrincipal();

  while (menup != "14") {
    switch (menup) {
      case "1":
        alert("Agregamos " + producto1.nombre + " al carrito!");
        actualizacionCarrito(producto1.precio);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "2":
        alert("Agregamos " + producto2.nombre + " al carrito!");
        actualizacionCarrito(producto2.precio);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "3":
        alert("Agregamos " + producto3.nombre + " al carrito!");
        actualizacionCarrito(producto3.precio);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "4":
        alert("Agregamos " + producto4.nombre + " al carrito!");
        actualizacionCarrito(producto4.precio);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "5":
        alert("Agregamos " + producto5.nombre + " al carrito!");
        actualizacionCarrito(producto5.precio);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "6":
        alert("Agregamos " + producto6.nombre + " al carrito!");
        actualizacionCarrito(producto6.precio);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "7":
        alert("Agregamos " + producto7.nombre + " al carrito!");
        actualizacionCarrito(producto7.precio);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "8":
        alert("Agregamos " + producto8.nombre + " al carrito!");
        actualizacionCarrito(producto8.precio);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "9":
        alert("Agregamos " + producto9.nombre + " al carrito!");
        actualizacionCarrito(producto9.precio);
        alert("Tu saldo es de $ " + carrito);
        break;
      case "10":
        alert("Anulamos todos los productos del carrito");
        carrito = 0;
        alert("Tu saldo es de $ " + carrito);
        break;
      case "11":
        alert("Tu Total hasta el momento es de $ " + carrito);
        break;
      case "12":
        prompt("Por favor informanos tu dirección a la cual llegara el envio:");
        break;
      case "13":
        prompt(
          "Ingresa los datos de la tarjeta de credito para proceder con el pago:"
        );
        break;

      default:
        alert("Presione una opción valida por favor....");
        break;
    }
    menuPrincipal();
  }
  alert("Gracias por su visita, vuelva pronto!!!");
}
