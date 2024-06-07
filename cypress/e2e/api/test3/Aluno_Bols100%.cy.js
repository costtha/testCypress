describe("Consultando dados de uma Matrícula de Aluno Bolsista 100%", () => {

    it("Deve ser possível consultar os dados de uma matrícula de aluno bolsista 100% ao informar um número de matrícula válido e sem restrições",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/7890123',
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);

        })

    });

});

