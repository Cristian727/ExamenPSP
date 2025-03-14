

# GitHub Actions para Automatización

## 1. Configuración del Repositorio
1. Crear un repositorio en GitHub.
2. Habilitar GitHub Actions.
3. Configurar `secrets` para las credenciales necesarias (ej. `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`).

## 2. Creación de Scripts en JavaScript

### **Monitorización Web** (`monitor.js`)
1. Definir URL a monitorizar.
2. Hacer una petición HTTP con `axios`.
3. Guardar el código de estado y la hora en `monitoring_log.txt`.
4. Manejar errores y registrar fallos.

### **Backup de Logs** (`backup.js`)
1. Definir ruta `/var/log/`.
2. Crear un archivo comprimido con los logs (`tar.gz`).
3. Guardar el backup con un nombre basado en la fecha y hora.

### **Llamada a una API** (`api_call.js`)
1. Definir la URL de la API (`https://api.github.com`).
2. Hacer una petición HTTP con `axios`.
3. Guardar la respuesta en un archivo JSON con un nombre basado en la fecha y hora.

### **Notificación en Telegram** (`notify.js`)
1. Leer variables de entorno (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`).
2. Enviar un mensaje con `axios` a la API de Telegram.
3. Incluir detalles de la ejecución en el mensaje.

## 3. Creación de Workflows en GitHub Actions

### **Monitorización Web** (`.github/workflows/monitoring.yml`)
1. Ejecutar cada 10 minutos (`cron: "*/10 * * * *"`).
2. Descargar el código fuente (`actions/checkout@v3`).
3. Instalar Node.js y `axios`.
4. Ejecutar `monitor.js`.
5. Guardar los resultados en el repositorio (`git commit & push`).
6. Enviar notificación a Telegram.

### **Backup de Logs** (`.github/workflows/backup.yml`)
1. Ejecutar cada hora (`cron: "0 * * * *"`).
2. Descargar el código fuente.
3. Ejecutar `backup.js` para crear el backup.
4. Guardar el archivo comprimido en el repositorio.
5. Enviar notificación a Telegram.

### **Llamada a una API** (`.github/workflows/api_call.yml`)
1. Ejecutar cada 30 minutos (`cron: "*/30 * * * *"`).
2. Descargar el código fuente.
3. Instalar Node.js y `axios`.
4. Ejecutar `api_call.js`.
5. Guardar la respuesta en el repositorio.
6. Enviar notificación a Telegram.

## 4. Implementación y Pruebas
1. Subir los archivos al repositorio.
2. Verificar que los workflows se ejecutan automáticamente según lo programado.
3. Comprobar que los archivos generados se guardan en el repositorio.
4. Confirmar la recepción de notificaciones en Telegram.
