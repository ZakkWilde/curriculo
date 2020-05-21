sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.data.binding.curriculo.controller.View1", {
		onInit: function () {
			
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
				competencias: ["ABAP", "UI5", "JavaScript"]
			};
			
			var oModeloPessoal = new JSONModel(oFonteDeDados);
			// console.log(oModeloPessoal);
			this.getView().setModel(oModeloPessoal);

		}
	});
});