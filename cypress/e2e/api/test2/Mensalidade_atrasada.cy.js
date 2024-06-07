describe("Consultando matrícula com pagamento em atraso", () => {

    it("Deve retornar uma mensagem de erro ao consultar os dados de uma matrícula com pagamento em atraso",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/5566778',
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);

        })

    });

});
