import mysql from 'mysql2/promise';

export class Database {
  protected static instance: Database;
  protected database: mysql.PoolConnection;

  private constructor(config: any = {}) {
    // connection to database
    this.database = {} as mysql.PoolConnection;
  }

  public static async getDatabase(): Promise<Database> {
    console.log(this.instance);

    if (!this.instance) {
      this.instance = new Database();
      await this.instance.connect();
    }

    return this.instance;
  }

  private async connect(): Promise<void> {
    const pool = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: 'abc123',
      database: 'car_rent',
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
      idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });

    this.database = await pool.getConnection();
  }

  public async getConection(): Promise<mysql.PoolConnection> {
    return this.database;
  }

  // ... Other methods defined here
}
