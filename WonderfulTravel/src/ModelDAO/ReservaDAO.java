package ModelDAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import COnnexio.Connexio;
import model.Reserva;

public class ReservaDAO {

	Connexio cn = new Connexio();
	Connection con;
	PreparedStatement ps;
	ResultSet rs;
	Reserva r = new Reserva();
	
	public List<Reserva> llistar() {
		ArrayList<Reserva>list = new ArrayList<>();
		String sql = "SELECT * FROM usuaris";
		
		try	{
			con = cn.getConnection();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			
			while(rs.next()) {
				Reserva per = new Reserva();
				per.setId(rs.getInt("id"));
				per.setNom(rs.getString("nom"));
				per.setNom(rs.getString("cognom"));
				per.setNom(rs.getString("correu"));
				list.add(per);
			}
		} catch (Exception e) {
			
		}
		return list;
	}
}