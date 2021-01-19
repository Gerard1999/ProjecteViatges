package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import DAO.Connexio;
import model.Reserva;

public class ReservaDAO {


	public static ArrayList<Reserva> getReserves() throws SQLException {
		
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		ArrayList<Reserva> reserves = new ArrayList<Reserva>();
		
		try {
			con = Connexio.getConnection();
			ps = con.prepareStatement("SELECT * FROM reserves");
			rs = ps.executeQuery();
			
			while (rs.next()) {
				reserves.add(new Reserva(rs));
			}
			
			return reserves;
			
		} finally {
			con.close();
			ps.close();
			rs.close();
			
		}
		
		
		
		/*ArrayList<Reserva>list = new ArrayList<>();
		String sql = "SELECT * FROM reserves";
		
		try	{
			con = Connexio.getConnection();
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
				
				
				
				System.out.println(reserva);
				System.out.println(reserva.getNom());
			}
			
			rs.close();
			ps.close();
			con.close();
			
		} catch (SQLException e) {
			
		}
		return list;*/
	}
}