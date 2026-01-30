WeatherApp
WeatherApp es una aplicación web desarrollada con tecnologías frontend modernas que permite consultar información meteorológica en tiempo real a partir del nombre de una ciudad. El proyecto consume la API pública de Open-Meteo, mostrando datos climáticos claros, actualizados y bien estructurados, y fue creado como parte de un portafolio de desarrollo frontend.
________________________________________
Demo
Puedes acceder a la aplicación desplegada en GitHub Pages:

________________________________________
Características principales
•	🔍 Búsqueda de clima por ciudad
•	🌡️ Temperatura actual en tiempo real
•	💨 Velocidad del viento
•	💧 Humedad relativa
•	🌧️ Precipitación
•	🕒 Fecha y hora local según la zona horaria
•	🌙 Modo oscuro y modo claro
•	✨ Animaciones suaves y diseño tipo landing page
•	⚠️ Manejo de errores y validaciones de entrada
________________________________________
Tecnologías utilizadas
•	HTML5 – Estructura semántica del proyecto
•	CSS3 – Diseño visual, animaciones y temas (dark/light)
•	JavaScript (ES Modules) – Lógica de la aplicación
•	Open-Meteo API – Fuente de datos meteorológicos
•	GitHub Pages – Despliegue del proyecto
________________________________________
Estructura del proyecto
weatherApp/
│── index.html
│
├── CSS/
│ └── styles.css
│
└── JS/
└── app.js
________________________________________
Uso de la API Open-Meteo
WeatherApp utiliza dos endpoints principales de la API de Open-Meteo:
Geocoding – Búsqueda de ciudad
Se utiliza para convertir el nombre de la ciudad en coordenadas geográficas.
Endpoint:
https://geocoding-api.open-meteo.com/v1/search
Parámetros principales:
•	name: nombre de la ciudad
•	count: número de resultados
•	language: idioma de respuesta
Respuesta:
•	Latitud y longitud
•	País
•	Población
•	Zona horaria
________________________________________
Forecast – Clima actual
Con las coordenadas obtenidas, se consulta el clima actual.
Endpoint:
https://api.open-meteo.com/v1/forecast
Parámetros principales:
•	latitude
•	longitude
•	current_weather=true
•	hourly=relativehumidity_2m,precipitation,weathercode
•	timezone
Datos obtenidos:
•	Temperatura
•	Velocidad del viento
•	Código climático
•	Humedad
•	Precipitación
•	Fecha y hora local
Los códigos climáticos son interpretados internamente para mostrar descripciones amigables e íconos visuales.
________________________________________
Interfaz y experiencia de usuario
La aplicación cuenta con un diseño limpio y moderno, inspirado en una landing page profesional. Incluye:
•	Tema oscuro y claro con variables CSS
•	Animaciones de entrada
•	Distribución clara de la información
•	Respuesta inmediata sin recarga de página
________________________________________
Instalación y uso local
1.	Clona el repositorio:
git clone https://github.com/tu-usuario/weatherApp.git
2.	Abre el proyecto:
cd weatherApp
3.	Ejecuta un servidor local (recomendado):
npx serve
O utiliza la extensión Live Server en VS Code.
________________________________________
Consideraciones
•	La aplicación no requiere claves de API
•	Funciona completamente del lado del cliente
•	Compatible con navegadores modernos
________________________________________
Autor
Germán D. Cruz
Frontend Developer
Contacto: germandcruzg@gmail.com
________________________________________
Licencia
Este proyecto se publica con fines educativos y de portafolio. Puedes usarlo y modificarlo libremente.
________________________________________
⭐ Si este proyecto te resulta útil, no olvides darle una estrella en GitHub.

