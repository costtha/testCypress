describe("Consultando dados de uma Matrícula regular", () => {

    it("Deve retornar todos os dados da matrícula ao informar um número de matrícula válido e sem restrições",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/4653421',
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);

        })

    });

});

