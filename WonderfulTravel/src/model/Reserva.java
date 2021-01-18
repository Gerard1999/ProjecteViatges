package model;

import java.util.ArrayList;
import java.util.Date;

import ModelDAO.ReservaDAO;

public class Reserva extends ReservaDAO {
	
	int id;
	Date data;
	String pais;
	String nom;
	int telefon;
	int persones;
	float preu;
	
	
	public Reserva(int id, Date data, String pais, String nom, int telefon, int persones, float preu) {
		super();
		this.setId(id);
		this.setData(data);
		this.setPais(pais);
		this.setNom(nom);
		this.setTelefon(telefon);
		this.setPersones(persones);
		this.setPreu(preu);
	}
	
	public Reserva() {
		// TODO Auto-generated constructor stub
	}

	public static ArrayList<Reserva> ferLlistaReserves(){
		Reserva reserva = new Reserva();
		return reserva.llegir();
		
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
