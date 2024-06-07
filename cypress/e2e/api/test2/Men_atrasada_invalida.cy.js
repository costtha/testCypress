describe(" ", () => {

    it("Deve validar uma consulta de dados de uma matricula invalida",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/5566778',
                headers: {
                    'X-API-': 'unime-qualidade-oficial2'
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equal(401);

        })

    });

});