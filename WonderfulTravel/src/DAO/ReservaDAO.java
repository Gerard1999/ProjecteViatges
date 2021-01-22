package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import DAO.Connexio;
import model.Reserva;

public class ReservaDAO {


	public static ArrayList<Reserva> getReservesData() throws SQLException {
		
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		ArrayList<Reserva> reserves = new ArrayList<Reserva>();
		
		try {
			con = Connexio.getConnection();
			ps = con.prepareStatement("SELECT * FROM reserves ORDER BY data");
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
	}
	
	
public static ArrayList<Reserva> getReservesPais() throws SQLException {
		
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		ArrayList<Reserva> reserves = new ArrayList<Reserva>();
		
		try {
			con = Connexio.getConnection();
			ps = con.prepareStatement("SELECT * FROM reserves ORDER BY pais");
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
	}
	
	
	public static void AfegirReserves(Reserva reserva) throws SQLException {
		Connection con = null;
		PreparedStatement ps = null;
		
		try {
			con = Connexio.getConnection();
			ps = con.prepareStatement("INSERT INTO reserves (data, pais, nom, telefon, persones, preu, foto) "
					+ "VALUES (?,?,?,?,?,?,?)");
			
			ps.setDate(1, reserva.getData());
			ps.setString(2, reserva.getPais());
			ps.setString(3, reserva.getNom());
			ps.setInt(4, reserva.getTelefon());
			ps.setInt(5, reserva.getPersones());
			ps.setFloat(6, reserva.getPreu());
			ps.setString(7, reserva.getFoto());
			
			ps.executeUpdate();
			
		} finally {
			con.close();
			ps.close();
			
		} 
	}
	
	public static void EsborrarReserva(int id) throws SQLException {
		Connection con = null;
		PreparedStatement ps = null;
		
		try {
			con = Connexio.getConnection();
			ps = con.prepareStatement("DELETE FROM reserves WHERE id = ?");
			
			ps.setInt(1, id);
			
			ps.executeUpdate();
			
		} finally {
			con.close();
			ps.close();
			
		} 
	}
}
		
		
		
	
	
	
