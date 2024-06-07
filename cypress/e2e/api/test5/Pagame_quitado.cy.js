describe("Consultando dados de uma Mátricula", () => {

    it("Deve ser possível consultar os dados de uma matrícula de um aluno que já realizou todos os pagamentos das mensalidades",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/1122334',
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);

        })

    });

});
