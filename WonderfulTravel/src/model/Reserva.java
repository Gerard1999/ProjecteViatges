package model;

import java.util.Date;

public class Reserva {
	
	int id;
	Date data;
	String pais;
	String nom;
	int telefon;
	int persones;
	float preu;
	
	
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
