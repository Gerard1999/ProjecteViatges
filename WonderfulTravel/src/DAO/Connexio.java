package DAO;

import java.sql.DriverManager;
import java.sql.SQLException;

import com.mysql.jdbc.Connection;

public class Connexio {
	private static Connection conexion = null;
	private static Connexio laMevaConexion = null;

	private Connexio() {
		String driver = "com.mysql.jdbc.Driver";
		String url = "jdbc:mysql://localhost/";
		String dataBase = "pj02_gerarlopez_sergialcoria";
		String usuario = "root";
		String password = "";

		try {
			Class.forName(driver);
			conexion = (Connection) DriverManager.getConnection((url + dataBase), usuario, password);
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}

	public static Connection getConnection() throws SQLException {
		if (laMevaConexion == null) {
			laMevaConexion = new Connexio();
		} else if (conexion.isClosed()) {
			laMevaConexion = new Connexio();
		}
		return conexion;
	}
}