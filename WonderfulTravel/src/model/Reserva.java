package model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.sql.Date;

import javax.servlet.http.HttpServletRequest;


public class Reserva {
	
	private int id;
	private Date data;
	private String pais;
	private String nom;
	private int telefon;
	private int persones;
	private float preu;
	private String foto;
	

	public Reserva(ResultSet resultSet) throws SQLException {
		this.setId(resultSet.getInt("id"));
		this.setData(resultSet.getDate("data"));
		this.setPais(resultSet.getString("pais"));
		this.setNom(resultSet.getString("nom"));
		this.setTelefon(resultSet.getInt("telefon"));
		this.setPersones(resultSet.getInt("persones"));
		this.setPreu(resultSet.getFloat("preu"));
		this.setFoto(resultSet.getString("foto"));
	}
	

	public Reserva(HttpServletRequest request) {
		this.setData(Date.valueOf(request.getParameter("data")));
		this.setPais(request.getParameter("pais"));
		this.setNom(request.getParameter("nom"));
		this.setTelefon(Integer.parseInt(request.getParameter("telefon")));
		this.setPersones(Integer.parseInt(request.getParameter("persones")));
		this.setPreu(Float.parseFloat(request.getParameter("preu")));
		this.setFoto(request.getParameter("foto"));
	}


	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto = foto;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getData() {
		return data;
	}
	public void setData(Date data) {
		this.data = data;
	}
	public String getPais() {
		return pais;
	}
	public void setPais(String pais) {
		this.pais = pais;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public int getTelefon() {
		return telefon;
	}
	public void setTelefon(int telefon) {
		this.telefon = telefon;
	}
	public int getPersones() {
		return persones;
	}
	public void setPersones(int persones) {
		this.persones = persones;
	}
	public float getPreu() {
		return preu;
	}
	public void setPreu(float preu) {
		this.preu = preu;
	}

}
