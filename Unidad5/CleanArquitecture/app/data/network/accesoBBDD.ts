//import mysql from "mysql2/promise";

/**
 * accesoBBDD.ts
 * Acceso a base de datos usando mysql2 (promise API).
 *
 * Requisitos:
 *  - instalar paquete: npm i mysql2
 *  - configurar variables de entorno:
 *      DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, DB_CONNECTION_LIMIT
 *
 * Exporta:
 *  - query<T>(sql, params) => Promise<T[]>
 *  - transaction(fn) => ejecuta función en transacción y hace commit/rollback
 *  - getConnection() => conexión de pool (útil para operaciones avanzadas)
 *  - closePool() => cierra pool al terminar la aplicación
 */