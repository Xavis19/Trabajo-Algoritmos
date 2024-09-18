const saludarPersona = (nombre, idioma = "es") => {
    if (idioma === "es") {
      return `¡Hola, ${nombre}!`;
    } else if (idioma === "en") {
      return `Hello, ${nombre}!`;
    } else if (idioma === "fr") {
      return `Bonjour, ${nombre}!`;
    } else {
      return `Idioma no soportado`;
    }
  };
  

  console.log(saludarPersona("Carlos"));          // ¡Hola, Carlos!
  console.log(saludarPersona("Carlos", "en"));    // Hello, Carlos!
  console.log(saludarPersona("Carlos", "fr"));    // Bonjour, Carlos!
  console.log(saludarPersona("Carlos", "de"));    // Idioma no soportado