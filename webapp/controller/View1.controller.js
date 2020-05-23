sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.data.binding.curriculo.controller.View1", {
		onInit: function () {
			
			window._panel = this.byId("panel_competencias");
			
			var oFonteDeDados = {
				nome: "Renan",
				sobrenome: "Salazar",
				endereco: {
					rua: {
						nome: "Av Paulista",
						numero: "1000"
					},
					cidade: "São Bernardo do Campo",
					estado: {
						nome: "São Paulo",
						sigla: "SP"
					}
				},
				quiz_1: 60,
				quiz_1_media: 3,
				competencias: ["ABAP", "UI5", "JavaScript"],
				empresas: [
					{ name: "E-IT",  cargo: "Desenvolvedor" },
					{ name: "ROFF",  cargo: "Desenvolvedor" },
					{ name: "KCSIT", cargo: "Desenvolvedor" }
			    ]
			};
			
			 //var oModeloPessoal = new JSONModel(oFonteDeDados);
			 //console.log(oModeloPessoal);
			//var oModeloPessoal = new JSONModel("https://www.mocky.io/v2/5ec5da323200006400d748f2");
			var oModeloPessoal = new JSONModel("https://www.mocky.io/v2/5ec86c232f00001219db6fe7");
			this.getView().setModel(oModeloPessoal);
			
			// var sGitHub = "https://api.github.com/users/ZakkWilde/repos";
			// var oModeloGitHub = new JSONModel(sGitHub);
			// this.byId("table_github").setModel(oModeloGitHub, "github");

		},
		
		toUpper: function(sTexto){
			if(!sTexto){
				return "???";
			}
			// if(sTexto){
			return sTexto.toUpperCase();
			// }
		}
	});
});