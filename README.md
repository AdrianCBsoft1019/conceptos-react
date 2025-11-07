# Ecohuerta React

**¿Cómo se aplica el flujo de datos unidireccional en este proyecto?**

En el proyecto el componente principal es el que obviamente hara todo, pero ese componente principal tiene unos componentes menores, que los cuales no podran cambiar o modificar ningun dato solo lo que podran hacer es enviar mensajes al componente principal y lo que hace el es actualizarlo y enviarlo al componente inferior, siguiendo un mismo flujo. 

**¿Qué papel cumple el estado (useState) en los diferentes componentes y cómo influye en el renderizado?**

El papel que cumple el useState es que funciona como memoria del componente que guarda la informacion que va cambiando con el tiempo, lo que hace es que se renderiza sin actualizar la misma pagina, es decir solo el componente no toda la pagina en si.

**¿Por qué es importante separar la UI en componentes reutilizables y puros?**

Es importante ya que al crearlo se podra utilizar varias veces, asi se mantiene un mejor orden, ya si se quiere modificar el componente en vez de modificarlos en todos los lugares donde se puso, pues se modifica en el componente original.

**¿Qué ventajas aporta el uso de JSX declarativo frente al enfoque imperativo del DOM tradicional?**

Las ventajas que se ven es que en el enfoque imperativo uno mismo debe crear el nodo y uno mismo tiene que actualizar el DOM, en cambio lo que hace JSX es que el mismo crea el nodo y el mismo actualiza el DOM, asi ahorrando tiempo 

**¿Cómo podrías mejorar la app agregando tres componentes nuevos sin romper la coherencia del diseño ni la lógica?**

se le puede agregar imagenes para ver de que trata la pagina y lo que se hace, tambien un header se puede agregar asi poniendo el nombre de la pagina y por ultimo un footer donde se le puede poner los contactos, los derechos de autor y si tienen redes sociales, tambien agrgarlas
