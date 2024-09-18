function generarSaludo(nombre, idioma = "es") {
    if (idioma === "es") {
      return `¡Hola, ${nombre}!`;
    } else if (idioma === "en") {
      return `Hello, ${nombre}!`;
    } else {
      return `Bonjour, ${nombre}!`;
    }
  }
  
  
  console.log(generarSaludo("Ana", "en"));  
  