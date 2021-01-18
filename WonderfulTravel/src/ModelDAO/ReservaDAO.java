package ModelDAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import COnnexio.Connexio;
import model.Reserva;

public class ReservaDAO {

	Connexio cn = new Connexio();
	Connection con;
	PreparedStatement ps;
	ResultSet rs;
	
	public ArrayList<Reserva> llegir() {
		ArrayList<Reserva>list = new ArrayList<>();
		String sql = "SELECT * FROM reserves";
		
		try	{
			con = cn.getConnection();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			
			while(rs.next()) {
				
				Reserva reserva = new Reserva(
						rs.getInt("id"),
						rs.getDate("data"),
						rs.getString("pais"),
						rs.getString("nom"),
						rs.getInt("telefon"),
						rs.getInt("persones"),
						rs.getFloat("preu"));
				
				
				
				
				System.out.println(reserva.getNom());
			}
			
			rs.close();
			ps.close();
			con.close();
			
		} catch (SQLException e) {
			
		}
		return list;
	}
}