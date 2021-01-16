package COnnexio;

import java.sql.Connection;
import java.sql.DriverManager;

public class Connexio {
	
	Connection con;
	
	public Connexio() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:8080","root","");
		} catch (Exception e) {
			System.err.println("Error: " + e);
		}
	}
	
	public Connection getConnection() {
		return con;
	}

}