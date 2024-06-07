describe("Consultando dados de uma Mátricula Irregular", () => {

    it("Deve validar uma consulta de dados de uma matricula invalida",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/515651184',
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equal(400);

        })

    });

});