package COnnexio;

import java.sql.Connection;
import java.sql.DriverManager;

public class Connexio {
	
	Connection con = null;
	
	public Connexio() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost/pj02_gerardlopez_sergialcoria","root","");
			
			if(con != null) {
				System.out.println("S'ha connectat");
			}
			
		} catch (Exception e) {
			System.err.println("Error: " + e);
		}
	}
	
	public Connection getConnection() {
		return con;
	}

}